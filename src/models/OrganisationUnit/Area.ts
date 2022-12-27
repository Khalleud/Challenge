import {OrganisationUnit} from './OrganisationUnit';

export class Area extends OrganisationUnit {

  public unitType: String = 'Area';

  /*public childrenBranches : Branch[] | null;
  public parentDivision: Division | null ;
  constructor (name: string, config: OrganisationUnitConfig ){
    super(name, config);
    }

  addBranch( branch: Branch){
    branch.setArea(this);
    this.childrenBranches?.push(branch);
  }

  setDivision(division: Division){
    this.parentUnit = division;
   }*/
}
