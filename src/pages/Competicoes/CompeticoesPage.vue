<template>
  <CompeticoesPageTemplate>
    <template #header>
      <Header />
    </template>

    <template #hero>
      <div class="competicoes-hero">
        <Container size="medium">
          <Heading :level="1" class="competicoes-hero__title">
            {{ heroData.title }}
          </Heading>
          <Text size="large" color="secondary" class="competicoes-hero__subtitle">
            {{ heroData.subtitle }}
          </Text>
        </Container>
      </div>
    </template>

    <template #content>
      <div class="competicoes-grid">
        <CompetitionCard
          v-for="competition in competitions"
          :key="competition.id"
          :title="competition.title"
          :image-src="competition.imageSrc"
          :image-alt="competition.imageAlt"
          :date="competition.date"
          :location="competition.location"
          :type="competition.type"
          :description="competition.description"
          :badge="competition.badge"
          :href="competition.href"
        />
      </div>
    </template>

    <template #footer>
      <Footer
        description="Site dedicado ao Jiu Jitsu, conheça a história, busque sobre competições e encontre a academia mais próxima."
        site-name="BJJ Atlas"
        :quick-links="footerData.quickLinks"
        :contact-info="footerData.contactInfo"
        :social-links="footerData.socialLinks"
      />
    </template>
  </CompeticoesPageTemplate>
</template>

<script setup lang="ts">
import CompeticoesPageTemplate from "../../components/templates/CompeticoesPageTemplate.vue";
import Header from "../../components/organisms/Header.vue";
import Footer from "../../components/organisms/Footer.vue";
import CompetitionCard from "../../components/molecules/CompetitionCard.vue";
import Container from "../../components/atoms/Container.vue";
import Heading from "../../components/atoms/Heading.vue";
import Text from "../../components/atoms/Text.vue";
import { useCompetitionsContent } from "../../composables/useCompetitionsContent";

const { heroData, competitions, footerData } = useCompetitionsContent();
</script>

<style scoped>
.competicoes-hero {
  padding: 7rem 0 4rem;
  text-align: center;
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
  transition: background 0.3s ease;
}

.dark .competicoes-hero {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
}

.competicoes-hero__title {
  margin-bottom: 1rem;
  color: #d32f2f;
}

.competicoes-hero__subtitle {
  max-width: 600px;
  margin: 0 auto;
}

.competicoes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
}

@media (max-width: 768px) {
  .competicoes-hero {
    padding: 4rem 0 3rem;
  }

  .competicoes-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem 0;
  }
}
</style>
