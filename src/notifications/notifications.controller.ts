import { Controller, Get, Post, Patch, Param, Body, UseGuards, Query, Req } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import type { Request } from 'express';
import { NotificationsService } from './notifications.service';
import { PushService } from './push.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { SubscribePushDto, UnsubscribePushDto } from './dto/push-subscription.dto';

@ApiTags('Notifications')
@UseGuards(JwtAuthGuard)
@Controller('notifications')
export class NotificationsController {
  constructor(
    private readonly notificationsService: NotificationsService,
    private readonly pushService: PushService,
  ) {}

  @ApiOperation({ summary: 'Lista as notificações do usuário autenticado' })
  @ApiResponse({ status: 200, description: 'Lista de notificações retornada com sucesso.' })
  @Get()
  async findAll(
    @CurrentUser('id') userId: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
  ) {
    return this.notificationsService.findAll(
      userId,
      limit ? parseInt(limit, 10) : 50,
      offset ? parseInt(offset, 10) : 0,
    );
  }

  @ApiOperation({ summary: 'Marca todas as notificações como lidas' })
  @Patch('read-all')
  async markAllAsRead(@CurrentUser('id') userId: string) {
    await this.notificationsService.markAllAsRead(userId);
    return { success: true };
  }

  @ApiOperation({ summary: 'Marca uma notificação específica como lida' })
  @Patch(':id/read')
  async markAsRead(
    @CurrentUser('id') userId: string,
    @Param('id') notificationId: string,
  ) {
    await this.notificationsService.markAsRead(userId, notificationId);
    return { success: true };
  }

  @ApiOperation({ summary: 'Retorna a chave pública VAPID para Web Push' })
  @Get('push/public-key')
  getPublicKey() {
    return this.pushService.getPublicKey();
  }

  @ApiOperation({ summary: 'Lista as assinaturas push do usuário atual' })
  @Get('push/subscriptions')
  async getSubscriptions(@CurrentUser('id') userId: string) {
    return this.pushService.getSubscriptions(userId);
  }

  @ApiOperation({ summary: 'Inscreve o navegador para receber notificações push' })
  @ApiBody({ type: SubscribePushDto })
  @Post('push/subscribe')
  async subscribe(
    @CurrentUser('id') userId: string,
    @Body() dto: SubscribePushDto,
    @Req() req: Request,
  ) {
    const userAgent = req.headers['user-agent'] as string;
    return this.pushService.subscribe(userId, dto, userAgent);
  }

  @ApiOperation({ summary: 'Remove a assinatura push do navegador' })
  @ApiBody({ type: UnsubscribePushDto })
  @Post('push/unsubscribe')
  async unsubscribe(
    @CurrentUser('id') userId: string,
    @Body() dto: UnsubscribePushDto,
  ) {
    return this.pushService.unsubscribe(userId, dto.endpoint);
  }

  @ApiOperation({ summary: 'Envia uma notificação de teste para o usuário' })
  @Post('push/test')
  async sendTestPush(@CurrentUser('id') userId: string) {
    return this.pushService.sendTestPush(userId);
  }
}
