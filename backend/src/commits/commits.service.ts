import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { FindAllCommitDto } from './dto/find-all-commit.dto';
import { CommitResponse } from './interfaces';

@Injectable()
export class CommitsService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(findAllCommitDto: FindAllCommitDto) {
    const { user, repository, per_page = 100 } = findAllCommitDto;
    const response = await firstValueFrom(
      this.httpService.get<CommitResponse[]>(
        `https://api.github.com/repos/${user}/${repository}/commits?&per_page=${per_page}`,
      ),
    );
    return response.data;
  }
}
