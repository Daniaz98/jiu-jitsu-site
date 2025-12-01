<template>
  <HistoryPageTemplate>
    <template #header>
      <Header />
    </template>

    <template #hero>
      <div class="history-hero">
        <Container size="medium">
          <Heading :level="1" class="history-hero__title">
            História do Jiu Jitsu
          </Heading>
          <Text size="large" color="secondary" class="history-hero__subtitle">
            Explore os principais momentos da história desta arte-marcial
            milenar
          </Text>
        </Container>
      </div>
    </template>

    <template #content>
      <div class="history-cards">
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

<style scoped>
.history-hero {
  padding: 7rem 0 4rem;
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

.history-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0 2rem;
}

@media (max-width: 768px) {
  .history-hero {
    padding: 4rem 0 3rem;
  }

  .history-cards {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem 0;
  }
}
</style>
