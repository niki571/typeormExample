/*
 * @Author: wuqianying
 * @Date: 2023-03-23 14:44:24
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-23 14:46:36
 */
import { Column, Entity, ManyToMany, ManyToOne, JoinTable } from "typeorm";
import { BasePost } from "./BasePost";
import { PostCategory } from "./PostCategory";
import { PostAuthor } from "./PostAuthor";

@Entity("sample6_post")
export class Post extends BasePost {
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
