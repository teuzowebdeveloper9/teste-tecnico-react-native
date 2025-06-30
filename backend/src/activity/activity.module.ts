import { Module } from '@nestjs/common';
import { PrismaOrmService } from 'src/prisma-orm/prisma-orm.service';

@Module({
  providers: [PrismaOrmService],
  exports: [PrismaOrmService]
})
export class ActivityModule {}
