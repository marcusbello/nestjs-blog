import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

export interface IUSer {
  id: number;
  name: string;
}

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  getUsers() {
    return JSON.stringify(this.userService.getUser());
  }
}
