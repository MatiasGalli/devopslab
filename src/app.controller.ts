import {
    Controller,
    Get,
} from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  getMany() {
    return 'Esto esta en dev actualizado xd 2/2/2021 12:00 am test ola';
  }
  // @Get(':id')
    // getOne() {
    //     return 'getOne';
    // }
}