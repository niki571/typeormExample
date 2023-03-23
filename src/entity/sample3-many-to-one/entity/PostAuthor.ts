/*
 * @Author: wuqianying
 * @Date: 2023-03-23 00:20:22
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-23 00:20:37
 */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";

@Entity("sample3_post_author")
export class PostAuthor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((type) => Post, (post) => post.author)
  posts: Post[];
}
