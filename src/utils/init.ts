import {Area} from '../models/OrganisationUnit/Area';
import {Branch} from '../models/OrganisationUnit/Branch';
import {Client} from '../models/OrganisationUnit/Client';
import {Division} from '../models/OrganisationUnit/Division';
import {OrganisationUnitConfig} from '../models/OrganisationUnitConfig/OrganisationUnitConfig';


/**
 * 
 * @returns Units of organisation structures that are defined
 */

export const init = () => {
  // Instanciate Units
  const client = new Client('client', new OrganisationUnitConfig(false, 0));

  const division_a = new Division(
    'division_a',
    new OrganisationUnitConfig(false, 0)
  );
  const division_b = new Division(
    'division_b',
    new OrganisationUnitConfig(true, 35000)
  );

  const area_a = new Area('area_a', new OrganisationUnitConfig(true, 45000));
  const area_c = new Area('area_c', new OrganisationUnitConfig(true, 45000));
  const branch_a = new Branch('branch_a', null);
  const branch_b = new Branch('branch_b', new OrganisationUnitConfig(false, 0));
  const branch_d = new Branch('branch_d', null);
  const branch_i = new Branch('branch_i', new OrganisationUnitConfig(false, 0));
  const branch_k = new Branch(
    'branch_k',
    new OrganisationUnitConfig(true, 25000)
  );
  // linking the units
  client.addChildrenUnit(division_a);
  client.addChildrenUnit(division_b);

  division_a.addChildrenUnit(area_a);
  division_b.addChildrenUnit(area_c);

  area_a.addChildrenUnit(branch_a);
  area_a.addChildrenUnit(branch_b);
  area_a.addChildrenUnit(branch_d);

  area_c.addChildrenUnit(branch_i);
  area_c.addChildrenUnit(branch_k);

  return [
    client,
    division_a,
    division_b,
    area_a,
    area_c,
    branch_a,
    branch_b,
    branch_d,
    branch_i,
    branch_k,
  ];
};
