/*
 * @Author: wuqianying
 * @Date: 2023-03-23 00:38:57
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-23 00:39:30
 */
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";

@Entity("sample4_post_details")
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

  @ManyToMany((type) => Post, (post) => post.details, {
    cascade: true,
  })
  posts: Post[];
}
