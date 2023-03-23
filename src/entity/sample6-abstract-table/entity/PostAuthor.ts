/*
 * @Author: wuqianying
 * @Date: 2023-03-23 14:44:24
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-23 14:45:35
 */
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Post } from "./Post";

@Entity("sample6_post_author")
export class PostAuthor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((type) => Post, (post) => post.author)
  posts: Post[];
}
