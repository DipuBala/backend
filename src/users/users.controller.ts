import { Controller, Get, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('User APIs')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/me')
  @ApiResponse({
    description: 'Personal Profile Response',
    status: HttpStatus.OK,
  })
  @ApiOperation({ summary: 'Obtain logged in user information' })
  async getProfileInfo() {
    return await this.userService.getProfileInfo();
  }
}
