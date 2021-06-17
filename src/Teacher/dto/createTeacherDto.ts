export class CreateTeacherDto {
  readonly teacherid: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly age: number;
  readonly classAssigned: number;
  readonly subjects: string;
  readonly experience: string;
  readonly qualification: string;
  readonly createdAt: Date;
}