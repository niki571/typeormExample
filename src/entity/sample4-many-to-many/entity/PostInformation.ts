/*
 * @Author: wuqianying
 * @Date: 2023-03-23 00:38:57
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-23 00:39:44
 */
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";

@Entity("sample4_post_information")
export class PostInformation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToMany((type) => Post, (post) => post.informations, {
    cascade: ["update"],
  })
  posts: Post[];
}
