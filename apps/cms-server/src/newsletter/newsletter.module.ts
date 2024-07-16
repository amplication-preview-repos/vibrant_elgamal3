import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NewsletterModuleBase } from "./base/newsletter.module.base";
import { NewsletterService } from "./newsletter.service";
import { NewsletterController } from "./newsletter.controller";
import { NewsletterResolver } from "./newsletter.resolver";

@Module({
  imports: [NewsletterModuleBase, forwardRef(() => AuthModule)],
  controllers: [NewsletterController],
  providers: [NewsletterService, NewsletterResolver],
  exports: [NewsletterService],
})
export class NewsletterModule {}
