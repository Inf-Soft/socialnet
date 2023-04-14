/* eslint-disable no-undef */
const typeorm = jest.mock('typeorm', () => ({
  __esModule: true,
  getCustomRepository: jest.fn(),
  getRepository: jest.fn(),
  PrimaryGeneratedColumn: jest.fn(),
  Column: jest.fn(),
  CreateDateColumn: jest.fn(),
  UpdateDateColumn: jest.fn(),
  Entity: jest.fn(),
  EntityRepository: jest.fn(),
  Repository: jest.fn(),
}));

export { typeorm };
