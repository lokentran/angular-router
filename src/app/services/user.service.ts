import { IUser } from './../iuser';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users :IUser[] = [
    {
      id: 1,
      name: 'Duong',
      phone: 113,
      email: 'duong@gmail.com',
      address: 'em o bac giang',
      role_id: 1
    },
    {
      id: 2,
      name: 'Duong Bac Giang',
      phone: 114,
      email: 'duongsida@gmail.com',
      address: 'em o bac giang',
      role_id: 2
    },
    {
      id: 3,
      name: 'Duong dau troc',
      phone: 115,
      email: 'duongxike@gmail.com',
      address: 'em o bac giang',
      role_id: 3
    },
    {
      id: 4,
      name: 'Duong so vo',
      phone: 116,
      email: 'duongJapan@gmail.com',
      address: 'em o bac giang',
      role_id: 2
    },
    {
      id: 5,
      name: 'Duong japan',
      phone: 117,
      email: 'duong123@gmail.com',
      address: 'em o bac giang',
      role_id: 2
    },
    {
      id: 6,
      name: 'Duong choc ngoay',
      phone: 911,
      email: 'duongchocngoay12@gmail.com',
      address: 'em o bac giang',
      role_id: 1
    }

  ];
  constructor() { }

  getAll() {
    return this.users;
  }

  add(user:IUser): void{
    this.users.push(user);
  }

  getUserById(id: number): IUser {
    const index = this.users.findIndex(users => users.id === id);
    return this.users[index];
  }

  updateUser(user, id){
    const index = this.users.findIndex(users => users.id === id);
    this.users.splice(index, 1, user);
  }
}
