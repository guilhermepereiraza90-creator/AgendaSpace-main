import { IsNotEmpty, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PushSubscriptionKeysDto {
  @ApiProperty({ example: 'BHWm7...', description: 'Chave pública do cliente para Web Push.' })
  @IsString()
  @IsNotEmpty()
  p256dh: string;

  @ApiProperty({ example: 'abc123...', description: 'Chave de autenticação do cliente para Web Push.' })
  @IsString()
  @IsNotEmpty()
  auth: string;
}

export class SubscribePushDto {
  @ApiProperty({ example: 'https://fcm.googleapis.com/fcm/send/abc', description: 'Endpoint do navegador para receber notificações push.' })
  @IsString()
  @IsNotEmpty()
  endpoint: string;

  @ApiProperty({ type: PushSubscriptionKeysDto, description: 'Chaves criptográficas do navegador para Web Push.' })
  @IsObject()
  @ValidateNested()
  @Type(() => PushSubscriptionKeysDto)
  keys: PushSubscriptionKeysDto;

  @ApiProperty({ example: 'Chrome Desktop', description: 'Informações do dispositivo ou navegador.', required: false })
  @IsString()
  @IsOptional()
  deviceInfo?: string;
}

export class UnsubscribePushDto {
  @ApiProperty({ example: 'https://fcm.googleapis.com/fcm/send/abc', description: 'Endpoint que será removido da assinatura push.' })
  @IsString()
  @IsNotEmpty()
  endpoint: string;
}
