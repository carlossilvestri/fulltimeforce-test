import type { CommitResponse, FindAllCommitDto } from '@/interfaces'
import api from '@/lib/axios'

export default {
  entity: 'commits',
  async getAll(findAllCommitDto: FindAllCommitDto) {
    const { user, repository, per_page = 100 } = findAllCommitDto
    return await api.get<CommitResponse[]>(
      `/commits?user=${user}&repository=${repository}&per_page=${per_page}`
    )
  }
}
