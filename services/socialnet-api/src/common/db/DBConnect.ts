import { DataSource } from 'typeorm';

class DBConnect {
  connect() {
    const MysqlDataSource = new DataSource({
      type: 'mysql',
      host: process.env.DB_URI_SERVER,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [`${__dirname}/**/*.dao.ts`],
      synchronize: true,
      logging: false,
    });

    return MysqlDataSource;
  }
}

export default new DBConnect();
