import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async getProfileInfo() {
    return {
      name: 'John Doe',
      email: 'johndoe@example.com',
      role: 'admin',
    };
  }
}
