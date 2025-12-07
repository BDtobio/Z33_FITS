import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Gender } from "./Gender";
import { Category } from "./Category";

@Entity("product")
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

  @ManyToOne(() => Category, (category) => category.products)
  category!: Category;

  @ManyToOne(() => Gender, (gender) => gender.products)
  gender!: Gender;

  @Column({ default: true })
  active!: boolean;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at!: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updated_at!: Date;
}
