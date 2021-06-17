
import { Teacher } from './teachers.entity';

export const TeachersProviders = [
  {
    provide: 'TEACHER_REPOSITORY',
    useValue: Teacher,
  },
];