/*
 * @Author: wuqianying
 * @Date: 2023-03-22 23:59:11
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-23 00:00:41
 */
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";

@Entity("sample2_post_metadata")
export class PostMetadata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @OneToOne((type) => Post, (post) => post.metadata)
  post: Post;
}
