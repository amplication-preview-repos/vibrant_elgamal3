import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdminUserModuleBase } from "./base/adminUser.module.base";
import { AdminUserService } from "./adminUser.service";
import { AdminUserController } from "./adminUser.controller";
import { AdminUserResolver } from "./adminUser.resolver";

@Module({
  imports: [AdminUserModuleBase, forwardRef(() => AuthModule)],
  controllers: [AdminUserController],
  providers: [AdminUserService, AdminUserResolver],
  exports: [AdminUserService],
})
export class AdminUserModule {}
