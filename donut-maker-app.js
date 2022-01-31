import DonutMaker from "./DonutMaker";

renderPage();

function renderPage() {
  addADonut();
  addAutoClicker();
}

const donutMaker = new DonutMaker(0, 0, 10, 10, 0);
const donutTallyDisplay = document.querySelector("#donutCntr");

function addADonut() {
  const donutBtn = document.querySelector(".donutBtn");

  donutBtn.addEventListener("click", () => {
    donutMaker.addADonut();
    donutTallyDisplay.innerText = donutMaker.donutTally;
    console.log(donutMaker.donutTally);
  });
}

function addAutoClicker() {
  const autoBtn = document.querySelector(".autoBtn");
  const clickerCntr = document.querySelector("#clickerCntr");

  autoBtn.addEventListener("click", () => {
    donutMaker.buyAutoClicker();
    donutTallyDisplay.innerText = donutMaker.donutTally;
    clickerCntr.innerText = donutMaker.clickerTally;
    console.log(donutMaker.donutTally);
  });
  // possible spot for set interval
}

function addMultiplier() {
  const multiplyBtn = document.querySelector(".multiplyBtn");
  const autoBtn = document.querySelector(".autoBtn");
  const clickerCntr = document.querySelector("#clickerCntr");

  multiplyBtn.addEventListener("click", () => {
    donutMaker.getMultiplier();
    donutTallyDisplay.innerText = donutMaker.donutTally;
    multiplyCntr.innerText = donutMaker.numberOfMultipliers;
  });
}

function activateAutoClicker() {
  donutMaker.addADonut();
  donutTallyDisplay.innerText = donutMaker.donutTally;
}

function addAutoClicker() {
  const autoBtn = document.querySelector(".autoBtn");
  const clickerCntr = document.querySelector("#clickerCntr");

  autoBtn.addEventListener("click", () => {
    donutMaker.buyAutoClicker();
    donutTallyDisplay.innerText = donutMaker.donutTally;
    clickerCntr.innerText = donutMaker.clickerTally;
    console.log(donutMaker.donutTally);
    setInterval(activateAutoClicker, 1000);
  });
}
