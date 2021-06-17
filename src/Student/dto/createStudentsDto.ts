export class CreateStudentDto {
  readonly studentid: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly age: number;
  readonly rollno: number;
  readonly class: string;
  readonly createdAt: Date;
}