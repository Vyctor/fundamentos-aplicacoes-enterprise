import { Module } from '@nestjs/common';
import { PrismaService } from '@src/persistence/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { ContentController } from './http/rest/controller/content.controller';
import { ContentManagementService } from './core/content-management.service';
import { MediaPlayerService } from './core/media-player.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ContentController],
  providers: [PrismaService, ContentManagementService, MediaPlayerService],
})
export class AppModule {}
