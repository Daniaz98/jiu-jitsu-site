<template>
  <GraduacaoPageTemplate>
    <template #header>
      <Header />
    </template>

    <template #hero>
      <div class="bg-[linear-gradient(135deg,#ffffff_0%,#f5f5f5_100%)] py-28 text-center transition-[background] duration-300 dark:bg-[linear-gradient(135deg,#1a1a1a_0%,#2d2d2d_100%)] max-md:py-16">
        <Container size="medium">
          <Heading :level="1" class="mb-4 text-primary">
            {{ heroData.title }}
          </Heading>
          <Text size="large" color="secondary" class="mx-auto max-w-[600px]">
            {{ heroData.subtitle }}
          </Text>
        </Container>
      </div>
    </template>

    <template #content>
      <div class="mx-auto max-w-[1200px] py-8 max-md:p-4">
        <div
          v-for="faixa in faixas"
          :key="faixa.id"
          class="mb-16 rounded-xl bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(211,47,47,0.2)] dark:bg-surface-dark-muted dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] max-md:mb-8 max-md:p-6"
        >
          <div class="mb-8 flex items-center gap-4 border-b-2 border-surface-muted pb-4 dark:border-[#404040]">
            <div
              class="h-[60px] w-[60px] rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.2)] max-md:h-[50px] max-md:w-[50px]"
              :style="{ backgroundColor: faixa.cor }"
            />
            <Heading :level="2" class="m-0 text-primary">
              {{ faixa.nome }}
            </Heading>
          </div>

          <div
            class="flex flex-col gap-6 md:flex-row"
            :class="faixa.ordem % 2 === 0 ? 'md:flex-row-reverse' : ''"
          >
            <div class="flex flex-1 flex-col gap-6">
              <Text size="medium" class="leading-[1.8] text-[#333] dark:text-[#e0e0e0]">
                {{ faixa.historia }}
              </Text>

              <div
                v-if="faixa.tempoMinimo"
                class="rounded-lg border-l-4 border-primary bg-[#f9f9f9] p-4 dark:bg-surface-dark"
              >
                <Text size="small" color="secondary" class="m-0">
                  <strong>Tempo mínimo estimado:</strong> {{ faixa.tempoMinimo }}
                </Text>
              </div>

              <div v-if="faixa.caracteristicas.length > 0" class="mt-4">
                <Heading :level="3" class="mb-4 text-xl text-primary">
                  Características principais:
                </Heading>
                <ul class="m-0 flex list-none flex-col gap-3 p-0">
                  <li
                    v-for="(caracteristica, index) in faixa.caracteristicas"
                    :key="index"
                    class="relative pl-6 before:absolute before:left-0 before:font-bold before:text-primary before:content-['▸']"
                  >
                    <Text size="medium">{{ caracteristica }}</Text>
                  </li>
                </ul>
              </div>
            </div>

            <div v-if="faixa.imagemSrc" class="flex items-center justify-center md:w-1/3">
              <img
                :src="faixa.imagemSrc"
                :alt="faixa.imagemAlt || faixa.nome"
                class="h-auto max-w-full rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
              >
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <Footer />
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

const { heroData, faixas } = useGraduacaoContent();
</script>
