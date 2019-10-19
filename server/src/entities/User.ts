import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  Generated,
  BaseEntity,
} from "typeorm";

@Entity("user")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column("uuid")
  @Generated("uuid")
  objectId: string;

  @Column("text", { nullable: false })
  email: string;

  @Column("text", { nullable: true })
  username?: string;

  @Column("text")
  password: string;

  @Column("int", { default: 0 })
  verify: number;
}
