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
            ${makeCardPairHtml("c1-1", "c1-2", "Bolla-gjeip")}
            ${makeCardPairHtml("c2-1", "c2-2", "Bolla")}
    `;
}

// all image must have .jpg extension and be in /img folder
function makeCardPairHtml(id, id2, imgFileName) {
  return /*html*/ `
        <div id="${id}" class="card"><img src="/img/${imgFileName}.jpg"/></div>
        <div id="${id2}" class="card"><img src="/img/${imgFileName}.jpg"/></div>
    `;
}
