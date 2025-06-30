import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ChatbotController } from './chatbot/chatbot.controller';
import { ChatbotService } from './chatbot/chatbot.service';
import { ChatbotModule } from './chatbot/chatbot.module';
import { ActivityController } from './activity/activity.controller';
import { ActivityService } from './activity/activity.service';
import { PrismaOrmModule } from './prisma-orm/prisma-orm.module';


@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true, 
       envFilePath: '.env', 
    }),
    AuthModule,
    ChatbotModule,
    PrismaOrmModule],
  controllers: [AppController, ChatbotController,ActivityController],
  providers: [AppService, ChatbotService,ActivityService],      
})
export class AppModule {}
