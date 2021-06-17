import { Sequelize } from 'sequelize-typescript';
import { Teacher } from '../Teacher/teachers.entity';
import { Student } from '../Student/student.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Steven@1996',
        database: 'student_portal',
      });
      sequelize.addModels([Student, Teacher]);
      await sequelize.sync();
      return sequelize;
    },
  },
];