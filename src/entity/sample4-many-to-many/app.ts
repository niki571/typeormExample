/*
 * @Author: wuqianying
 * @Date: 2023-03-23 00:38:57
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-23 00:40:03
 */
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { Post } from "./entity/Post";
import { PostDetails } from "./entity/PostDetails";

const options: DataSourceOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "admin123456",
  database: "typeormtest",
  synchronize: true,
  logging: false,
  entities: [__dirname + "/entity/*"],
};

const dataSource = new DataSource(options);
dataSource.initialize().then(
  (dataSource) => {
    let details1 = new PostDetails();
    details1.comment = "People";

    let details2 = new PostDetails();
    details2.comment = "Human";

    let post = new Post();
    post.text = "Hello how are you?";
    post.title = "hello";
    post.details = [details1, details2];

    let postRepository = dataSource.getRepository(Post);

    postRepository
      .save(post)
      .then((post) => console.log("Post has been saved"))
      .catch((error) => console.log("Cannot save. Error: ", error));
  },
  (error) => console.log("Cannot connect: ", error)
);
