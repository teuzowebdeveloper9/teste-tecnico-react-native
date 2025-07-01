import { Body, Controller, Delete, Post } from '@nestjs/common';
import { SigninDTO } from 'DTOs/signinDTO';
import { signupDTO } from 'DTOs/SignupDTO';
import { AuthService } from './auth.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService : AuthService){

  }

  @Post("/signup")
  @ApiOperation({summary: 'This API is responsible for writing the user it returns in jwt token as requested in the technical test'})
  async signup(@Body() Body: signupDTO) {

    return this.authService.Signup(Body)

  }

  @Post("/signin")
  @ApiOperation({summary: 'This route verifies the user through bcript because the passwords saved in the database are encrypted.'})
  async signin(@Body() Body: SigninDTO){

    return this.authService.Signin(Body)
  }
  @Delete('delete')
  @ApiOperation({summary : 'This route was used to delete a user by taking a dto that represents him'})
 async DeleteAccount(@Body() Data: SigninDTO) {
  return this.authService.DeleteAccount(Data);
}
}
