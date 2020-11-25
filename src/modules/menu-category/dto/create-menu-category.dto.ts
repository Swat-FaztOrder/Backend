import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateMenuCategoryDto {
  @ApiProperty({ description: 'The menu category name', required: true })
  @IsString({ message: 'menu_category_name_required' })
  name: string;
}