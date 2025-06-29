import { Body, Controller, Post } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import { ImputProps } from 'src/interfaces/ImputProps';

@Controller('chatbot')
export class ChatbotController {
  constructor(private chatbotService : ChatbotService){}

  @Post()
  async ChatAi(@Body() prompt : ImputProps){
    return this.chatbotService.chatWithAi(prompt)
  }

}
