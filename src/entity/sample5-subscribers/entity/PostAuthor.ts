/*
 * @Author: wuqianying
 * @Date: 2023-03-23 13:42:33
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-23 13:43:05
 */
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Post } from "./Post";

@Entity("sample5_post_author")
export class PostAuthor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((type) => Post, (post) => post.author)
  posts: Post[];
}
