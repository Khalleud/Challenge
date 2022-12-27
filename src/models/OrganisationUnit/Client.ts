import {OrganisationUnit} from './OrganisationUnit';

export class Client extends OrganisationUnit {
  public unitType: String = 'Client';
  /*public divisions: Division[];

  public addDivision(division: Division){

    division.setClient(this);
    this.divisions.push(division);
  }*/
}
