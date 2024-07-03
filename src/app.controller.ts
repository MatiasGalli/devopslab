import {
    Controller,
    Get,
} from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  getMany() {
    return 'Main page';
  }
  // @Get(':id')
    // getOne() {
    //     return 'getOne';
    // }
}