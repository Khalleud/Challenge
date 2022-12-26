import {OrganisationUnitConfig} from '../OrganisationUnitConfig/OrganisationUnitConfig';
/**
 * This class represent a Unit of an Organisation structure
 */
export class OrganisationUnit {
  public name: string;
  public config: OrganisationUnitConfig | null;
  public parentUnit: OrganisationUnit | null;
  public childrenUnits: OrganisationUnit[] | null;

  constructor(name: string, config: OrganisationUnitConfig | null = null) {
    this.name = name;
    this.config = config;
  }
  /**
   * 
   * @returns the membership fee of a unit
   */
  getMembershipFee(): number | null {
    if (this.config?.getHasFixedMembershipFee())
      return this.config?.getFixedMembershipFeeAmount();
    else if (!this.parentUnit) return null;
    else return this.parentUnit.getMembershipFee();
  }
  /**
   * 
   * @param parentUnit a Unit which this unit instance is attached
   */
  setParentUnit(parentUnit: OrganisationUnit) {
    this.parentUnit = parentUnit;
  }
  /**
   * 
   * @param childUnit A Unit that belongs to this unit instance
   */
  addChildrenUnit(childUnit: OrganisationUnit) {
    this.childrenUnits?.push(childUnit);
    childUnit.setParentUnit(this);
  }
}
