import { Module } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { PrismaModule } from '../prisma/prisma.module';
import { EventController } from './event.controller';
import { EventService } from './event.service';

@Module({
  imports: [PrismaModule],
  controllers: [EventController],
  providers: [EventService, UserService],
  exports: [EventService],
})
export class EventModule {}
