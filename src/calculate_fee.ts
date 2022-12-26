import {OrganisationUnit} from './models/OrganisationUnit/OrganisationUnit';
import {MINIMUM_MEMBERSHIP_FEE, rentPeriod} from './utils/constants';
import {calculate_fee_with_VAT, convertToPence} from './utils/functions';
import {ValidationError} from './utils/ValidationError';
import {validate_inputs} from './validation_function';



/**
 * 
 * @param rent_amount number in pound of the rent_amount
 * @param rent_period period is MONTH or WEEK
 * @param organisation_unit Object with name and config
 * @returns number in pence that represents the fee of membership
 */

export const calculate_membership_fee = (
  rent_amount: number,
  rent_period: string,
  organisation_unit: OrganisationUnit
) => {
  const membership_fee = organisation_unit.getMembershipFee();

  if (membership_fee) return membership_fee;

  const areInputsValid = validate_inputs(rent_amount, rent_period);

  if (!areInputsValid)
    throw new ValidationError('The rent amount is out of range');
  // get the amount of a week from rent amount of a month th if rent_period = MONTH
  const amount_week =
    rent_period === rentPeriod.MONTH ? rent_amount / 4 : rent_amount;
  // checking if the amount is >= £120 
  const real_amount_week =
    amount_week >= MINIMUM_MEMBERSHIP_FEE
      ? amount_week
      : MINIMUM_MEMBERSHIP_FEE;

  const vat_fee = calculate_fee_with_VAT(real_amount_week);
  // return the fee in integer format
  return Math.trunc(convertToPence(real_amount_week + vat_fee));
};
