export class Student {
  id?: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  department: string;
  degree: string;
  session: string;
  class_roll: string;
  registration_no: string;
  point?: number;
  feedback_count?: number;
  teacher?: Teacher;
}

export class Teacher {
  id?: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  designation: string;
  degree: string;
  point?: number;
  feedback_count?: number;
}
