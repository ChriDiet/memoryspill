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

document.addEventListener("DOMContentLoaded", () => {
  drawGame();
});

function drawGame() {
  document.getElementById("app").innerHTML = /*html*/ `
            ${makeCardPairHtml("c1-1", "c1-2", "lexi", "lexi", "1")}
            ${makeCardPairHtml("c2-1", "c2-2", "Simba", "Simba", "2")}
            
    `;
}

// all image must have .jpg extension and be in /img folder
function makeCardPairHtml(id, id2, img, img2, cardNumber) {
  return /*html*/ `
        <div id="${id}" onclick="revealCard(id, '${img}')" class="card ${cardNumber}"><img src="/img/front.png"/></div>
        <div id="${id2}" onclick="revealCard(id, '${img}')" class="card ${cardNumber}"><img src="/img/front.png"/></div>
    `;
}

function revealCard(id, imgFileName) {
  document.getElementById(id).innerHTML = /*html*/ `
    <img src="/img/${imgFileName}.jpg"/>
  `;
  console.log(id);
  equalityImgCheck(id);
}

let clickedIds = [];
function equalityImgCheck(id) {
  // timeOutLength set in ms
  let timeOutLength = 1000;
  let imgArr = [];

  clickedIds.push(id);

  for (let i = 0; i < clickedIds.length; i++) {
    imgArr.push(document.getElementById(clickedIds[i]));
    console.log("imgDiv", imgArr[0].id.slice(0, 2));
    if (imgArr.length == 2) {
      let className = imgArr[0].id.slice(0, 2);
      let className2 = imgArr[1].id.slice(0, 2);
      //   let className = imgArr[0].className;
      //   let className2 = imgArr[1].className;
      console.log("inside loop", className + " " + className2);
      if (className != className2) {
        console.log("not equal");
        setTimeout(() => {
          turnWrongPair();
          clickedIds = [];
        }, timeOutLength);
      } else {
        // remove image divs function call;
      }
    }
  }

  //   clickedIds.forEach((element) => {
  //     imgArr.push(document.getElementById(element));
  //   });
  //   if (imgArr.length == 2) {
  //     for (let i = 0; i < imgArr.length; i++) {
  //       let className = imgArr[0].className;
  //       let className2 = imgArr[1].className;
  //       console.log("inside loop", className + " " + className2);
  //       if (className != className2) {
  //         console.log("not equal");
  //         setTimeout(() => {
  //           turnWrongPair();
  //           clickedIds = [];
  //         }, timeOutLength);
  //       } else {
  //         // remove image divs function call;
  //       }
  //     }
  //   }
  console.log(imgArr);
}

function turnWrongPair() {
  clickedIds.forEach((element) => {
    document.getElementById(element).innerHTML = /*html*/ `
        <img src="/img/front.png"/>
        `;
  });
}
