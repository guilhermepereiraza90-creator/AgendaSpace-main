import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({
    example: 'novo@agendaspace.local',
    description: 'E-mail do usuário para cadastro.',
    format: 'email',
  })
  @IsEmail({}, { message: 'E-mail inválido' })
  @IsNotEmpty({ message: 'O e-mail é obrigatório' })
  email: string;

  @ApiProperty({
    example: 'MinhaSenha@123',
    description: 'Senha da conta. Deve ter pelo menos 6 caracteres.',
    minLength: 6,
  })
  @IsString()
  @IsNotEmpty({ message: 'A senha é obrigatória' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  password: string;

  @ApiProperty({
    example: 'Maria da Silva',
    description: 'Nome completo do usuário.',
  })
  @IsString()
  @IsNotEmpty({ message: 'O nome completo é obrigatório' })
  fullName: string;
}

