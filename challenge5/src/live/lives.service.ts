import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Live } from './live.entity';

@Injectable()
export class LivesService {
  constructor(
    @InjectRepository(Live)
    private liveRepository: Repository<Live>,
  ) {}

  async findAll(): Promise<Live[]> {
    return await this.liveRepository.find();
  }

  async findOne(id: number): Promise<Live> {
    return await this.liveRepository.findOne(id);
  }

  async create(Live: Live): Promise<Live> {
    return await this.liveRepository.save(Live);
  }

  async update(Live: Live): Promise<UpdateResult> {
    return await this.liveRepository.update(Live.id, Live);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.liveRepository.delete(id);
  }
}
