import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Student extends Model {
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  public studentid: number;

  @Column({
    allowNull: false,
  })
  firstName: string;

  @Column
  lastName: string;

  @Column
  age: number;

  @Column
  rollno: number;

  @Column({
    allowNull: false,
  })
  class: string;

  @Column({
    allowNull: false,
    defaultValue: new Date()
  })
  createdAt: Date;
}