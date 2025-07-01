import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({summary: 'This API route is responsible for handling AI messages so that they can then be processed by a provider that will format the AI ​​interaction in the form of a chat.'})
  getHello(): string {
    return this.appService.getHello();
  }
}
