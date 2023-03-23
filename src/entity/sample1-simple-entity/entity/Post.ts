/*
 * @Author: wuqianying
 * @Date: 2023-03-22 23:55:35
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-22 23:57:10
 */
import { Column, Entity, PrimaryColumn, Generated } from "typeorm";

@Entity("sample01_post")
export class Post {
  @PrimaryColumn()
  @Generated()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column({ nullable: false })
  likesCount: number;
}
