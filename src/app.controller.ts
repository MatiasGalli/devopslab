import {
    Controller,
    Get,
} from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  getMany() {
    return 'Main page xd';
  }
  // @Get(':id')
    // getOne() {
    //     return 'getOne';
    // }
}