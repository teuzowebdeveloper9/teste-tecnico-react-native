import { Injectable } from '@nestjs/common';
import { ImputProps } from 'src/interfaces/ImputProps';
import axios from 'axios'
import { urlGemini } from 'src/utils/dataGemini';
import { contextGemini } from 'src/utils/contextGemini';

@Injectable()
export class ChatbotService {

  async chatWithAi (Prompt : ImputProps){
    
     const data =  {
  contents: [
    {
      parts: [
        {
          text: contextGemini + Prompt.prompt
        }
      ]
    }
  ]
};
   try{
      const response = await axios.post(urlGemini,data, {
        headers: {
          'Content-Type': 'application/json',
        }

       
      })
       return response.data
   }catch(err){
    console.error(err)
    throw err
   }
 

  }
}
