import DonutMaker from "./DonutMaker";

describe('DonutMaker', () => {
    test('can add a donut', () => {
      const underTest = new DonutMaker(0);
        underTest.addADonut();
        expect(underTest.donutTally).toEqual(1);
    });

    test('can i buy an auto clicker', () => {
        const underTest = new DonutMaker (100, 0);
        underTest.buyAutoClicker();
        expect(underTest.clickerTally).toEqual(1);
        expect(underTest.donutTally).toEqual(0);
    })

    test('not enough donuts to buy auto clicker', () => {
        const underTest = new DonutMaker (99, 0);
        underTest.buyAutoClicker();
        expect(underTest.clickerTally).toEqual(0);
        expect(underTest.donutTally).toEqual(99);
    })

    test('cost of additional auto clicker increase by 10%', () => {
        const underTest = new DonutMaker (110, 0);
        underTest.buyAdditionalAutoClickers();
        expect(underTest.clickerTally).toEqual(1);
        expect(underTest.donutTally).toEqual(0);
    })
});