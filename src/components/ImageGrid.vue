<template>
  <div class="column">
    <div v-for="(group, groupIndex) in imageGroups" :key="groupIndex" class="row">
      <div v-for="(image, index) in group" :key="image.id" class="image-container" @mouseover="highlightImage(image.id)">
        <img :src="image.src" :alt="image.alt" />
        <div v-if="isHovered === image.id" class="overlay">
          <span @click="deleteImage(image.id)" class="delete-icon">X</span>
        </div>
      </div>
    </div>
    <div class="row">
      <input type="file" id="fileInput" @change="addNewImage" style="display: none;" />
      <label for="fileInput" class="custom-file-upload">
        <span style="font-weight: bold;">(+)HINZUFÜGEN</span>
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        images: [
          { id: 1, src: "/img/arbeit.jpg" },
          { id: 2, src: "/img/baum.jpg" },
          { id: 3, src: "/img/strasse.jpg" },
          { id: 4, src: "/img/eishoehle.jpg" },
          { id: 5, src: "/img/fastfood.jpg" },
          { id: 6, src: "/img/eule.jpg" },
          { id: 7, src: "/img/lightroom.jpg" },
          { id: 8, src: "/img/kamera.jpg" },
          { id: 9, src: "/img/leuchtreklame.jpg" },
          { id: 10, src: "/img/schachbrett.jpg" },
          { id: 11, src: "/img/pinsel.jpg" },
          { id: 12, src: "/img/mischpult.jpg" },
          { id: 13, src: "/img/drohne.jpg" },
          { id: 14, src: "/img/glasfaser.jpg" }
        ],
        imageIdCounter: 14, // Zählervariable für eindeutige IDs
        isHovered: null
      };
    },
    computed: {
      imageGroups() {
        return this.calculateImageGroups();
      }
    },
    methods: {
      calculateImageGroups() {
        const groups = [];
        const totalImages = this.images.length;
        const rows = 4;
        const groupSize = Math.ceil(totalImages / rows);

        for (let i = 0; i < rows; i++) {
          groups.push(this.images.slice(i * groupSize, (i + 1) * groupSize));
        }
        return groups;
      },
      highlightImage(imageId) {
        this.isHovered = imageId;
      },
      deleteImage(imageId) {
        const index = this.images.findIndex(image => image.id === imageId);
          if (index !== -1) {
            this.images.splice(index, 1);
            this.isHovered = null;
            this.updateImageGroups();
          }
      },
      addNewImage(event) {
        const fileList = event.target.files;
        if (fileList.length === 0) return;

        const fileReader = new FileReader();
        fileReader.onload = () => {
          const imageURL = fileReader.result;
          this.imageIdCounter++;
          const newImage = {
            id: this.imageIdCounter,
            src: imageURL,
            alt: "Neues Bild" 
          };
          this.images.push(newImage);
          this.updateImageGroups();
        };
        fileReader.readAsDataURL(fileList[0]);
      },
      updateImageGroups() {
        this.$nextTick(() => {
          this.images.sort((a, b) => a.src.localeCompare(b.src));
          this.$forceUpdate();
        });
      }
    }
  };
</script>

<style>
.column {
display: flex;
flex-wrap: wrap;
padding: 0 4px;
}

.row {
box-sizing: border-box;
padding: 0 4px;
flex: 25%;
max-width: 25%;
}

.image-container {
position: relative;
margin-top: 8px;
width: 100%;
overflow: hidden;
}

.image-container img {
margin-top: 8px;
vertical-align: middle;
width: 100%;
}

.overlay {
position: absolute;
top: 7px;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
opacity: 0;
transition: opacity 0.3s ease;
}

.image-container:hover .overlay {
opacity: 1;
}

.delete-icon {
color: white;
font-size: 24px;
cursor: pointer;
position: absolute;
top: 5px;
right: 15px;
}

.custom-file-upload {
display: inline-block;
padding: 12px 20px;
font-size: 16px;
color: black;
background-color: #00916E;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s ease;
margin-top: 16px;
}

.custom-file-upload:hover {
background-color: #00916fa5;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .row {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .row {
    flex: 100%;
    max-width: 100%;
  }
}
</style>