<template>
  <GraduacaoPageTemplate>
    <template #header>
      <Header />
    </template>

    <template #hero>
      <div class="graduacao-hero">
        <Container size="medium">
          <Heading :level="1" class="graduacao-hero__title">
            {{ heroData.title }}
          </Heading>
          <Text size="large" color="secondary" class="graduacao-hero__subtitle">
            {{ heroData.subtitle }}
          </Text>
        </Container>
      </div>
    </template>

    <template #content>
      <div class="graduacao-content">
        <div
          v-for="faixa in faixas"
          :key="faixa.id"
          class="faixa-section"
        >
          <div class="faixa-section__header">
            <div
              class="faixa-section__color"
              :style="{ backgroundColor: faixa.cor }"
            ></div>
            <Heading :level="2" class="faixa-section__title">
              {{ faixa.nome }}
            </Heading>
          </div>

          <div
            class="faixa-section__body"
            :class="{ 'faixa-section__body--reverse': faixa.ordem % 2 === 0 }"
          >
            <div class="faixa-section__content">
              <Text size="medium" class="faixa-section__historia">
                {{ faixa.historia }}
              </Text>

              <div v-if="faixa.tempoMinimo" class="faixa-section__info">
                <Text size="small" color="secondary" class="faixa-section__tempo">
                  <strong>Tempo mínimo estimado:</strong> {{ faixa.tempoMinimo }}
                </Text>
              </div>

              <div v-if="faixa.caracteristicas.length > 0" class="faixa-section__caracteristicas">
                <Heading :level="3" class="faixa-section__caracteristicas-title">
                  Características principais:
                </Heading>
                <ul class="faixa-section__lista">
                  <li
                    v-for="(caracteristica, index) in faixa.caracteristicas"
                    :key="index"
                    class="faixa-section__item"
                  >
                    <Text size="medium">{{ caracteristica }}</Text>
                  </li>
                </ul>
              </div>
            </div>

            <div v-if="faixa.imagemSrc" class="faixa-section__image">
              <img
                :src="faixa.imagemSrc"
                :alt="faixa.imagemAlt || faixa.nome"
                class="faixa-image"
              />
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <Footer
        description="Site dedicado ao Jiu Jitsu, conheça a história, busque sobre graduação e encontre a academia mais próxima."
        site-name="BJJ Atlas"
        :quick-links="footerData.quickLinks"
      />
    </template>
  </GraduacaoPageTemplate>
</template>

<script setup lang="ts">
import GraduacaoPageTemplate from "../../components/templates/GraduacaoPageTemplate.vue";
import Header from "../../components/organisms/Header.vue";
import Footer from "../../components/organisms/Footer.vue";
import Container from "../../components/atoms/Container.vue";
import Heading from "../../components/atoms/Heading.vue";
import Text from "../../components/atoms/Text.vue";
import { useGraduacaoContent } from "../../composables/useGraduacaoContent";

const { heroData, faixas, footerData } = useGraduacaoContent();
</script>

<style scoped>
.graduacao-hero {
  padding: 7rem 0 4rem;
  text-align: center;
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
  transition: background 0.3s ease;
}

.dark .graduacao-hero {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
}

.graduacao-hero__title {
  margin-bottom: 1rem;
  color: #d32f2f;
}

.graduacao-hero__subtitle {
  max-width: 600px;
  margin: 0 auto;
}

.graduacao-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
}

.faixa-section {
  margin-bottom: 4rem;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.dark .faixa-section {
  background-color: #2d2d2d;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.faixa-section:hover {
  box-shadow: 0 4px 16px rgba(211, 47, 47, 0.2);
}

.faixa-section__header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f5f5f5;
}

.dark .faixa-section__header {
  border-bottom-color: #404040;
}

.faixa-section__color {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid #d32f2f;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.faixa-section__title {
  color: #d32f2f;
  margin: 0;
}

.faixa-section__body {
  display: flex;
}

.faixa-section__content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.faixa-section__historia {
  line-height: 1.8;
  color: #333333;
}

.dark .faixa-section__historia {
  color: #e0e0e0;
}

.faixa-section__info {
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  border-left: 4px solid #d32f2f;
}

.dark .faixa-section__info {
  background-color: #1a1a1a;
}

.faixa-section__tempo {
  margin: 0;
}

.faixa-section__caracteristicas {
  margin-top: 1rem;
}

.faixa-section__caracteristicas-title {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #d32f2f;
}

.faixa-section__lista {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.faixa-section__item {
  padding-left: 1.5rem;
  position: relative;
}

.faixa-section__item::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #d32f2f;
  font-weight: bold;
}

.faixa-section__image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.faixa-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

@media (min-width: 768px) {
  .faixa-section__body {
    grid-template-columns: 2fr 1fr;
  }

  .faixa-section__body--reverse {
    grid-template-columns: 1fr 2fr;
  }

  .faixa-section__body--reverse .faixa-section__content {
    order: 2;
  }

  .faixa-section__body--reverse .faixa-section__image {
    order: 1;
  }
}

@media (max-width: 768px) {
  .graduacao-hero {
    padding: 4rem 0 3rem;
  }

  .graduacao-content {
    padding: 1rem;
  }

  .faixa-section {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }

  .faixa-section__color {
    width: 50px;
    height: 50px;
  }
}
</style>

