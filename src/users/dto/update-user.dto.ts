import { IsOptional, IsString, IsEnum, IsBoolean, ValidateIf } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../../auth/enums/role.enum';

export class UpdateUserDto {
  @ApiProperty({ example: 'Maria da Silva', description: 'Nome completo do usuário.', required: false })
  @IsOptional()
  @IsString()
  fullName?: string;

  @ApiProperty({ example: 'https://cdn.example.com/user.jpg', description: 'URL do avatar do usuário.', required: false })
  @IsOptional()
  @IsString()
  avatarUrl?: string;

  @ApiProperty({ example: 'maria@agendaspace.local', description: 'E-mail do usuário.', required: false })
  @IsOptional()
  @IsString()
  email?: string;

  @ApiProperty({ example: 'ADMIN', description: 'Nível de acesso do usuário.', required: false, enum: Role })
  @IsOptional()
  @IsEnum(Role, { message: 'Role deve ser ADMIN ou USER.' })
  role?: Role;

  @ApiProperty({ example: false, description: 'Define se o usuário está desativado.', required: false })
  @IsOptional()
  @IsBoolean()
  isDeleted?: boolean;

  @ApiProperty({ example: 'Gestora de eventos.', description: 'Biografia do usuário.', required: false })
  @IsOptional()
  @IsString()
  bio?: string;

  @ApiProperty({ example: '+5511999998888', description: 'Telefone do usuário.', required: false })
  @IsOptional()
  @ValidateIf(o => o.phone !== undefined && o.phone !== '')
  @IsString()
  phone?: string;
}
