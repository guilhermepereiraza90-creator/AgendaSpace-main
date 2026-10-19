import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ example: 'd0bd4e7b-12da-4a9c-bf75-a9fa1f8e4f66', description: 'Identificador do espaço ao qual o post pertence.' })
  @IsUUID('all', { message: 'O ID do espaço deve ser um UUID válido' })
  @IsNotEmpty({ message: 'O ID do espaço é obrigatório' })
  spaceId: string;

  @ApiProperty({ example: 'https://cdn.example.com/post.jpg', description: 'URL da imagem do post.', minLength: 1 })
  @IsString({ message: 'A URL da imagem é obrigatória' })
  @IsNotEmpty({ message: 'A imagem é obrigatória' })
  imageUrl: string;

  @ApiProperty({ example: 'Confira este espaço incrível para reuniões!', description: 'Texto do post publicado.' })
  @IsString({ message: 'O conteúdo deve ser um texto' })
  @IsNotEmpty({ message: 'O conteúdo do post é obrigatório' })
  content: string;
}
