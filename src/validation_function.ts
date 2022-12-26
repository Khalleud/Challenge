import {
  MAX_RENT_AMOUNT_PER_MONTH,
  MAX_RENT_AMOUNT_PER_WEEK,
  MIN_RENT_AMOUNT_PER_MONTH,
  MIN_RENT_AMOUNT_PER_WEEK,
  rentPeriod,
} from './utils/constants';

/**
 * This function check whether rent amount is within a range defined by WEEK or MONTH
 * @param rent_amount  number in pound represent the amount of the rent
 * @param rent_period  period of rent could be WEEK or MONTH
 * @returns true if 25 <= rent_amout >=2000 and rend_period is WEEK or 110 <= rent_amout >= 8660 if rent_period is MONTH
 */

export const validate_inputs = (rent_amount: number, rent_period: string) => {
  if (rent_period === rentPeriod.WEEK)
    if (
      rent_amount >= MIN_RENT_AMOUNT_PER_WEEK &&
      rent_amount <= MAX_RENT_AMOUNT_PER_WEEK
    )
      return true;
  if (rent_period === rentPeriod.MONTH)
    if (
      rent_amount >= MIN_RENT_AMOUNT_PER_MONTH &&
      rent_amount <= MAX_RENT_AMOUNT_PER_MONTH
    )
      return true;

  return false;
};
