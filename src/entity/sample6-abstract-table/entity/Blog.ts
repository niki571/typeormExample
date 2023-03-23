/*
 * @Author: wuqianying
 * @Date: 2023-03-23 14:44:24
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-23 14:46:24
 */
import { Column, Entity, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { BasePost } from "./BasePost";
import { PostAuthor } from "./PostAuthor";
import { PostCategory } from "./PostCategory";

@Entity("sample6_blog")
export class Blog extends BasePost {
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
