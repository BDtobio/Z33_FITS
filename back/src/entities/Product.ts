import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Category } from "../entities/Category"; // ejemplo
import {  Gender } from "../entities/Gender";
@Entity()
export class Product {

  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column("decimal")
  price!: number;

  @Column()
  stock!: number;

  @Column()
  image_url!: string;

  @Column({ type: "enum", enum: Category })
  category!: Category;

  @Column({ type: "enum", enum: Gender })
  gender!: Gender;

  @Column({ default: true })
  active!: boolean;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at!: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updated_at!: Date;
}
