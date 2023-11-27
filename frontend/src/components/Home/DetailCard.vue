<template>
  <div class="card m-2">
    <div class="card-header">Commit</div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>{{ props.commitResponse.commit.message }}</p>
        <footer class="blockquote-footer">
          {{ props.commitResponse.commit.author.name }}
        </footer>
      </blockquote>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CommitResponse } from '@/interfaces'
interface Props {
  commitResponse: CommitResponse
}

const props = defineProps<Props>()
</script>

<style scoped></style>
