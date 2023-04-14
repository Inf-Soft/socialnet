import RouteControllerBase from '@app/common/abstracts/route-controller-base';
import { app, routes } from './app';

const start = async () => {
  if (!process.env.JWT_KEY) throw new Error('JWT_KEY undefined!!!');
  if (!process.env.MONGO_URI) throw new Error('MONGO_URI must be defined');
  routes.forEach((route: RouteControllerBase) => {
    console.log(`Routes configured for ${route.name}, with path: ${route.path}`);
  });
  app.listen(4000, () => {
    console.log('The Server is running!!!');
  });
};

start();
