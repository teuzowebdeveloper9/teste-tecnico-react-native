import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ChatbotController } from './chatbot/chatbot.controller';
import { ChatbotService } from './chatbot/chatbot.service';
import { ChatbotModule } from './chatbot/chatbot.module';


@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true, 
      envFilePath: '.env', 
    }),
    AuthModule,
    ChatbotModule],
  controllers: [AppController, ChatbotController],
  providers: [AppService, ChatbotService],      
})
export class AppModule {}
