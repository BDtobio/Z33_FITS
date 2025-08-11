import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from './Product';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  // Una categoría puede tener muchos productos
  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
