import { rentPeriod } from "../src/utils/constants";
import { validate_inputs } from "../src/validation_function";

describe('Testing validation function', () => {
    it(' rent out of range in a period of a month', () => {
        expect(validate_inputs(100, rentPeriod.MONTH)).toBeFalsy();
    });
    it('rent in range in a period of a week', () => {
        expect(validate_inputs(30, rentPeriod.WEEK)).toBeTruthy();
    });
});