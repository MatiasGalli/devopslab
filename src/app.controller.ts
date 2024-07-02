import {
    Controller,
    Get,
} from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  getMany() {
    return 'ola chicos';
  }
  // @Get(':id')
    // getOne() {
    //     return 'getOne';
    // }
}