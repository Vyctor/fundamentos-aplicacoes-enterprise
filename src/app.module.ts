import { Module } from '@nestjs/common';
import { PrismaService } from '@src/persistence/prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { ContentController } from './http/rest/controller/content.controller';
import { ContentManagementService } from './core/service/content-management.service';
import { MediaPlayerService } from './core/service/media-player.service';
import { VideoDAO } from './core/dao/video.dao.interface';
import { VideoDAO as VideoDAOImpl } from './persistence/dao/video.dao';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ContentController],
  providers: [
    PrismaService,
    ContentManagementService,
    MediaPlayerService,
    {
      provide: VideoDAO,
      useClass: VideoDAOImpl,
    },
  ],
})
export class AppModule {}
