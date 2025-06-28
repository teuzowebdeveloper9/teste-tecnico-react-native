import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule} from '@nestjs/jwt'
import { Enviriments } from 'src/secret/enviriments';
import { PrismaOrmService } from 'src/prisma-orm/prisma-orm.service';

@Module({
   imports: [
    JwtModule.register({
      secret: Enviriments.JWTPASS, 
      signOptions: { expiresIn: 60 * 60 * 24 * 2 /** equivalent to 2 days */ },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaOrmService]
})
export class AuthModule {}
