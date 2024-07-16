import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdminUserServiceBase } from "./base/adminUser.service.base";

@Injectable()
export class AdminUserService extends AdminUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
