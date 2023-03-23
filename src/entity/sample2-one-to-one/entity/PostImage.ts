/*
 * @Author: wuqianying
 * @Date: 2023-03-22 23:59:11
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-23 00:00:24
 */
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";

@Entity("sample2_post_image")
export class PostImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @OneToOne((type) => Post, (post) => post.image)
  post: Post;
}
