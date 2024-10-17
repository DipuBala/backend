import { ApiProperty } from '@nestjs/swagger';
import { Teacher } from '../repository/student.entity';

export class CreateStudentDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  department: string;

  @ApiProperty()
  degree: string;

  @ApiProperty()
  session: string;

  @ApiProperty()
  class_roll: string;

  @ApiProperty()
  registration_no: string;

  @ApiProperty()
  teacher: Teacher | string;
}
