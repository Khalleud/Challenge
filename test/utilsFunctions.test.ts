import { calculate_fee_with_VAT, convertToPence } from "../src/utils/functions";

describe('Testing util functions', () => {
    it('Conversion to Pence', () => {
        expect(Number(convertToPence(100).toFixed(3))).toBe(10659.646);
    });
    it('Calculate VAT', () => {
        expect(calculate_fee_with_VAT(120)).toBe(24);
    });
});
