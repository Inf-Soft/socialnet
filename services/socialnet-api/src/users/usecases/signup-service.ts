import { UserAuthenticationRequestDto } from '@app/users/api/models';
import { UserCrudRepository } from '@app/users/domain';
import { UserDto } from '../domain/models/user.dto';

class SignupService {
  async signup(user: UserAuthenticationRequestDto): Promise<UserDto> {
    const userCreated = await UserCrudRepository.create(user);
    return userCreated;
  }
}

export default new SignupService();
