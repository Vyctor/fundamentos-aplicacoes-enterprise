import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContentData } from '@src/core/service/content-management.service';
import { randomUUID } from 'crypto';

@Injectable()
export class VideoDAO {
  constructor(private readonly prismaService: PrismaService) {}

  async create(videoData: CreateContentData) {
    const { title, description, url, thumbnailUrl, sizeInKb } = videoData;

    return await this.prismaService.video.create({
      data: {
        id: randomUUID(),
        title,
        description,
        url,
        sizeInKb,
        thumbnailUrl,
        duration: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }
}
