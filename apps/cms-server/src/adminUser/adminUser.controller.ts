import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AdminUserService } from "./adminUser.service";
import { AdminUserControllerBase } from "./base/adminUser.controller.base";

@swagger.ApiTags("adminUsers")
@common.Controller("adminUsers")
export class AdminUserController extends AdminUserControllerBase {
  constructor(
    protected readonly service: AdminUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
