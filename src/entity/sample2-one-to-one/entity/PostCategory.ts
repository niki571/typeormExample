/*
 * @Author: wuqianying
 * @Date: 2023-03-22 23:59:11
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-23 00:00:09
 */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("sample2_post_category")
export class PostCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
