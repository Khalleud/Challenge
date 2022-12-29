import {calculate_membership_fee} from '../src/calculate_fee';
import {Area} from '../src/models/OrganisationUnit/Area';
import {Branch} from '../src/models/OrganisationUnit/Branch';
import {OrganisationUnitConfig} from '../src/models/OrganisationUnitConfig/OrganisationUnitConfig';
import {rentPeriod} from '../src/utils/constants';

describe('Testing calculate_membership_fee function', () => {
  it('when organisation unit has a config', () => {
    const branch = new Branch(
      'branch_k',
      new OrganisationUnitConfig(true, 25000)
    );
    expect(calculate_membership_fee(150, rentPeriod.WEEK, branch)).toBe(25000);
  });

  it("when organisation unit hasn't a config but parent does", () => {
    const branch = new Branch('branch_a', new OrganisationUnitConfig(false, 0));
    const area = new Area('area_a', new OrganisationUnitConfig(true, 25000));
    area.addChildrenUnit(branch);
    expect(calculate_membership_fee(150, rentPeriod.WEEK, branch)).toBe(25000);
  });

  it('when organisation unit has not a config and rent amout is lower than 120', () => {
  const branch = new Branch('branch', new OrganisationUnitConfig(false, 0));
  expect(calculate_membership_fee(80, rentPeriod.WEEK, branch)).toBe(14400);
});
  it('when organisation unit has not a config and the period is a month', () => {
    const branch = new Branch('branch', new OrganisationUnitConfig(false, 0));
    expect(() => {
      calculate_membership_fee(20, rentPeriod.WEEK, branch);
    }).toThrow('The rent amount is out of range');
});
});
