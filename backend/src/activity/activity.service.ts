import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAcivityDTO } from 'DTOs/CreateAcivityDTO';
import { PrismaOrmService } from 'src/prisma-orm/prisma-orm.service';

@Injectable()
export class ActivityService {
  constructor(private prismaService : PrismaOrmService){}

  async createActivity(Data:  CreateAcivityDTO){

   const activity = await this.prismaService.activity.create({
    data: {
      title: Data.title,
      durationInMinutes: Data.durationInMinutes,
      intensity: Data.intensity
    }
   })
   return activity


  }
   async DeleteActivity (id : string){
     const searchActivity = await this.prismaService.activity.findUnique({
        where: { id },
     })
     if(!searchActivity){
      throw new BadRequestException("non-existent or not found activity")
    }
    await this.prismaService.activity.delete({
       where: { id },
    })

     return;
   }
    async ListAllActivities() {
     const Activities = await this.prismaService.activity.findMany();
     return Activities;
   }

   async EditAcitivity(id: string, activity: CreateAcivityDTO){
      const searchActivity = await this.prismaService.activity.findUnique({
        where:{id} 
      })
      if(!searchActivity){
        throw new BadRequestException("non-existent or not found activity")
      }
     const updatedActivity = await this.prismaService.activity.update({
       where: { id },
       data: {
        ...activity
       }
     })      
      return updatedActivity
   }



}
