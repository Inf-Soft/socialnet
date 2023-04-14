import { UserRepository } from '@app/auth/domain';
import { UserAuthenticationRequestDto } from '@app/auth/api/models';
import BadRequestError from '@app/common/errors/bad-request-error';
import { HashPasswordService } from '.';
import { UserDto } from '../domain/models/user.dto';

class SignInService {
  async signin(user: UserAuthenticationRequestDto): Promise<UserDto> {
    const { email, password }: UserAuthenticationRequestDto = user;

    const existingUser: UserDto | null = await UserRepository.getUserByEmail(email);

    if (!existingUser) {
      throw new BadRequestError('Invalid credentials!');
    }

    const isPasswordMatch = await HashPasswordService.compare(existingUser.password, password);

    if (!isPasswordMatch) {
      throw new BadRequestError('Invalid credentials!');
    }

    return existingUser;
  }
}

export default new SignInService();
