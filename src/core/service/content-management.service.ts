import { Inject, Injectable } from '@nestjs/common';
import { VideoDAO } from '@src/persistence/dao/video.dao';

export type CreateContentData = {
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  sizeInKb: number;
};

@Injectable()
export class ContentManagementService {
  constructor(@Inject(VideoDAO) private readonly videoDAO: VideoDAO) {}

  async createContent(createContentData: CreateContentData) {
    return await this.videoDAO.create(createContentData);
  }
}
