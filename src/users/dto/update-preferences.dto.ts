import { IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePreferencesDto {
  @ApiProperty({ example: true, description: 'Receber notificações por e-mail.', required: false })
  @IsBoolean()
  @IsOptional()
  emailNotifications?: boolean;

  @ApiProperty({ example: true, description: 'Receber e-mails relacionados a reservas.', required: false })
  @IsBoolean()
  @IsOptional()
  emailBookings?: boolean;

  @ApiProperty({ example: true, description: 'Receber lembretes sobre reservas.', required: false })
  @IsBoolean()
  @IsOptional()
  emailReminders?: boolean;

  @ApiProperty({ example: true, description: 'Receber alertas de login e segurança.', required: false })
  @IsBoolean()
  @IsOptional()
  loginAlerts?: boolean;

  @ApiProperty({ example: false, description: 'Receber notificações push.', required: false })
  @IsBoolean()
  @IsOptional()
  pushNotifications?: boolean;

  @ApiProperty({ example: false, description: 'Permitir recebimento de campanhas e marketing.', required: false })
  @IsBoolean()
  @IsOptional()
  marketingConsent?: boolean;

  @ApiProperty({ example: true, description: 'Exibir telefone no perfil público.', required: false })
  @IsBoolean()
  @IsOptional()
  showPhone?: boolean;

  @ApiProperty({ example: false, description: 'Ocultar a conta do feed público.', required: false })
  @IsBoolean()
  @IsOptional()
  hideFromFeed?: boolean;
}
