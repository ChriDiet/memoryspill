// Krav
// Spillet skal ha et rutenett med kort (f.eks 4x4)
// Kortene skal være synlige når de klikkes på, og skjules hvis de ikke matcher
// Kortene skal inneholde bilder av (søte) dyr
// Når alle parene er matchet skal det vises en melding om at spillet er over
document.addEventListener("DOMContentLoaded", () => {
  drawGame();
});

function drawGame() {
  document.getElementById("app").innerHTML = /*html*/ `
        <div id="c1">
            <div class="card"><img src="/img"/></div>
            <div class="card">TEST</div>
        </div>
        <div id="c2">
            <div class="card">TEST</div>
            <div class="card">TEST</div>
        </div>
    `;
}
