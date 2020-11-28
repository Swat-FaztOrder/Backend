import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class OrderCreateDto {
  @ApiProperty({
    description: 'The waitress that attend the order',
    required: true,
  })
  @IsNumber({}, { message: 'order_waitress_required' })
  waitressId: number;
  @ApiProperty({
    description: 'The table of the order',
    required: true,
  })
  @IsNumber({}, { message: 'order_table_required' })
  tableId: number;
  @ApiProperty({ description: 'The total diners', required: false })
  totalDiners: number;
  authorId: number;
}