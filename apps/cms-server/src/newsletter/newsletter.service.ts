import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NewsletterServiceBase } from "./base/newsletter.service.base";

@Injectable()
export class NewsletterService extends NewsletterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
