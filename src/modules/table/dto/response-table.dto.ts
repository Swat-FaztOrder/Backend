import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class TableResponseDto {
  @Expose()
  id: number;
  @Expose()
  name: string;
  @Expose()
  isActive: boolean;
  @Expose()
  createdAt: Date;
  @Expose()
  updatedAt: Date;
}
