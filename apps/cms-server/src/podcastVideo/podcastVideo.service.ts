import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PodcastVideoServiceBase } from "./base/podcastVideo.service.base";

@Injectable()
export class PodcastVideoService extends PodcastVideoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
