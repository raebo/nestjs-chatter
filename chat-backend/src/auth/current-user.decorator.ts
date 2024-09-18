import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "../users/entities/user.entity";

const getCurrrentUserByContext = (context: ExecutionContext): User => {
  return context.switchToHttp().getRequest().user;
}

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrrentUserByContext(context),
)