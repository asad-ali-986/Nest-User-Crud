import { Controller, Get, Post,Delete, Body, Param } from '@nestjs/common';
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
  createUser(@Body() body:CreateUserDto) {
    this.userService.create(body);
  }

  @Get(':id')
  getUser(@Param('id') id:string) {
    return this.userService.findOne(id);
  }

  @Delete('delete/:id')
  deleteUser(@Param('id') id:string) {
    return this.userService.delete(id);
  }

  @Delete()
  deleteAllUsers() {
    return this.userService.deleteAll();
  }

}
