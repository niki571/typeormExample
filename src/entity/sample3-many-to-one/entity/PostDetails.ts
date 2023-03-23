/*
 * @Author: wuqianying
 * @Date: 2023-03-23 00:20:22
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-23 00:20:52
 */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";

@Entity("sample3_post_details")
export class PostDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: String,
    nullable: true,
  })
  authorName: string | null;

  @Column({
    type: String,
    nullable: true,
  })
  comment: string | null;

  @Column({
    type: String,
    nullable: true,
  })
  metadata: string | null;

  @OneToMany((type) => Post, (post) => post.details, {
    cascade: true,
  })
  posts: Post[];
}
