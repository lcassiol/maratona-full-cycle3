import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Live } from './live.entity';
import { LivesService } from './lives.service';

@Controller('maratona')
export class LivesController {
  constructor(private livesService: LivesService) {}

  @Get()
  index(): Promise<Live[]> {
    return this.livesService.findAll();
  }

  @Post('lives')
  async create(@Body() liveData: Live): Promise<any> {
    return this.livesService.create(liveData);
  }

  @Put('lives/:id')
  async update(@Param('id') id: number, @Body() liveData: Live): Promise<any> {
    liveData.id = Number(id);
    console.log('Update #' + liveData.id);
    await this.livesService.update(liveData);
    return this.livesService.findOne(id);
  }

  @Delete('lives/:id')
  async delete(@Param('id') id: number): Promise<any> {
    this.livesService.delete(id);
    return {};
  }
}
