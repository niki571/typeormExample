/*
 * @Author: wuqianying
 * @Date: 2023-03-23 14:57:48
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-23 15:00:19
 */
import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
} from "typeorm";
import { PostCategory } from "./PostCategory";
import { PostAuthor } from "./PostAuthor";

@Entity("sample7_post")
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @ManyToOne((type) => PostAuthor, (post) => post.posts, {
    cascade: true,
  })
  author: PostAuthor;

  @ManyToMany((type) => PostCategory, (category) => category.posts, {
    cascade: true,
  })
  @JoinTable()
  categories: PostCategory[];
}
