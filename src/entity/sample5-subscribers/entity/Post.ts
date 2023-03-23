/*
 * @Author: wuqianying
 * @Date: 2023-03-23 13:42:33
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-23 14:34:08
 */
import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
  BeforeInsert,
} from "typeorm";
import { PostCategory } from "./PostCategory";
import { PostAuthor } from "./PostAuthor";

@Entity("sample5_post")
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @ManyToOne((type) => PostAuthor, (author) => author.posts, {
    cascade: true,
  })
  author: PostAuthor;

  @ManyToMany((type) => PostCategory, (category) => category.posts, {
    cascade: true,
  })
  @JoinTable()
  categories: PostCategory[];
}
