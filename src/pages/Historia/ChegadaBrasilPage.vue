<template>
  <HistoryPageTemplate>
    <template #header>
      <Header />
    </template>

    <template #hero>
      <div class="bg-[linear-gradient(135deg,#ffffff_0%,#f5f5f5_100%)] pt-24 pb-8 text-center transition-[background] duration-300 dark:bg-[linear-gradient(135deg,#1a1a1a_0%,#2d2d2d_100%)] max-md:py-16">
        <Container size="medium">
          <Heading :level="1" class="mb-4 text-primary">
            Chegada ao Brasil
          </Heading>
          <Text size="large" color="secondary" class="mx-auto max-w-[600px]">
            Como o Jiu Jitsu chegou ao Brasil e se desenvolveu
          </Text>
        </Container>
      </div>
    </template>

    <template #content>
      <div class="flex flex-col gap-12 max-md:gap-8">
        <ContentSection
          v-for="(section, index) in chegadaSections"
          :key="section.id"
          :title="section.title"
          :paragraphs="section.paragraphs"
          :images="section.images"
          :animation-delay="0.1 + (index * 0.1)"
        />
      </div>
    </template>

    <template #nav>
      <HistoryNav />
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
import HistoryNav from '../../components/molecules/HistoryNav.vue';
import Container from '../../components/atoms/Container.vue';
import Heading from '../../components/atoms/Heading.vue';
import Text from '../../components/atoms/Text.vue';
import { useHistoryContent } from '../../composables/useHistoryContent';
import { computed } from 'vue';
import { historyContent } from '../../data/historyContent';

const { footerData } = useHistoryContent();

const chegadaSections = computed(() => {
  const ids = ['brazil-arrival', 'bjj-development', 'gracie-desafios'];
  return historyContent.sections.filter(section => ids.includes(section.id));
});
</script>
