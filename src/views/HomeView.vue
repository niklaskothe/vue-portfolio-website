<script setup>
/*
import TheWelcome from '../components/TheWelcome.vue'
*/
import ImageGrid from '../components/ImageGrid.vue'
import Contact from '../components/Contact.vue'
import Hero from '../components/Hero.vue';
import TeaserCards from '../components/TeaserCards.vue';
</script>

<template>
  <main>
    <!--
    <TheWelcome />
    -->
    <section id="section1">
      <Hero />
    </section>

    <section id="section2">
      <h2>Über mich</h2>
        <div contenteditable="true" ref="editableContent">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
          duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
          feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
          delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet.</p>
        </div>
    </section>

    <section id="section3">
      <h2>Meine Projekte</h2>
      <TeaserCards/>
    </section>
    
    <section id="section4">
      <h2>Galerie</h2>
      <ImageGrid />
    </section>
    
    <section id="section5">
      <Contact />
    </section>

  </main>
</template>

<style>
section {
  padding-top: 80px;
}

main :first-child {
  padding-top: 0;
}
</style>