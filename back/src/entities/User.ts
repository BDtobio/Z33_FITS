import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string; // <-- agregar

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column()
  birthdate!: string; // <-- agregar

  @Column({ default: "user" })
  role!: string;
}
