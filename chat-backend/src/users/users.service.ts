import {
  ConflictException,
  Injectable,
  UnauthorizedException, UnprocessableEntityException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserInput: CreateUserInput) {
    const existingUser = await this.usersRepository.findOne({
      email: createUserInput.email,
    });

    if (existingUser) {
      throw new UnprocessableEntityException(
        `User with E-Mail '${createUserInput.email}' already exists`,
      );
    }

    try {
      await this.usersRepository.create({
        ...createUserInput,
        password: await this.hashPassword(createUserInput.password),
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    return this.usersRepository.find({});
  }

  async findOne(_id: string) {
    return this.usersRepository.findOne({ _id });
  }

  async update(_id: string, updateUserInput: UpdateUserInput) {
    return this.usersRepository.findOneAndUpdate(
      { _id },
      {
        $set: {
          ...updateUserInput,
          password: await this.hashPassword(updateUserInput.password),
        },
      },
    );
  }

  async remove(_id: string) {
    return this.usersRepository.findOneAndDelete({ _id });
  }

  async verifyUser(email: string, password: string) {
    const user = await this.usersRepository.findOne({ email });
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credentials or Invalid password');
    }
    return user;
  }

  private async hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }
}
