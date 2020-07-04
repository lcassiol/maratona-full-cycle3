import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LivesService } from './lives.service';
import { LivesController } from './lives.controller';
import { Live } from './live.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Live])],
  providers: [LivesService],
  controllers: [LivesController],
})
export class LivesModule {}
