<script setup lang="ts">
defineProps<{
  title: string
  command: string
  description?: string
  availability?: string
}>()
</script>

<template>
  <section class="command-card">
    <div class="command-card__bar">
      <span class="command-card__lights" aria-hidden="true"><i></i><i></i><i></i></span>
      <strong>{{ title }}</strong>
      <span v-if="availability" class="command-card__badge">{{ availability }}</span>
    </div>
    <div class="command-card__terminal"><span class="command-card__prompt">pn532&gt;</span> {{ command }}</div>
    <p v-if="description">{{ description }}</p>
  </section>
</template>
