import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './Student/students.module';
import { TeachersModule } from './Teacher/teachers.module';

@Module({
  imports: [StudentsModule, TeachersModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule { }