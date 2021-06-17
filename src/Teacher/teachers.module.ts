import { Module } from '@nestjs/common';
import { TeachersController } from './teachers.controller';
import { TeachersService } from './teachers.service';
import { TeachersProviders } from './teachers.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TeachersController],
  providers: [
    TeachersService,
    ...TeachersProviders,
  ],
})
export class TeachersModule { }