import {
  IsString,
  IsOptional,
  IsInt,
  Min,
  IsNumber,
  IsArray,
  IsBoolean,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSpaceDto {
  @ApiProperty({ example: 'Sala de Reunião Premium', description: 'Novo nome do espaço.', required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ example: 'Sala com teto de vidro e iluminação profissional.', description: 'Nova descrição do espaço.', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 10, description: 'Nova capacidade máxima do espaço.', required: false })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  capacity?: number;

  @ApiProperty({ example: 120, description: 'Novo preço por hora.', required: false })
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @IsOptional()
  pricePerHour?: number;

  @ApiProperty({ example: ['Wi-Fi', 'Projetor', 'Ar-condicionado'], description: 'Recursos atualizados do espaço.', type: [String], required: false })
  @IsArray()
  @IsOptional()
  resources?: string[];

  @ApiProperty({ example: 'https://cdn.example.com/nova-imagem.jpg', description: 'URL da imagem principal.', required: false })
  @IsString()
  @IsOptional()
  imageUrl?: string;

  @ApiProperty({ example: ['https://cdn.example.com/1.jpg'], description: 'Lista de imagens do espaço.', type: [String], required: false })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  images?: string[];

  @ApiProperty({ example: false, description: 'Define se o espaço está disponível para reservas.', required: false })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
