import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class Enable2FADto {
  @ApiProperty({ example: 'MinhaSenha@123', description: 'Senha atual para habilitar a autenticação em duas etapas.' })
  @IsString()
  @IsNotEmpty()
  password!: string;
}

export class Disable2FADto {
  @ApiProperty({ example: 'MinhaSenha@123', description: 'Senha atual para desabilitar a autenticação em duas etapas.' })
  @IsString()
  @IsNotEmpty()
  password!: string;
}

export class RegenerateRecoveryDto {
  @ApiProperty({ example: 'MinhaSenha@123', description: 'Senha atual para regenerar os códigos de recuperação.' })
  @IsString()
  @IsNotEmpty()
  password!: string;
}
