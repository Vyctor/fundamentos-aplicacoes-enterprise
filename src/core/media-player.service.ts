import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@src/persistence/prisma.service';

@Injectable()
export class MediaPlayerService {
  constructor(private readonly prismaService: PrismaService) {}

  async prepareStreaming(videoId: string): Promise<string | undefined> {
    const video = await this.prismaService.video.findUnique({
      where: {
        id: videoId,
      },
    });

    return video?.url;
  }
}
