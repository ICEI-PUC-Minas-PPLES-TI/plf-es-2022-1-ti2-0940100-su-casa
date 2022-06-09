import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { PrismaModule } from './prisma/prisma.module';
import { ResidenceModule } from './residence/residence.module';
import { UserModule } from './user/user.module';
import { EventModule } from './Event/event.module';
import { StaffModule } from './staff/staff.module';
import { EvaluationModule } from './evaluation/evaluation.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    UserModule,
    ResidenceModule,
    EventModule,
    StaffModule,
    EvaluationModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule {}
