import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { CreateAcivityDTO } from 'DTOs/CreateAcivityDTO';
import { ZodValidationPipe } from '@anatine/zod-nestjs';
import { ApiOperation } from '@nestjs/swagger';


@Controller('activity')
export class ActivityController {
  constructor(private activityService : ActivityService){}

@Post()
@ApiOperation({summary: 'This route is responsible for creating a new activity'})
async createActivity(@Body() body: CreateAcivityDTO) {
  return this.activityService.createActivity(body);
}  

  @Delete(':id')
  @ApiOperation({summary: 'This route is responsible for deleting a specific activity by id'})
async DeleteActivity(@Param('id') id: string) {
  return this.activityService.DeleteActivity(id);
}

  @Get()
  @ApiOperation({summary: 'This route is responsible for listing all activities'})
  async ListAllActivities(){
    return this.activityService.ListAllActivities()
  }
    async EditActivitys(id: string, activity: CreateAcivityDTO){
     return this.activityService.EditAcitivity(id, activity);
  }
  @Get(':id')
  @ApiOperation({summary: 'This route is responsible for searching for a specific activity by id'})
  async getActivityById(@Param('id') id: string){
    return this.activityService.getActivityById(id);
  }
  
  @Put(':id')
  @ApiOperation({summary: 'This route is responsible for editing a specific activity by id'})
  async EditAcitivity(@Param('id')id: string , @Body()  activity: CreateAcivityDTO ){
    return this.activityService.EditAcitivity(id, activity);
  }
}
