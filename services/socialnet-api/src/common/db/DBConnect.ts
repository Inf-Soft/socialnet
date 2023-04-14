import { DataSource } from 'typeorm';

class DBConnect {
  connect() {
    const MysqlDataSource = new DataSource({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'admin123456',
      database: 'socialnet',
      entities: [`${__dirname}/**/*.dao.ts`],
      synchronize: true,
      logging: false,
    });

    return MysqlDataSource;
  }
}

export default new DBConnect();
