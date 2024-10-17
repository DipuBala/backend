import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';
import { StudentModel } from 'src/database/student/student.model';
import { randomUUID } from 'crypto';

@Injectable()
export class StudentsRepository {
  async findStudent(query: Record<string, string>): Promise<Student | null> {
    try {
      return await StudentModel.findOne(query).lean();
    } catch (err) {
      console.log('🚀 ~ StudentsRepository ~ findStudent ~ err-10:', err);
      return null;
    }
  }

  async createStudent(student: Student): Promise<Student | null> {
    try {
      student.id = randomUUID();
      const createdStudent = await StudentModel.create(student);
      return createdStudent?.toJSON();
    } catch (error: any) {
      console.log('🚀 ~ StudentsRepository ~ createStudent ~ error-23:', error);
      return null;
    }
  }

  async findStudents(query: Record<string, string>): Promise<Student[] | []> {
    try {
      return await StudentModel.find(query).lean();
    } catch (err) {
      console.log('🚀 ~ StudentsRepository ~ findStudent ~ err-10:', err);
      return [];
    }
  }
}
