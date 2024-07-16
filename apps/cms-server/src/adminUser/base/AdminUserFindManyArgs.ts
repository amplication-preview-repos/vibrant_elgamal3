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
import { AdminUserWhereInput } from "./AdminUserWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AdminUserOrderByInput } from "./AdminUserOrderByInput";

@ArgsType()
class AdminUserFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AdminUserWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AdminUserWhereInput, { nullable: true })
  @Type(() => AdminUserWhereInput)
  where?: AdminUserWhereInput;

  @ApiProperty({
    required: false,
    type: [AdminUserOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AdminUserOrderByInput], { nullable: true })
  @Type(() => AdminUserOrderByInput)
  orderBy?: Array<AdminUserOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AdminUserFindManyArgs as AdminUserFindManyArgs };