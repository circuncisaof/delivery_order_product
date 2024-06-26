import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class AddressDto {
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsNumber()
  number_home: number;

  @IsNotEmpty()
  @IsOptional()
  @IsString()
  complements: string;

  @IsNotEmpty()
  @IsString()
  neighborhoods: string;

  @IsNotEmpty()
  @IsString()
  zip_code: string;
}
