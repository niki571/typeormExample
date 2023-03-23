/*
 * @Author: wuqianying
 * @Date: 2023-03-23 14:44:24
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-23 14:47:09
 */
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { Post } from "./Post";

@Entity("sample6_post_category")
export class PostCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany((type) => Post, (post) => post.categories)
  posts: Post[];
}
