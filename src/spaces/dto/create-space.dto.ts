import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsInt,
  Min,
  IsNumber,
  IsArray,
  IsBoolean,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSpaceDto {
  @ApiProperty({ example: 'Sala de Reunião', description: 'Nome do espaço que será cadastrado.' })
  @IsString()
  @IsNotEmpty({ message: 'O nome do espaço é obrigatório' })
  name: string;

  @ApiProperty({ example: 'Sala com mesa grande, TV e webcam.', description: 'Descrição detalhada do espaço.', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 8, description: 'Capacidade máxima de pessoas no espaço.' })
  @Type(() => Number)
  @IsInt({ message: 'A capacidade deve ser um número inteiro' })
  @Min(1, { message: 'A capacidade mínima é de 1 pessoa' })
  capacity: number;

  @ApiProperty({ example: 80, description: 'Preço por hora do espaço.' })
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'O preço por hora deve ser um valor numérico válido' })
  @Min(0, { message: 'O preço por hora não pode ser negativo' })
  pricePerHour: number;

  @ApiProperty({ example: ['Wi-Fi', 'Projetor'], description: 'Lista de recursos disponíveis no espaço.', type: [String], required: false })
  @IsArray()
  @IsOptional()
  resources?: string[];

  @ApiProperty({ example: 'https://cdn.example.com/space.jpg', description: 'URL da imagem principal do espaço.', required: false })
  @IsString()
  @IsOptional()
  imageUrl?: string;

  @ApiProperty({ example: ['https://cdn.example.com/space1.jpg'], description: 'Lista de imagens do espaço.', type: [String], required: false })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  images?: string[];

  @ApiProperty({ example: true, description: 'Indica se o espaço está ativo para reservas.', required: false })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
