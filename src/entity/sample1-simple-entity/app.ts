/*
 * @Author: wuqianying
 * @Date: 2023-03-22 23:55:35
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-23 15:43:51
 */
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { Post } from "./entity/Post";

const options: DataSourceOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "admin123456",
  database: "typeormtest",
  synchronize: true,
  logging: false,
  entities: [Post],
};

const dataSource = new DataSource(options);
dataSource.initialize().then(
  async (dataSource) => {
    let post = new Post();
    post.text = "Hello how are you?";
    post.title = "hello";
    post.likesCount = 100;

    let postRepository = dataSource.getRepository(Post);

    postRepository
      .save(post)
      .then((post) => console.log("Post has been saved: ", post))
      .catch((error) => console.log("Cannot save. Error: ", error));
  },
  (error) => console.log("Cannot connect: ", error)
);
