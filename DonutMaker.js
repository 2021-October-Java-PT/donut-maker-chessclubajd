const donutTallyDisplay = document.querySelector("donutTallyDisplay");
class DonutMaker {
  constructor(
    donutTally,
    clickerTally,
    costOfAutoClicker,
    costOfMultiplier,
    numberOfMultipliers
  ) {
    this.donutTally = donutTally;
    this.clickerTally = clickerTally;
    this.costOfAutoClicker = costOfAutoClicker;
    this.costOfMultiplier = costOfMultiplier;
    this.numberOfMultipliers = numberOfMultipliers;
  }

  addADonut() {
    if (this.numberOfMultipliers === 0) {
      this.donutTally += 1;
    } else {
      this.donutTally += Math.pow(1.2, this.numberOfMultipliers);
    }
  }

  getDonutTally() {
    return donutTally;
  }

  buyAutoClicker() {
    if (this.donutTally >= this.costOfAutoClicker) {
      this.clickerTally += 1;
      this.donutTally -= this.costOfAutoClicker;
      const clickerIncrease = this.costOfAutoClicker * 0.1;
      this.costOfAutoClicker += clickerIncrease;
      console.log(
        "newest price of auto clicker is:  " + this.costOfAutoClicker
      );
    }
  }
}

export default DonutMaker;
