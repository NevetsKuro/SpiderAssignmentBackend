import { Injectable, Inject } from '@nestjs/common';
import { CreateTeacherDto } from './dto/createTeacherDto';
// import { CreateTeacherDto } from './dto/create-teacher.dto';
import { Teacher } from './teachers.entity';

@Injectable()
export class TeachersService {

  constructor(
    @Inject('TEACHER_REPOSITORY')
    private teachersRepository: typeof Teacher
  ) { }

  private readonly teachers: Teacher[] = [];

  async getAllTeachers(): Promise<Teacher[]> {
    return await this.teachersRepository.findAll<Teacher>();
  }

  async getTeacher(id: string): Promise<Teacher> {
    return await this.teachersRepository.findOne<Teacher>();
  }

  async createTeacher(createTeacher: CreateTeacherDto): Promise<Teacher> {
    return await this.teachersRepository.create<Teacher>(createTeacher);
  }
}