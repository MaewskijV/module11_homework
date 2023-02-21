const getPercents = require("./index");
describe('Percent test', () => {
    it('30% from 100', () => {
        expect(getPercents(30, 100)).toBe(30);
    }),
    it('330% from 360', () => {
        expect(getPercents(330, 360)).toBe(1188);
    }),
    it('30% from 100', () => {
        expect(getPercents('dd', 360)).toBe("Данные не верны");
    }),
    it('30% from 100', () => {
        expect(getPercents(NaN, 360)).toBe("Данные не верны");
    }),
    it('30% from 100', () => {
        expect(getPercents('dd', NaN)).toBe("Данные не верны");
    }),
    it('30% from 100', () => {
        expect(getPercents('dd', 'one hundred')).toBe("Данные не верны");
    })
});


