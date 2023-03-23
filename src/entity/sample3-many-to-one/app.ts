import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { Post } from "./entity/Post";
import { PostDetails } from "./entity/PostDetails";
import { PostCategory } from "./entity/PostCategory";
import { PostMetadata } from "./entity/PostMetadata";
import { PostImage } from "./entity/PostImage";
import { PostInformation } from "./entity/PostInformation";
import { PostAuthor } from "./entity/PostAuthor";

const options: DataSourceOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "admin123456",
  database: "typeormtest",
  synchronize: true,
  logging: ["query", "error"],
  entities: [
    Post,
    PostDetails,
    PostCategory,
    PostMetadata,
    PostImage,
    PostInformation,
    PostAuthor,
  ],
};

const dataSource = new DataSource(options);
dataSource
  .initialize()
  .then((dataSource) => {
    let details = new PostDetails();
    details.authorName = "Umed";
    details.comment = "about post";
    details.metadata = "post,details,one-to-one";

    let post = new Post();
    post.text = "Hello how are you?";
    post.title = "hello";
    post.details = details;

    let postRepository = dataSource.getRepository(Post);

    postRepository
      .save(post)
      .then((post) => console.log("Post has been saved"))
      .catch((error) => console.log("Cannot save. Error: ", error));
  })
  .catch((error) => console.log("Error: ", error));
