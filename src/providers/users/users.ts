
import { Injectable } from '@angular/core';

/*
  Generated class for the usersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class usersProvider {

  users=[
    {
      jobTitle:'Creative engineer',
      company:'Bayt.com',
      interests:['UI design','Bussiness management']
    },
    {
      jobTitle:'Director of Bussiness management',
      company:'CSR',
      interests:['cold calling','Auto-Cad']
    },
    {
      jobTitle:'Software engineer',
      company:'Bayt.com',
      interests:['HR management','3d modeling']
    },
    {
      jobTitle:'Administrative Assistant ',
      company:'Chocolate Advertising LLC',
      interests:['Use case design','Software analysis']
    },
    {
      jobTitle:'Database admin',
      company:'Wales technical services',
      interests:['database design','Bussiness Management']
    },
  ];

  constructor() {
  }

  getUsers(){
    return this.users;
  }

}
