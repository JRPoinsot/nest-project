import { Controller, Get, Param } from '@nestjs/common';

@Controller('sale')
export class SaleController {

  @Get()
  findAll(): string {
    return 'All sales';
    // This endpoint will never get called
    // because the "/cats" request is going
    // to be captured by the "/cats/:id" route handler
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.info(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
