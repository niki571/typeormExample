/*
 * @Author: wuqianying
 * @Date: 2023-03-23 00:38:57
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-23 00:39:16
 */
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";

@Entity("sample4_post_author")
export class PostAuthor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany((type) => Post, (post) => post.authors)
  posts: Post[];
}
