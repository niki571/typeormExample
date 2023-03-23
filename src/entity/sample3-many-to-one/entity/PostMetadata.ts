/*
 * @Author: wuqianying
 * @Date: 2023-03-23 00:20:22
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-23 00:21:20
 */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";

@Entity("sample3_post_metadata")
export class PostMetadata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @OneToMany((type) => Post, (post) => post.metadata)
  posts: Post[];
}
