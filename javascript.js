let clickedIds = [];
let counter = 0;

document.addEventListener("DOMContentLoaded", () => {
  drawGame();
});

function drawGame() {
  let imgNames = [
    "Bolla-gjeip",
    "bolla",
    "lexi",
    "liam",
    "lucifer",
    "Simba",
    "simba2",
    "lexi-gjeip",
  ];
  let elementIds = createImgId(16);
  let cardElements = makeCards(elementIds, imgNames);
  let shuffledElements = shuffleElements(cardElements);
  document.getElementById("app").innerHTML = shuffledElements.join("");
}

function makeCards(ids, imgs) {
  let cardElements = [];
  for (let i = 0; i < imgs.length * 2; i++) {
    let index = Math.floor(i / 2);
    cardElements.push(makeCardHtml(ids[i], imgs[index]));
  }
  return cardElements;
}

function makeCardHtml(id, img) {
  return /*html*/ `
        <div id="${id}" onclick="revealCard(id, '${img}')" class="card" ><img src="/img/logo.svg"/></div>
    `;
}

function revealCard(id, imgFileName) {
  document.getElementById(id).innerHTML = /*html*/ `
    <img src="/img/${imgFileName}.jpg"/>
  `;
  equalityImgCheck(id);
}

function equalityImgCheck(id) {
  // timeOutLength set in ms

  let boardClearedTimer = 500;
  let timeOutLength = 1000;

  clickedIds.push(id);
  for (let i = 0; i < clickedIds.length; i++) {
    if (clickedIds.length == 2) {
      let className = clickedIds[0].slice(0, 2);
      let className2 = clickedIds[1].slice(0, 2);

      if (className != className2) {
        setTimeout(() => {
          turnWrongPair();
          clickedIds = [];
        }, timeOutLength);
      } else {
        setTimeout(() => {
          const ids = [...clickedIds];
          document.getElementById(ids[0]).style.opacity = 0.5;
          document.getElementById(ids[1]).style.opacity = 0.5;

          counter++;

          clickedIds = [];
        }, timeOutLength);
      }
      if (counter == 7) {
        setTimeout(() => {
          document.getElementById("text").innerHTML = /*html*/ `
            <h2>Gratulerer du er ferdig!</h2>
           `;
          document.getElementById("app").innerHTML = /*html*/ ``;
        }, boardClearedTimer);
      }
    }
  }
}

function turnWrongPair() {
  clickedIds.forEach((element) => {
    document.getElementById(element).innerHTML = /*html*/ `
        <img src="/img/logo.svg"/>
        `;
  });
}

function createImgId(amount) {
  let num = 1;
  let arr = [];
  for (let i = 0; i < amount; i++) {
    let num2 = (i % 2) + 1;
    if (num2 === 1 && i > 0) {
      num++;
    }
    arr.push(`c${num}-${num2}`);
  }
  return arr;
}

// Fisher-Yates Shuffle
function shuffleElements(elements) {
  let newElements = [...elements];
  for (let i = newElements.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    let temp = newElements[i];
    newElements[i] = newElements[j];
    newElements[j] = temp;
  }
  return newElements;
}
