import 'reflect-metadata';
import express from 'express';
import 'express-async-errors'; // esto resuelve el problea de lanzar errores en funciones con async
import cookieSession from 'cookie-session';
import cors from 'cors';
import { json } from 'body-parser';
import helmet from 'helmet';
import {
  CurrentUserRouteController,
  SignInRouteController,
  SignOutRouteController,
  SignUpRouteController,
} from '@app/users/api';
import EnvironmentsVerification from './src/common/utils/environments-verification';
import RouteControllerBase from './src/common/abstracts/route-controller-base';
import NotFoundError from './src/common/errors/not-found-error';
import ErrorHandlerMiddleware from './src/common/middlewares/error-handler-middleware';

const whitelist = ['*']; // arreglo con todos los fronts que va aceptar
const corsOptions = {
  origin: (origin: any, callback: any) => {
    if (whitelist.includes(origin) || whitelist.includes('*')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

const app = express();
app.set('trust proxy', true); // esto es para que podamos ingresar y confiar en el proxy

// Middlewares
app.use(json());
app.use(cors(corsOptions));
app.use(helmet());
app.use(
  cookieSession({
    signed: false, // esto es para desactivar el encriptado de las cookies
    // seguridad - solo se puede ingresar por https, en local lo ponemos en false de momento
    secure: !EnvironmentsVerification.isTest && !EnvironmentsVerification.isDevelopment,
  }),
);

const routes: Array<RouteControllerBase> = [];

// Routes
routes.push(new SignUpRouteController(app));
routes.push(new SignInRouteController(app));
routes.push(new CurrentUserRouteController(app));
routes.push(new SignOutRouteController(app));
app.all('*', async () => {
  throw new NotFoundError();
});
app.use(ErrorHandlerMiddleware.handler);

export { app, routes };
