<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>


  <div
    @dragover.prevent
    @dragenter.prevent
    @drop="handleDrop"
    class="drop-area"
  >
    <p>Drag & Drop Bereich</p>
  </div>
  <div class="image-list">
    <div v-for="(file, index) in fileList" :key="index" class="image-item">
      <img :src="file.url" :alt="file.name" class="uploaded-image" />
      <p>{{ file.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
    };
  },
  methods: {
    handleDrop(event) {
      event.preventDefault();
      const files = event.dataTransfer.files;
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.fileList.push({
            name: files[i].name,
            url: e.target.result,
          });
        };
        reader.readAsDataURL(files[i]);
      }
    },
  },
};
</script>

<style>
.drop-area {
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  cursor: pointer;
}

.image-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.image-item {
  margin-right: 20px;
  margin-bottom: 20px;
}

.uploaded-image {
  width: 200px;
  height: auto;
}
</style>