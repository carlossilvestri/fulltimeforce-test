import { Controller, Get, Query } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { FindAllCommitDto } from './dto/find-all-commit.dto';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get()
  findAll(@Query() findAllDto: FindAllCommitDto) {
    return this.commitsService.findAll(findAllDto);
  }
}
