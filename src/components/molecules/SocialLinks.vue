<template>
  <div class="social-links">
    <a
      v-for="link in links"
      :key="link.href"
      :href="link.href"
      :aria-label="link.label"
      target="_blank"
      rel="noopener noreferrer"
      class="social-link"
    >
      <slot :name="link.icon" :link="link">
        {{ link.label }}
      </slot>
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  links: Array<{ href: string; label: string; icon?: string }>
}>()
</script>

<style scoped>
.social-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.social-link {
  color: #000000;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.05);
}

.dark .social-link {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
}

.social-link:hover {
  color: #d32f2f;
  background-color: rgba(211, 47, 47, 0.2);
  transform: translateY(-2px);
}
</style>

