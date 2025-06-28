import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { signupDTO } from 'DTOs/SignupDTO';
import { BadRequestException } from '@nestjs/common';
import { SigninDTO } from 'DTOs/signinDTO';

@Injectable()
export class AuthService {
  
  constructor(private jwtService: JwtService) {}


  async Signup (Data: signupDTO){
     

     if(Data.confirmPassword != Data.password){
      throw new BadRequestException(
         'Something is wrong, check the information you sent',
      )
     }
     const payload = {email : Data.email, password : Data.password}
     const acess_token = this.jwtService.sign(payload)

     return {
       acess_token
     }
  }

  async Signin(Data : SigninDTO){
    const payload = {email : Data.email, password : Data.password}

    const acess_token = this.jwtService.sign(payload)
    return {
      acess_token
    }
  }
}
