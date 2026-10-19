import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum PaymentMethodEnum {
  PIX = 'PIX',
  CREDIT_CARD = 'CREDIT_CARD',
}

export class PayBookingDto {
  @ApiProperty({ example: 'PIX', description: 'Método de pagamento selecionado para a reserva.', enum: PaymentMethodEnum })
  @IsEnum(PaymentMethodEnum, { message: 'Método de pagamento inválido' })
  @IsNotEmpty({ message: 'O método de pagamento é obrigatório' })
  method: PaymentMethodEnum;

  @ApiProperty({ example: 'pay-2026-11-10-abc123', description: 'Chave de idempotência para evitar duplicidade de pagamento.' })
  @IsString()
  @IsNotEmpty({ message: 'Chave de idempotência é obrigatória' })
  idempotencyKey: string;

  @ApiProperty({ example: 'Aceito os termos do contrato.', description: 'Texto de aceite do contrato de locação.' })
  @IsString()
  @IsNotEmpty({ message: 'Texto de aceite do contrato é obrigatório' })
  contractAcceptedText: string;

  @ApiProperty({ example: '2026.10', description: 'Versão do contrato aceita pelo usuário.' })
  @IsString()
  @IsNotEmpty({ message: 'Versão do contrato é obrigatória' })
  contractVersion: string;
}
