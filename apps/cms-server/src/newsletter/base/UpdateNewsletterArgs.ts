/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NewsletterWhereUniqueInput } from "./NewsletterWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { NewsletterUpdateInput } from "./NewsletterUpdateInput";

@ArgsType()
class UpdateNewsletterArgs {
  @ApiProperty({
    required: true,
    type: () => NewsletterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NewsletterWhereUniqueInput)
  @Field(() => NewsletterWhereUniqueInput, { nullable: false })
  where!: NewsletterWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => NewsletterUpdateInput,
  })
  @ValidateNested()
  @Type(() => NewsletterUpdateInput)
  @Field(() => NewsletterUpdateInput, { nullable: false })
  data!: NewsletterUpdateInput;
}

export { UpdateNewsletterArgs as UpdateNewsletterArgs };
