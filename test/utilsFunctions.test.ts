import { calculate_fee_with_VAT, convertToPence } from "../src/utils/functions";

describe('Testing util functions', () => {
    it('Conversion to Pence', () => {
        expect(Number(convertToPence(120).toFixed(3))).toBe(12000);
    });
    it('Calculate VAT', () => {
        expect(calculate_fee_with_VAT(120)).toBe(24);
    });
});
