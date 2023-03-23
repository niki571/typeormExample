/*
 * @Author: wuqianying
 * @Date: 2023-03-23 00:38:57
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-23 00:39:56
 */
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";

@Entity("sample4_post_metadata")
export class PostMetadata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToMany((type) => Post, (post) => post.metadatas)
  posts: Post[];
}
