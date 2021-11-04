import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getUsers(): any {
    return this.appService.getUsers();
  }

  @Get('user')
  getUser(): any {
    return this.appService.getUser();
  }

  @Delete('user')
  deleteUser(): void {
    return this.appService.deleteUser();
  }

  @Post('user')
  postUser(@Body() requestBody: any): void {
    return this.appService.addUser(requestBody);
  }

  @Patch('user')
  patchUser(@Body() requestBody: any): void {
    return this.appService.updateUser(requestBody);
  }

  @Get('get')
  getHello(): any {
    return this.appService.getHello();
  }

  @Post('post')
  postHello(@Body() requestBody: any, @Query() query: any): void {
    return this.appService.postHello(requestBody, query);
  }

  @Patch('patch')
  patchHello(@Query() query: any): void {
    return this.appService.patchHello(query);
  }

  @Delete('delete')
  deleteHello(): void {
    return this.appService.deleteHello();
  }
}
