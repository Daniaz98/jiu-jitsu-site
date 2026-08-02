<template>
  <HistoryPageTemplate>
    <template #header>
      <Header />
    </template>

    <template #hero>
      <div class="bg-[linear-gradient(135deg,#ffffff_0%,#f5f5f5_100%)] py-24 text-center transition-[background] duration-300 dark:bg-[linear-gradient(135deg,#1a1a1a_0%,#2d2d2d_100%)] max-md:py-16">
        <Container size="medium">
          <Heading :level="1" class="mb-4 text-primary">
            Atualmente
          </Heading>
          <Text size="large" color="secondary" class="mx-auto max-w-[600px]">
            O estado atual do Jiu Jitsu
          </Text>
        </Container>
      </div>
    </template>

    <template #content>
      <div class="flex flex-col gap-12 max-md:gap-8">
        <ContentSection
          v-for="(section, index) in atualmenteSections"
          :key="section.id"
          :title="section.title"
          :paragraphs="section.paragraphs"
          :images="section.images"
          :animation-delay="(index + 1) * 0.1"
        />
      </div>
    </template>

    <template #nav>
      <HistoryNav />
    </template>

    <template #footer>
      <Footer />
    </template>
  </HistoryPageTemplate>
</template>

<script setup lang="ts">
import HistoryPageTemplate from "../../components/templates/HistoryPageTemplate.vue";
import Header from "../../components/organisms/Header.vue";
import Footer from "../../components/organisms/Footer.vue";
import ContentSection from "../../components/organisms/ContentSection.vue";
import HistoryNav from "../../components/molecules/HistoryNav.vue";
import Container from "../../components/atoms/Container.vue";
import Heading from "../../components/atoms/Heading.vue";
import Text from "../../components/atoms/Text.vue";
import { computed } from "vue";
import { historyContent } from "../../data/historyContent";

const atualmenteSections = computed(() => {
  const ids = ["modern-bjj", "bjj-hoje"];
  return historyContent.sections.filter((section) =>
    ids.includes(section.id),
  );
});
</script>
