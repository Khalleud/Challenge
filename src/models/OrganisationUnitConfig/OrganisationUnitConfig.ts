export class OrganisationUnitConfig {
  public has_fixed_membership_fee: boolean;

  public fixed_membership_fee_amount: number;

  constructor(
    has_fixed_membership_fee: boolean,
    fixed_membership_fee_amount: number
  ) {
    this.has_fixed_membership_fee = has_fixed_membership_fee;
    this.fixed_membership_fee_amount = fixed_membership_fee_amount;
  }

  getHasFixedMembershipFee() {
    return this.has_fixed_membership_fee;
  }

  getFixedMembershipFeeAmount() {
    return this.fixed_membership_fee_amount;
  }
}
