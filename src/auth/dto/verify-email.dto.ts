import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VerifyEmailDto {
  @ApiProperty({ example: 'usuario@agendaspace.local', description: 'E-mail da conta a ser verificada.' })
  @IsEmail({}, { message: 'Formato de e-mail inválido.' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'abc123xyz', description: 'Token de confirmação de e-mail.' })
  @IsString()
  @IsNotEmpty()
  token: string;
}

export class ResendVerificationDto {
  @ApiProperty({ example: 'usuario@agendaspace.local', description: 'E-mail para reenviar a verificação.' })
  @IsEmail({}, { message: 'Formato de e-mail inválido.' })
  @IsNotEmpty()
  email: string;
}

export class ChangeEmailDto {
  @ApiProperty({ example: 'novo@agendaspace.local', description: 'Novo e-mail desejado.' })
  @IsEmail({}, { message: 'Formato de e-mail inválido.' })
  @IsNotEmpty()
  newEmail: string;

  @ApiProperty({ example: 'MinhaSenha@123', description: 'Senha atual do usuário para confirmar a troca.' })
  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
  password: string;
}

export class ConfirmChangeEmailAuthDto {
  @ApiProperty({ example: 'f1a2b3c4-d5e6-7890', description: 'Identificador do desafio de autenticação.' })
  @IsString()
  @IsNotEmpty()
  challengeId: string;

  @ApiProperty({ example: '123456', description: 'Código de confirmação enviado ao usuário.' })
  @IsString()
  @IsNotEmpty()
  code: string;
}
