import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { StudentsProviders } from './students.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [StudentsController],
  providers: [
    StudentsService,
    ...StudentsProviders,
  ],
})
export class StudentsModule { }