<template>
  <HistoryPageTemplate>
    <template #header>
      <Header />
    </template>
    
    <template #content>
      <div class="history-sections">
        <ContentSection
          v-for="(section, index) in historySections"
          :key="section.id"
          :title="section.title"
          :paragraphs="section.paragraphs"
          :images="section.images"
          :animation-delay="(index + 1) * 0.1"
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
import HistoryPageTemplate from '../components/templates/HistoryPageTemplate.vue';
import Header from '../components/organisms/Header.vue';
import Footer from '../components/organisms/Footer.vue';
import ContentSection from '../components/organisms/ContentSection.vue';
import { useHistoryContent } from '../composables/useHistoryContent';

const { historySections, footerData } = useHistoryContent();
</script>

<style scoped>
.history-sections {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

@media (max-width: 768px) {
  .history-sections {
    gap: 2rem;
  }
}
</style>