import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto'
import { UserService } from './user.service'

@Controller('users')
export class UsersController {
   userService : UserService;
    constructor () {
      this.userService = new UserService();
    }
  @Get()
  listUsers() {
    return this.userService.findAll();
  }

  @Post()
  createUsers(@Body() body:CreateUserDto) {
    this.userService.create(body);
  }

  @Get('/:id')
  getUsers(@Param() id:string) {
    return this.getUsers(id);
  }
}
