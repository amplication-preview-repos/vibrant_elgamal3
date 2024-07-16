import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PodcastVideoResolverBase } from "./base/podcastVideo.resolver.base";
import { PodcastVideo } from "./base/PodcastVideo";
import { PodcastVideoService } from "./podcastVideo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PodcastVideo)
export class PodcastVideoResolver extends PodcastVideoResolverBase {
  constructor(
    protected readonly service: PodcastVideoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
