import {PENCE_UNIT, VAT} from './constants';
/**
 * 
 * @param fee number to be converted to pence
 * @returns 
 */
export const convertToPence = (fee: number) => {
  return fee * PENCE_UNIT;
};

/**
 * 
 * @param fee number for which we calculate the vat
 * @param vat percentage of VAT
 * @returns the VAT of the fee
 */
export const calculate_fee_with_VAT = (fee: number, vat: number = VAT) => {
  return fee * vat;
};
