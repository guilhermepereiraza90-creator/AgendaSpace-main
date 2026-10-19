import {
  IsUUID,
  IsISO8601,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookingDto {
  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-1234567890ef', description: 'Identificador do espaço a ser reservado.' })
  @IsUUID('all', { message: 'O ID do espaço deve ser um UUID válido' })
  @IsNotEmpty({ message: 'O ID do espaço é obrigatório' })
  spaceId: string;

  @ApiProperty({ example: '2026-11-10T09:00:00.000Z', description: 'Data e hora de início da reserva em formato ISO 8601.' })
  @IsISO8601({}, { message: 'A data/hora de início deve estar no formato ISO 8601 válido' })
  @IsNotEmpty({ message: 'A data/hora de início é obrigatória' })
  startDatetime: string;

  @ApiProperty({ example: '2026-11-10T12:00:00.000Z', description: 'Data e hora de término da reserva em formato ISO 8601.' })
  @IsISO8601({}, { message: 'A data/hora de término deve estar no formato ISO 8601 válido' })
  @IsNotEmpty({ message: 'A data/hora de término é obrigatória' })
  endDatetime: string;

  @ApiProperty({ example: 'Preciso da sala para reunião com cliente.', description: 'Observações adicionais da reserva.', required: false })
  @IsString()
  @IsOptional()
  notes?: string;
}
