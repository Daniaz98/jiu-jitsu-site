<template>
  <HistoryPageTemplate>
    <template #header>
      <Header />
    </template>
    
    <template #hero>
      <div class="history-hero">
        <Container size="medium">
          <Heading :level="1" class="history-hero__title">
            Origens do Jiu Jitsu
          </Heading>
          <Text size="large" color="secondary" class="history-hero__subtitle">
            Conheça a origem e evolução desta arte marcial milenar
          </Text>
        </Container>
      </div>
    </template>
    
    <template #content>
      <div class="history-sections">
        <ContentSection
          :title="origemSection.title"
          :paragraphs="origemSection.paragraphs"
          :images="origemSection.images"
          :animation-delay="0.1"
        />
      </div>
    </template>
    
    <template #footer>
      <Footer
        description="Site dedicado ao Jiu Jitsu, conheça a história, busque sobre competições e encontre a academia mais próxima."
        site-name="BJJ Academy"
        :quick-links="footerData.quickLinks"
        :contact-info="footerData.contactInfo"
        :social-links="footerData.socialLinks"
      />
    </template>
  </HistoryPageTemplate>
</template>

<script setup lang="ts">
import HistoryPageTemplate from '../../components/templates/HistoryPageTemplate.vue';
import Header from '../../components/organisms/Header.vue';
import Footer from '../../components/organisms/Footer.vue';
import ContentSection from '../../components/organisms/ContentSection.vue';
import Container from '../../components/atoms/Container.vue';
import Heading from '../../components/atoms/Heading.vue';
import Text from '../../components/atoms/Text.vue';
import { useHistoryContent } from '../../composables/useHistoryContent';
import { computed } from 'vue';
import { historyContent } from '../../data/historyContent';

const { footerData } = useHistoryContent();

const origemSection = computed(() => {
  return historyContent.sections.find(section => section.id === 'origins') || {
    id: 'origins',
    title: 'Origens do Jiu Jitsu',
    paragraphs: [],
    images: [],
  };
});
</script>

<style scoped>
.history-hero {
  padding: 6rem 0 4rem;
  text-align: center;
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
  transition: background 0.3s ease;
}

.dark .history-hero {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
}

.history-hero__title {
  margin-bottom: 1rem;
  color: #d32f2f;
}

.history-hero__subtitle {
  max-width: 600px;
  margin: 0 auto;
}

.history-sections {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

@media (max-width: 768px) {
  .history-hero {
    padding: 4rem 0 3rem;
  }

  .history-sections {
    gap: 2rem;
  }
}
</style>

