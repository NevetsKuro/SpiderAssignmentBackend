
import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from 'src/auth/logging.interceptor';
import { Student } from './student.entity';
import { StudentsService } from './students.service';

@UseInterceptors(LoggingInterceptor)
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) { }

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentsService.getAllStudents();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `returns student ${id}`;
  }

  @Get('/status')
  testAPI(): string {
    return `status working`;
  }

  @Post('/add')
  async createStudent(@Body() body): Promise<Student> {
    return this.studentsService.createStudent(body);
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //   return `This action updates a #${id} cat`;
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}