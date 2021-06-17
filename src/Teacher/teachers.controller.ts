
import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from 'src/auth/logging.interceptor';
import { Teacher } from './teachers.entity';
import { TeachersService } from './teachers.service';

@UseInterceptors(LoggingInterceptor)
@Controller('teachers')
export class TeachersController {
  constructor(private readonly teacherService: TeachersService) { }

  @Get()
  findAll(): Promise<Teacher[]> {
    return this.teacherService.getAllTeachers();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Teacher> {
    return this.teacherService.getTeacher(id);
  }

  @Post('/add')
  async createTeacher(@Body() body): Promise<Teacher> {
    return this.teacherService.createTeacher(body);
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //   return `This action updates a #${id} cat`;
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} teachers`;
  }
}