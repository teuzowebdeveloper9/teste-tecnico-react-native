import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { CreateAcivityDTO } from 'DTOs/CreateAcivityDTO';
import { ZodValidationPipe } from '@anatine/zod-nestjs';


@Controller('activity')
export class ActivityController {
  constructor(private activityService : ActivityService){}

@Post()
async createActivity(@Body() body: CreateAcivityDTO) {
  return this.activityService.createActivity(body);
}  

  @Delete(':id')
async DeleteActivity(@Param('id') id: string) {
  return this.activityService.DeleteActivity(id);
}

  @Get()
  async ListAllActivities(){
    return this.activityService.ListAllActivities()
  }
    async EditActivitys(id: string, activity: CreateAcivityDTO){
     return this.activityService.EditAcitivity(id, activity);
  }
  @Put(':id')
  async EditAcitivity(@Param('id')id: string , @Body()  activity: CreateAcivityDTO ){
    return this.activityService.EditAcitivity(id, activity);
  }
}
