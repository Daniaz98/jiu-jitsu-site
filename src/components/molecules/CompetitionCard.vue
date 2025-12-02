<template>
  <div class="competition-card">
    <div class="competition-card__image-wrapper">
      <Image
        :src="imageSrc"
        :alt="imageAlt"
        variant="cover"
        class="competition-card__image"
      />
      <div class="competition-card__overlay"></div>
      <div class="competition-card__badge" v-if="badge">
        {{ badge }}
      </div>
    </div>
    
    <div class="competition-card__content">
      <Heading :level="3" class="competition-card__title">
        {{ title }}
      </Heading>
      
      <div class="competition-card__info">
        <div class="competition-card__info-item" v-if="date">
          <Text size="small" color="secondary" class="competition-card__label">
            Data
          </Text>
          <Text size="medium" color="primary" class="competition-card__value">
            {{ date }}
          </Text>
        </div>
        
        <div class="competition-card__info-item" v-if="location">
          <Text size="small" color="secondary" class="competition-card__label">
            Local
          </Text>
          <Text size="medium" color="primary" class="competition-card__value">
            {{ location }}
          </Text>
        </div>
        
        <div class="competition-card__info-item" v-if="type">
          <Text size="small" color="secondary" class="competition-card__label">
            Tipo
          </Text>
          <Text size="medium" color="primary" class="competition-card__value">
            {{ type }}
          </Text>
        </div>
      </div>
      
      <Text size="medium" color="secondary" class="competition-card__description" v-if="description">
        {{ description }}
      </Text>
      
      <div class="competition-card__actions" v-if="href">
        <Button variant="primary" size="medium" @click="handleClick">
          Ver Detalhes
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from '../atoms/Image.vue';
import Heading from '../atoms/Heading.vue';
import Text from '../atoms/Text.vue';
import Button from '../atoms/Button.vue';

interface Props {
  title: string;
  imageSrc: string;
  imageAlt: string;
  date?: string;
  location?: string;
  type?: string;
  description?: string;
  badge?: string;
  href?: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  click: []
}>();

const handleClick = () => {
  if (props.href) {
    window.open(props.href, '_blank');
  }
  emit('click');
};
</script>

<style scoped>
.competition-card {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
}

.competition-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(211, 47, 47, 0.2);
}

.dark .competition-card {
  background-color: #2d2d2d;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.dark .competition-card:hover {
  box-shadow: 0 12px 24px rgba(211, 47, 47, 0.3);
}

.competition-card__image-wrapper {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.competition-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.competition-card:hover .competition-card__image {
  transform: scale(1.1);
}

.competition-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.2) 100%
  );
  transition: background 0.3s ease;
}

.competition-card:hover .competition-card__overlay {
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(211, 47, 47, 0.3) 100%
  );
}

.competition-card__badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #d32f2f;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 2;
}

.competition-card__content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.competition-card__title {
  color: #d32f2f;
  margin: 0;
}

.competition-card__info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.competition-card__info-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.competition-card__label {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
}

.competition-card__value {
  font-weight: 500;
}

.competition-card__description {
  flex: 1;
}

.competition-card__actions {
  margin-top: auto;
  padding-top: 1rem;
}

@media (max-width: 768px) {
  .competition-card__image-wrapper {
    height: 200px;
  }

  .competition-card__content {
    padding: 1.25rem;
    gap: 0.75rem;
  }
}
</style>

