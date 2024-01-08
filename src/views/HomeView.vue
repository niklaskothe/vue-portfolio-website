<script setup>

import { ref } from 'vue';
import ImageGrid from '../components/ImageGrid.vue'
import Contact from '../components/Contact.vue'
import Hero from '../components/Hero.vue';
import TeaserCards from '../components/TeaserCards.vue';
import Skills from '../components/Skills.vue';
import Model from '../components/3DModel.vue';
import AboutMe from '../components/AboutMe.vue'; 


const sections = ref([
  { uniqueId: 'section1', component: Hero, props: {} },
  { uniqueId: 'section2', component: AboutMe, props: {title: 'Über mich'} },
  { uniqueId: 'section3', component: TeaserCards, props: {title: 'Meine Projekte'} },
  { uniqueId: 'section4', component: Skills, props: {title: 'Meine Skills'} },
  { uniqueId: 'section5', component: ImageGrid, props: {title: 'Galerie'} },
  { uniqueId: 'section6', component: Model, props: {title: '3D-Model'} },
  { uniqueId: 'section7', component: Contact, props: {} },
]);

const availableSections = ref([
  { id: 'section1', component: Hero, props: { title: 'Startbild' } },
  { id: 'section2', component: AboutMe, props: { title: 'Über mich' } },
  { id: 'section3', component: TeaserCards, props: { title: 'Meine Projekte' } },
  { id: 'section4', component: Skills, props: { title: 'Meine Skills' } },
  { id: 'section5', component: ImageGrid, props: { title: 'Galerie' } },
  { id: 'section6', component: Model, props: { title: '3D-Model' } },
  { id: 'section7', component: Contact, props: { title: 'Kontaktformular' } },
]);

let selectedSection = ref('section1'); // Standardwert im DropDown-Menü

function generateUniqueId() {
  return `section_${sections.value.length + 1}`;
}

function toggleHover(id, isHovered) {
  const section = sections.value.find(section => section.uniqueId === id);
  if (section) {
    section.hovered = isHovered;
  }
}

function addSelectedSection(index) {
  index = index -1; //möchte neue Komponente oben drüber platzieren
  const sectionToAdd = availableSections.value.find(section => section.id === selectedSection.value);
  const uniqueId = generateUniqueId();
  if (sectionToAdd) {
    if (sectionToAdd.id === availableSections.value[0].id || sectionToAdd.id === availableSections.value[availableSections.value.length - 1].id) {
      sections.value.splice(index + 1, 0, { id: sectionToAdd.id, component: sectionToAdd.component, props: {}, uniqueId });
    } else {
      sections.value.splice(index + 1, 0, { ...sectionToAdd, uniqueId });
    }
  }
}

function removeSection(uniqueId) {
  const index = sections.value.findIndex(section => section.uniqueId === uniqueId);
  if (index !== -1) {
    sections.value.splice(index, 1);
  }
}

</script>



<template>
  <main>
    <section
      v-for="(section, index) in sections"
      :key="section.uniqueId"
      :class="['section-container', {'first-section': section.uniqueId === 'section1'}]"
      :id="section.uniqueId"
      @mouseenter="toggleHover(section.uniqueId, true)"
      @mouseleave="toggleHover(section.uniqueId, false)"
    >
      <h2>{{ section.props.title }}</h2>
      <component :is="section.component" v-bind="section.props" />
      <div class="actions" v-if="section.hovered">
        <div class="actions-inner">
          <select v-model="selectedSection" class="select-section">
            <option v-for="(section, index) in availableSections" :key="section.id" :value="section.id">
              {{ section.props.title }}
            </option>
          </select>
          <button @click="addSelectedSection(index)" class="add-section">+</button>
          <button class="remove-button" @click="removeSection(section.uniqueId)">X</button>
        </div>
      </div>
    </section>
  </main>
</template>


<style>

section {
  padding-top: 80px;
  position: relative; 
}

.first-section {
  padding-top: 0;
}

.actions {
  display: block;
  position: absolute;
  top: 64px;
  right: 8px;
}

.actions-inner {
  display: flex;
  gap: 10px; 
  padding: 5px; 
  border-radius: 4px; 
}

.select-section {
  margin-right: -8px;
  margin-top: 8px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: #fff;
  background-color: var(--color-highlight);
  transition: background-color 0.3s ease;
  height: 30px;
  display: inline-flex;
}

.select-section:hover, .select-section:focus{
  background-color: rgba(0, 0, 0, 0.2);
  outline: none;
}


.add-section,
.remove-button {
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-color: var(--color-highlight);
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  display: inline-flex;
}

.add-section {
  font-size: 24px;
}

.remove-button {
  font-size: 18px;
 }

.add-section:hover, .remove-button:hover {
  background-color: rgba(0, 0, 0, 0.2);
}


</style>

