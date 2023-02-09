import { Injectable } from '@nestjs/common';
import { IUSer } from './users.controller';

@Injectable()
export class UsersService {
  users: IUSer[];
  getUser(): IUSer[] {
    this.users = [
      { id: 1, name: 'admin' },
      { id: 2, name: 'marcus' },
      { id: 3, name: 'juwon' },
    ];
    return this.users;
  }
}
