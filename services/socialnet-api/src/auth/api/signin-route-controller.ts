import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { SignInService } from '@app/auth/usecases';

import verifyErrorMiddleware from '@app/common/middlewares/verify-error-middleware';
import { UserDto } from '@app/auth/domain/models/user.dto';
import CreateJwt from '@app/common/jwt/create-jwt';
import RouteControllerBase from '@app/common/abstracts/route-controller-base';

export default class SignInRouteController extends RouteControllerBase {
  constructor(app: express.Application) {
    super(app, 'SignInRoute', '/api/users/signin');
  }

  configureRoutes(): express.Application {
    this.app.post(
      this.path,
      [
        body('email')
          .isEmail()
          .withMessage('Email must be valid')
          .notEmpty()
          .withMessage('You must supply a email'),
        body('password').trim().notEmpty().withMessage('You must supply a password'),
      ],
      verifyErrorMiddleware.verify,
      async (req: Request, res: Response) => {
        const existingUser: UserDto = await SignInService.signin(req.body);

        // create jwt
        const userJwt: string = CreateJwt.create(existingUser);

        // guardar el jwt en las cookies
        req.session = {
          jwt: userJwt,
        };

        res.status(200).send({ user: existingUser });
      },
    );
    return this.app;
  }
}
