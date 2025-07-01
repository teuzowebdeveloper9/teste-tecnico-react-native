import { Body, Controller, Delete, Post } from '@nestjs/common';
import { SigninDTO } from 'DTOs/signinDTO';
import { signupDTO } from 'DTOs/SignupDTO';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService : AuthService){

  }

  @Post("/signup")
  async signup(@Body() Body: signupDTO) {

    return this.authService.Signup(Body)

  }

  @Post("/signin")
  async signin(@Body() Body: SigninDTO){

    return this.authService.Signin(Body)
  }
  @Delete('delete')
 async DeleteAccount(@Body() Data: SigninDTO) {
  return this.authService.DeleteAccount(Data);
}
}
