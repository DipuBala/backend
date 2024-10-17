import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentsRepository } from './repository/students.repository';

@Injectable()
export class StudentsService {
  constructor(private studentRepo: StudentsRepository) {}
  async createStudent(createStudentDto: CreateStudentDto) {
    try {
      const doesExistStudent = await this.studentRepo.findStudent({
        email: createStudentDto.email,
        registration_no: createStudentDto.registration_no,
      });
      if (doesExistStudent) {
        throw new Error('Student already exists!');
      }
      // const getTeacher = await this.teacherRepo.findTeacher({
      //   id: createStudentDto.teacher,
      // });
      const getTeacher = {
        id: 'teacherId',
        firstName: 'teacherFirstName',
        lastName: 'teacherLastName',
        designation: 'Professor',
        email: 'teacher@gmail.com',
        phone: '017xxxxxxxx',
        degree: 'M.Sc.',
      };
      const data = {
        ...createStudentDto,
        teacher: getTeacher,
      };
      const student = await this.studentRepo.createStudent(data);
      if (!student) {
        throw new Error('Failed to create student!');
      }
      return student;
    } catch (err) {
      console.log('🚀 ~ StudentsService ~ createStudent ~ err-40:', err);
      throw new HttpException(
        'Could not create student!',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getStudents() {
    return await this.studentRepo.findStudents({});
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} student`;
  // }

  // update(id: number, updateStudentDto: UpdateStudentDto) {
  //   return `This action updates a #${id} student`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} student`;
  // }
}
