/*
 * @Author: wuqianying
 * @Date: 2023-03-23 00:20:22
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-23 00:21:08
 */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";

@Entity("sample3_post_information")
export class PostInformation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @OneToMany((type) => Post, (post) => post.information, {
    cascade: ["update"],
  })
  posts: Post[];
}
