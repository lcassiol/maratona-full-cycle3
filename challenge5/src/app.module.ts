import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LivesModule } from './live/lives.module';

@Module({
  imports: [TypeOrmModule.forRoot(), LivesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
