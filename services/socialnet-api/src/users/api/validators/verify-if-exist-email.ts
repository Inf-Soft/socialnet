import { NextFunction, Request, Response } from 'express';
import { GetUserByEmailService } from '@app/users/usecases';
import { UserDto } from '@app/users/domain/models/user.dto';
import BadRequestError from '@app/common/errors/bad-request-error';

class VerifyIfExistEmail {
  verifyEmail = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;
    const user: UserDto | null = await GetUserByEmailService.getByEmail(email);

    if (user) {
      throw new BadRequestError('The email is in use!');
    }
    next();
  };
}

export default new VerifyIfExistEmail();
