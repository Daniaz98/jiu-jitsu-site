<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const alert = ref(false)

function showAlert() {
  alert.value = true
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p>Alert está: {{ alert }}</p>
    <button type="button" @click="showAlert">
      show the alert!
    </button>
    <p>Isto seria um atomo, um botão</p>

    <p v-if="alert">Alert visible!</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
