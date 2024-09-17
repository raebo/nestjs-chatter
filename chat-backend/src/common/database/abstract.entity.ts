import { SchemaTypes, Types } from 'mongoose';
import { Prop, Schema } from '@nestjs/mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Schema()
@ObjectType({ isAbstract: true })
export class AbstractEntity {
  @Prop({ type: SchemaTypes.ObjectId })
  @Field(() => ID) // GraphQL type scalar type automatic for all entities
  _id: Types.ObjectId;
}
