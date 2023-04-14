/* eslint-disable no-undef */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
import request from 'supertest';
import { app } from '../../app';
import TestHelper from './testDbHelper';

declare global {
  var signupAndGetCookie: () => Promise<string[]>;
}

beforeAll(async () => {
  // Envs in tests
  process.env.JWT_KEY = 'test';
});

beforeAll(async () => await TestHelper.setupTestDB());
// beforeEach(() => TestHelper.instance.());
afterAll(() => TestHelper.teardownTestDB());

// esto es para evitar tener que hacer registro de users cada ves que
// se requiera pudiera estar en una funcion aparte pero esta es una manera
// elegante de resolver sin tener importanciones luego en todos los archivos de prueba
global.signupAndGetCookie = async () => {
  const email: string = 'test@gmail.com';
  const password: string = 'test';

  const res = await request(app)
    .post('/api/users/signup')
    .send({
      email,
      password,
    })
    .expect(201);

  const cookie = res.get('Set-Cookie');

  return cookie;
};

// cambiamos el tiempo de espera para teminar los test cuando son muy pesados los test
jest.setTimeout(300000);
