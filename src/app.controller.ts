import {
    Controller,
    Get,
} from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  getMany() {
    return 'Esto esta en dev actualizado';
  }
  // @Get(':id')
    // getOne() {
    //     return 'getOne';
    // }
}