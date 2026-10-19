import { IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum BookingStatusEnum {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export enum ApprovalStatusEnum {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export class UpdateBookingStatusDto {
  @ApiProperty({ example: 'CONFIRMED', description: 'Novo status da reserva.', required: false, enum: BookingStatusEnum })
  @IsOptional()
  @IsEnum(BookingStatusEnum, { message: 'Status de reserva inválido' })
  status?: BookingStatusEnum;

  @ApiProperty({ example: 'APPROVED', description: 'Novo status de aprovação da reserva.', required: false, enum: ApprovalStatusEnum })
  @IsOptional()
  @IsEnum(ApprovalStatusEnum, { message: 'Status de aprovação inválido' })
  approvalStatus?: ApprovalStatusEnum;
}
