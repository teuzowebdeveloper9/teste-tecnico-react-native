import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { signupDTO } from 'DTOs/SignupDTO';
import { BadRequestException } from '@nestjs/common';
import { SigninDTO } from 'DTOs/signinDTO';
import { PrismaOrmService } from 'src/prisma-orm/prisma-orm.service';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class AuthService {
  
  constructor(private jwtService: JwtService, private prismaService : PrismaOrmService) {}


  async Signup (Data: signupDTO){

    const User = await this.prismaService.usuario.create({
      data: {
        email: Data.email,
        password: Data.password,
      }
    })
    
    if(!User){
      throw new BadRequestException("um erro desconhecido aconteceu tente novamente")
    }

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

   const User = await this.prismaService.usuario.findUnique({
     where : {
      email : Data.email
     }
   })

   if(!User){
      throw new NotFoundException("We did not find this user, you can try to create an account if you do not have one or check the information provided.")
   }

    const payload = {email : Data.email, password : Data.password}

    const acess_token = this.jwtService.sign(payload)
    return {
      acess_token
    }
  }
}
