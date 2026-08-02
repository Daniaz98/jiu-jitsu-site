<template>
  <HistoryPageTemplate>
    <template #header>
      <Header />
    </template>

    <template #hero>
      <div class="bg-[linear-gradient(135deg,#ffffff_0%,#f5f5f5_100%)] py-28 text-center transition-[background] duration-300 dark:bg-[linear-gradient(135deg,#1a1a1a_0%,#2d2d2d_100%)] max-md:py-16">
        <Container size="medium">
          <Heading :level="1" class="mb-4 text-primary">
            História do Jiu Jitsu
          </Heading>
          <Text size="large" color="secondary" class="mx-auto max-w-[600px]">
            Explore os principais momentos da história desta arte-marcial
            milenar
          </Text>
        </Container>
      </div>
    </template>

    <template #content>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 py-8 max-md:grid-cols-1 max-md:gap-6 max-md:py-6">
        <HistoryCard
          v-for="card in historyCards"
          :key="card.id"
          :title="card.title"
          :image-src="card.imageSrc"
          :image-alt="card.imageAlt"
          :href="card.href"
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
import HistoryPageTemplate from "../../components/templates/HistoryPageTemplate.vue";
import Header from "../../components/organisms/Header.vue";
import Footer from "../../components/organisms/Footer.vue";
import HistoryCard from "../../components/molecules/HistoryCard.vue";
import Container from "../../components/atoms/Container.vue";
import Heading from "../../components/atoms/Heading.vue";
import Text from "../../components/atoms/Text.vue";
import { useHistoryContent } from "../../composables/useHistoryContent";
import samuraiHero from "../../assets/samurai-hero-yashitzone.webp";
import carlosGracie from "../../assets/Carlos-Gracie-Action.webp";
import nogi from "../../assets/bjj_no_gi.jpg";

const { footerData } = useHistoryContent();

const historyCards = [
  {
    id: "origem",
    title: "Origem",
    imageSrc: samuraiHero,
    imageAlt: "Guerreiro samurai, origem das técnicas de combate do Jiu Jitsu",
    href: "/historia/origem",
  },
  {
    id: "chegada-brasil",
    title: "Chegada ao Brasil",
    imageSrc: carlosGracie,
    imageAlt:
      "Carlos Gracie, fundador da primeira Academia Gracie de Jiu-Jitsu",
    href: "/historia/chegada-ao-brasil",
  },
  {
    id: "atualmente",
    title: "Atualmente",
    imageSrc: nogi,
    imageAlt:
      "No gi Jiu Jitsu, a modalidade sem kimono em ascensão",
    href: "/historia/atualmente",
  },
];
</script>
