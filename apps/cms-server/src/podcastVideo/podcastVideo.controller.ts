import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PodcastVideoService } from "./podcastVideo.service";
import { PodcastVideoControllerBase } from "./base/podcastVideo.controller.base";

@swagger.ApiTags("podcastVideos")
@common.Controller("podcastVideos")
export class PodcastVideoController extends PodcastVideoControllerBase {
  constructor(
    protected readonly service: PodcastVideoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
