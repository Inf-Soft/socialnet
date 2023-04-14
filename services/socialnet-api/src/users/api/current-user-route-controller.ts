import RouteControllerBase from '@app/common/abstracts/route-controller-base';
import verifyCurrentUser from '@app/common/middlewares/verify-current-user';
import express, { Request, Response } from 'express';

export default class CurrentUserRouteController extends RouteControllerBase {
  constructor(app: express.Application) {
    super(app, 'CurrentUserRoute', '/api/users/currentuser');
  }

  configureRoutes(): express.Application {
    this.app.get(this.path, [verifyCurrentUser.verify], async (req: Request, res: Response) => {
      return res.status(200).send({ user: req?.currentUser || null });
    });

    return this.app;
  }
}
