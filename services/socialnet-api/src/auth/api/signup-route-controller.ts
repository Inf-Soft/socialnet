import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { SignUpService } from '@app/auth/usecases';

import RouteControllerBase from '@app/common/abstracts/route-controller-base';
import verifyErrorMiddleware from '@app/common/middlewares/verify-error-middleware';
import createJwt from '@app/common/jwt/create-jwt';
import VerifyIfExistEmail from './validators/verify-if-exist-email';
import { UserAuthenticationRequestDto } from './models';

export default class SignUpRouteController extends RouteControllerBase {
  constructor(app: express.Application) {
    super(app, 'SignupRoute', '/api/users/signup');
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
        body('password')
          .isString()
          .trim()
          .isLength({ min: 4, max: 20 })
          .withMessage('Password must be between 4 and 20 character')
          .notEmpty()
          .withMessage('You must supply a password'),
        VerifyIfExistEmail.verifyEmail,
      ],
      verifyErrorMiddleware.verify,
      async (req: Request, res: Response) => {
        const { email, password }: UserAuthenticationRequestDto = req.body;

        const userCreated = await SignUpService.signup({
          email,
          password,
        });

        // create jwt
        const userJwt = createJwt.create(userCreated);

        // guardar el jwt en las cookies
        req.session = {
          jwt: userJwt,
        };

        res.status(201).send({ user: userCreated });
      },
    );
    return this.app;
  }
}
