import { Injectable, Inject } from '@nestjs/common';
import { CreateStudentDto } from './dto/createStudentsDto';
// import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './student.entity';

@Injectable()
export class StudentsService {

  constructor(
    @Inject('STUDENT_REPOSITORY')
    private studentsRepository: typeof Student
  ) { }

  private readonly students: Student[] = [];

  async getAllStudents(): Promise<Student[]> {
    return await this.studentsRepository.findAll<Student>();
  }

  async createStudent(createStudent: CreateStudentDto): Promise<Student> {
    return await this.studentsRepository.create<Student>(createStudent);
  }
}