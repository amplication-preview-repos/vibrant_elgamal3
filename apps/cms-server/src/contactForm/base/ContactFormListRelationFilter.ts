/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContactFormWhereInput } from "./ContactFormWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ContactFormListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ContactFormWhereInput,
  })
  @ValidateNested()
  @Type(() => ContactFormWhereInput)
  @IsOptional()
  @Field(() => ContactFormWhereInput, {
    nullable: true,
  })
  every?: ContactFormWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContactFormWhereInput,
  })
  @ValidateNested()
  @Type(() => ContactFormWhereInput)
  @IsOptional()
  @Field(() => ContactFormWhereInput, {
    nullable: true,
  })
  some?: ContactFormWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContactFormWhereInput,
  })
  @ValidateNested()
  @Type(() => ContactFormWhereInput)
  @IsOptional()
  @Field(() => ContactFormWhereInput, {
    nullable: true,
  })
  none?: ContactFormWhereInput;
}
export { ContactFormListRelationFilter as ContactFormListRelationFilter };