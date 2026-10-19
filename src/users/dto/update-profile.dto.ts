import { IsOptional, IsString, MaxLength, Matches, ValidateIf } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProfileDto {
  @ApiProperty({ example: 'Maria da Silva', description: 'Nome completo que aparecerá no perfil.', required: false })
  @IsOptional()
  @IsString()
  fullName?: string;

  @ApiProperty({ example: 'https://cdn.example.com/avatar.jpg', description: 'URL do avatar do usuário.', required: false })
  @IsOptional()
  @IsString()
  avatarUrl?: string;

  @ApiProperty({ example: 'Produtora de eventos e coworking.', description: 'Biografia do perfil.', required: false, maxLength: 500 })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  bio?: string;

  @ApiProperty({ example: '+5511999999999', description: 'Telefone para contato público ou privado, conforme preferência.', required: false })
  @IsOptional()
  @ValidateIf(o => o.phone !== undefined && o.phone !== '')
  @IsString()
  @Matches(/^\+?[1-9]\d{6,14}$/, { message: 'Formato de telefone inválido. Use o padrão internacional (ex: +5511999999999)' })
  @MaxLength(20)
  phone?: string;
}
