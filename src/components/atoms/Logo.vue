<template>
  <div class="logo">
    <slot>
      <span class="logo-text">JIU JITSU</span>
    </slot>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  color: #d32f2f;
  text-decoration: none;
}

.logo-text {
  letter-spacing: 2px;
}
</style>

