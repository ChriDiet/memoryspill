// Krav
// Spillet skal ha et rutenett med kort (f.eks 4x4)
// Kortene skal være synlige når de klikkes på, og skjules hvis de ikke matcher
// Kortene skal inneholde bilder av (søte) dyr
// Når alle parene er matchet skal det vises en melding om at spillet er over

// 1. make function to look for clicks
// 2. show function based on clicked square{
//    set base img to at start.
//    dynamicly set img to card if clicked
// }
// 3. hide function if img not same{
//    dynamicly reset clicked img to base img if not equal
//    if equal make img presistent
// }
// 4. keep showing img that are same

let clickedIds = [];

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
    "gjeip-2",
  ];
  let elementIds = createImgId(16);
  let cardElements = makeCards(elementIds, imgNames);
  let shuffledElements = shuffleElements(cardElements);
  document.getElementById("app").innerHTML = shuffledElements.join("");
  // document.getElementById("app").innerHTML = /*html*/ `
  //           ${makeCardPairHtml("c1-1", "c1-2", "lexi", "lexi", "1")}
  //           ${makeCardPairHtml("c2-1", "c2-2", "Simba", "Simba", "2")}

  //   `;
}

function makeCards(ids, imgs) {
  let cardElements = [];
  for (let i = 0; i < imgs.length * 2; i++) {
    let index = Math.floor(i / 2);
    cardElements.push(makeCardHtml(ids[i], imgs[index]));
  }
  return cardElements;
}

// all image must have .jpg extension and be in /img folder
function makeCardHtml(id, img) {
  return /*html*/ `
        <div id="${id}" onclick="revealCard(id, '${img}')" class="card"><img src="/img/front.png"/></div>
    `;
}
// function makeCardPairHtml(id, imgName) {
//   return /*html*/ `
//         <div id="${id}" onclick="revealCard(id, '${imgName}')" class="card"><img src="/img/front.png"/></div>
//     `;
// }

function revealCard(id, imgFileName) {
  document.getElementById(id).innerHTML = /*html*/ `
    <img src="/img/${imgFileName}.jpg"/>
  `;
  console.log(id);
  equalityImgCheck(id);
}

function equalityImgCheck(id) {
  // timeOutLength set in ms
  let timeOutLength = 1000;

  clickedIds.push(id);
  for (let i = 0; i < clickedIds.length; i++) {
    if (clickedIds.length == 2) {
      console.log("clickedIds.slice", clickedIds[0].slice(0, 2));
      let className = clickedIds[0].slice(0, 2);
      let className2 = clickedIds[1].slice(0, 2);

      console.log("inside loop", className + " " + className2);
      if (className != className2) {
        console.log("not equal");
        setTimeout(() => {
          turnWrongPair();
          clickedIds = [];
        }, timeOutLength);
      } else {
        clickedIds = [];
        // remove image divs function call;
      }
    }
  }
}

function turnWrongPair() {
  clickedIds.forEach((element) => {
    document.getElementById(element).innerHTML = /*html*/ `
        <img src="/img/front.png"/>
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

function findId(arr) {
  for (let i = 0; i < arr.length; i++) {
    // return arr[i].id.slice(0, 2);
    // console.log(arr[i].id.slice(0, 2));
    console.log("arr index.id", arr[i].id);
  }
}
