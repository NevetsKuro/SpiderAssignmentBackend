
import { Student } from './student.entity';

export const StudentsProviders = [
  {
    provide: 'STUDENT_REPOSITORY',
    useValue: Student,
  },
];