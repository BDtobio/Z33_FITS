import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from './Product';

@Entity('genders')
export class Gender {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  // Un género puede tener muchos productos
  @OneToMany(() => Product, (product) => product.gender)
  products: Product[];
}
