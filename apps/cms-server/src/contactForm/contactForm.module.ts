import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ContactFormModuleBase } from "./base/contactForm.module.base";
import { ContactFormService } from "./contactForm.service";
import { ContactFormController } from "./contactForm.controller";
import { ContactFormResolver } from "./contactForm.resolver";

@Module({
  imports: [ContactFormModuleBase, forwardRef(() => AuthModule)],
  controllers: [ContactFormController],
  providers: [ContactFormService, ContactFormResolver],
  exports: [ContactFormService],
})
export class ContactFormModule {}
