import { IsString, IsNotEmpty, MinLength, IsOptional, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ForgotPasswordDto {
  @ApiProperty({ example: 'usuario@agendaspace.local', description: 'E-mail cadastrado para iniciar a recuperação de senha.' })
  @IsEmail({}, { message: 'Informe um email válido.' })
  @IsNotEmpty({ message: 'O email é obrigatório.' })
  email!: string;
}

export class ResetPasswordDto {
  @ApiProperty({ example: 'token-recuperacao-123', description: 'Token recebido por e-mail para redefinir a senha.' })
  @IsString()
  @IsNotEmpty({ message: 'O token é obrigatório.' })
  token!: string;

  @ApiProperty({ example: 'NovaSenha@456', description: 'Nova senha desejada para a conta.' })
  @IsString()
  @IsNotEmpty({ message: 'A nova senha é obrigatória.' })
  @MinLength(6, { message: 'A nova senha deve ter no mínimo 6 caracteres.' })
  newPassword!: string;
}

export class ChangePasswordInitDto {
  @ApiProperty({ example: 'SenhaAtual@123', description: 'Senha atual do usuário.' })
  @IsString()
  @IsNotEmpty()
  currentPassword!: string;

  @ApiProperty({ example: 'NovaSenha@456', description: 'Nova senha que será aplicada.' })
  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'A nova senha deve ter no mínimo 6 caracteres.' })
  newPassword!: string;
}

export class ChangePasswordConfirmDto {
  @ApiProperty({ example: 'challenge-uuid-123', description: 'Identificador do desafio de autenticação.' })
  @IsString()
  @IsNotEmpty()
  challengeId!: string;

  @ApiProperty({ example: '123456', description: 'Código de verificação, quando aplicável.', required: false })
  @IsString()
  @IsOptional()
  code?: string;

  @ApiProperty({ example: 'ABC123', description: 'Código de recuperação, quando aplicável.', required: false })
  @IsString()
  @IsOptional()
  recoveryCode?: string;
}
