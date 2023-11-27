import { ref } from 'vue'
import type { CommitResponse, FindAllCommitDto } from '@/interfaces'
import { commitApi } from '@/api'

const useHome = () => {
  const commits = ref<CommitResponse[]>([])

  const findAllCommitDto: FindAllCommitDto = {
    user: import.meta.env.VITE_USER as string,
    repository: import.meta.env.VITE_REPOSITORY as string,
    per_page: 100
  }

  const getCommits = async (findAllCommitDto: FindAllCommitDto) => {
    const { data } = await commitApi.getAll(findAllCommitDto)
    commits.value = data
  }

  return {
    commits,
    findAllCommitDto,
    getCommits
  }
}

export default useHome
