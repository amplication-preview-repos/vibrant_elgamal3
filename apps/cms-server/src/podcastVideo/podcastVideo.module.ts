import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PodcastVideoModuleBase } from "./base/podcastVideo.module.base";
import { PodcastVideoService } from "./podcastVideo.service";
import { PodcastVideoController } from "./podcastVideo.controller";
import { PodcastVideoResolver } from "./podcastVideo.resolver";

@Module({
  imports: [PodcastVideoModuleBase, forwardRef(() => AuthModule)],
  controllers: [PodcastVideoController],
  providers: [PodcastVideoService, PodcastVideoResolver],
  exports: [PodcastVideoService],
})
export class PodcastVideoModule {}
