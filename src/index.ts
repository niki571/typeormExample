/*
 * @Author: wuqianying
 * @Date: 2023-03-22 16:14:48
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-23 00:21:36
 */
/*
 * @Author: wuqianying
 * @Date: 2023-03-22 16:14:48
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-22 23:54:32
 */
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "admin123456",
  database: "typeormtest",
  synchronize: true,
  logging: false,
  entities: ["src/**/entity/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
