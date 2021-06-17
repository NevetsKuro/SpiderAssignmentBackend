import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Teacher extends Model {
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  teacherid: number;

  @Column({
    allowNull: false,
  })
  firstName: string;
  @Column
  lastName: string;

  @Column
  age: number;

  @Column
  classAssigned: string;

  @Column
  subjects: string;

  @Column({
    allowNull: false,
  })
  experience: number;

  @Column({
    allowNull: false,
  })
  qualification: string;

  @Column({
    allowNull: false,
    defaultValue: new Date()
  })
  createdAt: Date;
}