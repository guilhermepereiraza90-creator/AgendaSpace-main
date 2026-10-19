import { IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    example: 'admin@agendaspace.local',
    description: 'E-mail do usuário para fazer login.',
    format: 'email',
  })
  @IsEmail({}, { message: 'E-mail inválido' })
  @IsNotEmpty({ message: 'O e-mail é obrigatório' })
  email: string;

  @ApiProperty({
    example: 'Admin@123456',
    description: 'Senha da conta do usuário.',
    minLength: 8,
  })
  @IsString()
  @IsNotEmpty({ message: 'A senha é obrigatória' })
  password: string;
}

export class VerifyCodeDto {
  @IsString()
  @IsOptional()
  challengeId?: string;

  @IsString()
  @IsOptional()
  code?: string;

  @IsString()
  @IsOptional()
  recoveryCode?: string;

  @IsString()
  @IsOptional()
  userId?: string;

  @IsString()
  @IsOptional()
  password?: string;
}

export class ResendCodeDto {
  @IsString()
  @IsNotEmpty()
  challengeId: string;
}
