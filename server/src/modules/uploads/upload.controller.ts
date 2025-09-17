import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { randomUUID } from 'crypto';

@Controller('uploads')
export class UploadsController {
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads', // pasta onde salva
        filename: (req, file, callback) => {
          console.log('Processando arquivo:', file.originalname);
          const uniqueName = randomUUID();
          const ext = extname(file.originalname);
          callback(null, `${uniqueName}${ext}`);
        },
      }),
      fileFilter: (req, file, callback) => {
        // Aceita apenas imagens
        if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
          callback(null, true);
        } else {
          callback(
            new Error('Apenas arquivos de imagem são permitidos!'),
            false,
          );
        }
      },
      limits: {
        fileSize: 20 * 1024 * 1024, // 20MB
      },
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log('Arquivo recebido:', file);
    console.log('Tipo do arquivo:', typeof file);

    if (!file) {
      console.log('Nenhum arquivo foi recebido');
      return {
        error: 'Nenhum arquivo foi enviado',
        message: 'Certifique-se de enviar um arquivo com o campo "file"',
      };
    }

    return {
      filename: file.filename,
      path: `/uploads/${file.filename}`,
      originalName: file.originalname,
      size: file.size,
      mimetype: file.mimetype,
    };
  }
}
