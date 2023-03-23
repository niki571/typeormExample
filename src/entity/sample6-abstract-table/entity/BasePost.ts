/*
 * @Author: wuqianying
 * @Date: 2023-03-23 14:44:24
 * @LastEditors: wuqianying
 * @LastEditTime: 2023-03-23 14:44:36
 */
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class BasePost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
