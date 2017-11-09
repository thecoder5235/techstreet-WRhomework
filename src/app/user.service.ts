
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()

export class UserService {



  users: User[] = [];



  public serverResponse = '{ "email": [ "can\'t be blank" ], "first_name": [ "can\'t be blank" ], "last_name": [ "can\'t be blank" ] }'; 

  private userDictionary = { 

    1: '{ "id": 1, "buyer_id": 1, "first_name": "josh", "last_name": "Hoskins", "email": "josh.hoskins@sgmail.com" }',

    2: '{ "id": 2, "buyer_id": 2, "first_name": "lance", "last_name": "salkind", "email": "lance.salkind@sgmail.com" }',

    3: '{ "id": 3, "buyer_id": 3, "first_name": "Will", "last_name": "Rosati", "email": "will.Rosati@gmail.com" }'

  };


  constructor() { }

  getUsers() {

   this.users = JSON.parse("["+Object.keys(this.userDictionary).map(key => this.userDictionary[key]).join(',')+"]");

  }

  getUser(id: number) {

    return JSON.parse(this.userDictionary[id]);

  }

  private logError(error: any) {

    console.error('service found an error: '+error);

  }



}
