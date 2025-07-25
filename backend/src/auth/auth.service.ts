import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { signupDTO } from 'DTOs/SignupDTO';
import { BadRequestException } from '@nestjs/common';
import { SigninDTO } from 'DTOs/signinDTO';
import { PrismaOrmService } from 'src/prisma-orm/prisma-orm.service';
import { NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { HashPassword } from 'src/utils/HashThePassword';

@Injectable()
export class AuthService {
  
  constructor(private jwtService: JwtService,
     private prismaService : PrismaOrmService,) {
      
     }

  

  async Signup (Data: signupDTO){

     if(Data.confirmPassword != Data.password){
      throw new BadRequestException(
         'Something is wrong, check the information you sent',
      )
     }
     
     
     const hashedPassword = await HashPassword(Data.password)

    const User = await this.prismaService.usuario.create({
      data: {
        email: Data.email,
        password: hashedPassword,
      }
    })
    
    if(!User){
      throw new BadRequestException("um erro desconhecido aconteceu tente novamente")
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

    const isPasswordValid = await bcrypt.compare(Data.password, User.password);
       if (!isPasswordValid) {
    throw new BadRequestException("the credentials provided are incorrect");
   }

    const payload = {email : Data.email, password : Data.password}

    const acess_token = this.jwtService.sign(payload)
    return {
      acess_token
    }
  }
  
async DeleteAccount(Data: SigninDTO) {
  const User = await this.prismaService.usuario.findUnique({
    where: {
      email: Data.email,
    },
  });

  if (!User) {
    throw new NotFoundException(
      'We did not find this user. Please check your credentials.',
    );
  }

  const isPasswordValid = await bcrypt.compare(Data.password, User.password);
  if (!isPasswordValid) {
    throw new ForbiddenException('The provided password is incorrect.');
  }

  await this.prismaService.usuario.delete({
    where: {
      email: Data.email,
    },
  });

  return {
    message: 'Your account has been successfully deleted.',
  };
}
}
