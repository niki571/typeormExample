/*
 * @Author: wuqianying
 * @Date: 2023-03-23 13:42:33
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-23 13:51:00
 */
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { Post } from "./Post";

@Entity("sample5_post_category")
export class PostCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany((type) => Post, (post) => post.categories)
  posts: Post[];
}
