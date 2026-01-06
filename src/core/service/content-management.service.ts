import { Injectable } from '@nestjs/common';
import { PrismaService } from '@src/persistence/prisma.service';
import { randomUUID } from 'crypto';

export type CreateContentData = {
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  sizeInKb: number;
};

@Injectable()
export class ContentManagementService {
  constructor(private readonly prismaService: PrismaService) {}

  async createContent(createContentDate: CreateContentData) {
    const { title, description, url, thumbnailUrl, sizeInKb } =
      createContentDate;

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
