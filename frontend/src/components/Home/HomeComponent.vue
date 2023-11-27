<script setup lang="ts">
import { onMounted } from 'vue'
import DetailCard from './DetailCard.vue'
import useHome from '@/composables/useHome'

const { commits, getCommits, findAllCommitDto } = useHome()

onMounted(async () => {
  await getCommits(findAllCommitDto)
})
</script>

<template>
  <div class="container">
    <h1 class="m-4 text-center">Commits</h1>
    <div v-for="(commit, index) in commits" :key="`detailcard-${index}`">
      <DetailCard :commitResponse="commit" />
    </div>
  </div>
</template>
