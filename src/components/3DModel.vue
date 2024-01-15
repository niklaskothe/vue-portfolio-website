<script>
import {
  AmbientLight,
  Camera,
  GltfModel,
  Renderer,
  Scene,
} from 'troisjs';

export default {
  components: {
    AmbientLight,
    Camera,
    GltfModel,
    Renderer,
    Scene,
  },
  data() {
    return {
      modelSrc: '/../../../model/Tree1.glb', // Start mit Tree1.glb
      modelKey: 0,
      exampleModels: [
        { name: 'Tree1.glb', path: '/../../../model/Tree1.glb' },
        { name: 'Rocks1.glb', path: '/../../../model/Rocks1.glb' },
        { name: 'Bush1.glb', path: '/../../../model/Bush1.glb' },
      ],
      currentSlide: 0, // Index der aktuellen Slideshow-Datei
      slideshowInterval: null, // Variable für die Slideshow-Interval-Funktion
    };
  },
  created() {
    // Starte die Slideshow 
    this.startSlideshow();
  },
  beforeDestroy() {
    // Beende die Slideshow-Interval-Funktion vor der Zerstörung der Komponente
    clearInterval(this.slideshowInterval);
  },
  methods: {
    handleFileChange(event) {
      // Beende das Slideshow-Intervall
      clearInterval(this.slideshowInterval);

      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = e.target.result;
          this.modelSrc = URL.createObjectURL(new Blob([data]));
          this.modelKey += 1; // Komponentenschlüssel aktualisieren, um die Änderung zu erzwingen
        };
        reader.readAsArrayBuffer(file);
      }
    },
    selectExample(index) {
      this.modelSrc = this.exampleModels[index].path;
      this.currentSlide = index;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.exampleModels.length) % this.exampleModels.length;
      this.modelSrc = this.exampleModels[this.currentSlide].path;
      this.modelKey += 1; // aktualisiere den modelKey
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.exampleModels.length;
      this.modelSrc = this.exampleModels[this.currentSlide].path;
      this.modelKey += 1; // aktualisiere den modelKey
    },
    startSlideshow() {
      // Starte die Slideshow in einer Endlosschleife
      this.slideshowInterval = setInterval(() => {
        this.nextSlide();
      }, 7000);
    },
  },
};
</script>

<template>
  <div class="object">
    <Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true }" resize>
      <Camera :position="{ x: 1, y: 1, z: -2 }" />
      <Scene ref="scene" background="#f2f2f2">
        <AmbientLight></AmbientLight>
        <DirectionalLight :position="{ x: 0, y: 200, z: 100 }" />
        <GltfModel :key="modelKey" v-if="modelSrc" :src="modelSrc" />
      </Scene>
    </Renderer>
    <div>
      <!-- Slideshow-Steuerung -->
      <div class="arrow arrow-left" @click="prevSlide">&#60;</div>
      <div class="arrow arrow-right" @click="nextSlide">&#62;</div>
    </div>
  </div>
  <div>
    <!-- Sichtbares benutzerdefiniertes Eingabefeld -->
    <label class="customFileInput">EIGENES OBJEKT (+)
      <!-- Verstecktes Standard-Datei-Eingabefeld -->
      <input type="file" id="fileInput" @change="handleFileChange" accept=".glb" class="fileInput" style="display:none" />
    </label>
  </div>
</template>

<style>
.object {
  height: 280px;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-20%);
  font-size: 60px;
  color: black;
  cursor: pointer;
}

.arrow:hover {
  font-size: 80px;
  transform: translateY(-30%);
  color: lightgrey;
}

.arrow-left {
  left: 20px;
}

.arrow-right {
  right: 20px;
}

.fileInput {
  padding: 10px 15px;
  font-weight: bold;
}

.customFileInput {
  /* Stile für das sichtbare benutzerdefinierte Eingabefeld */
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: var(--color-highlight);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.customFileInput:hover {
  background-color: rgb(0, 0, 0, 0.2);
}
</style>

