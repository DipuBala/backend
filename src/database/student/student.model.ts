import { randomUUID } from 'crypto';
import { model, Schema } from 'mongoose';
import { Student, Teacher } from 'src/students/repository/student.entity';

const TeacherSchema = new Schema<Teacher>(
  {
    id: {
      type: String,
      default: () => randomUUID(),
      index: true,
    },
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    designation: String,
    degree: String,
    point: Number,
    feedback_count: Number,
  },
  {
    _id: false,
    timestamps: false,
    versionKey: false,
  },
);

const StudentSchema = new Schema<Student>(
  {
    id: {
      type: String,
      unique: true,
      default: () => randomUUID(),
    },
    firstName: String,
    lastName: String,
    phone: {
      type: String,
      index: true,
    },
    email: {
      type: String,
      index: true,
    },
    department: String,
    degree: String,
    session: String,
    class_roll: String,
    registration_no: String,
    point: Number,
    feedback_count: Number,
    teacher: TeacherSchema,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const StudentModel = model<Student>('student', StudentSchema);
export { StudentModel };
