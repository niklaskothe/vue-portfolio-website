<!--<template>
    <div class="row">
        <div class="column">
            <img src="../../public/img/arbeit.jpg">
            <img src="../../public/img/baum.jpg">
            <img src="../../public/img/strasse.jpg">
            <img src="../../public/img/eishoehle.jpg">
        </div>
        <div class="column">
            <img src="../../public/img/fastfood.jpg">
            <img src="../../public/img/eule.jpg">
            <img src="../../public/img/lightroom.jpg">
        </div>
        <div class="column">
            <img src="../../public/img/leuchtreklame.jpg">
            <img src="../../public/img/kamera.jpg">
            <img src="../../public/img/schachbrett.jpg">
            <img src="../../public/img/pinsel.jpg">
        </div>
        <div class="column">
            <img src="../../public/img/mischpult.jpg">
            <img src="../../public/img/drohne.jpg">
            <img src="../../public/img/glasfaser.jpg">
        </div>
    </div>
</template>  -->

<template>
    <div class="row">
        <div v-for="(image, index) in images" :key="index" class="column">
            <div class="image-container"
                @mouseover="highlightImage(index)"
                
            >
                <img :src="image.src" :alt="'Image ' + (index + 1)" />
                <div v-if="isHovered === index" class="overlay">
                    <span @click="deleteImage(index)" class="delete-icon">X</span>
                </div>
            </div>
        </div>
      <div class="column">
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
          { src: "/img/arbeit.jpg" },
          { src: "/img/baum.jpg" },
          { src: "/img/strasse.jpg" },
          { src: "/img/eishoehle.jpg" },
          { src: "/img/fastfood.jpg" },
          { src: "/img/eule.jpg" },
          { src: "/img/lightroom.jpg" },
          { src: "/img/leuchtreklame.jpg" },
          { src: "/img/kamera.jpg" },
          { src: "/img/schachbrett.jpg" },
          { src: "/img/pinsel.jpg" },
          { src: "/img/mischpult.jpg" },
          { src: "/img/drohne.jpg" },
          { src: "/img/glasfaser.jpg" }
        ],
        isHovered: null
      };
    },
    methods: {
      highlightImage(index) {
        this.isHovered = index;
      },
      deleteImage(index) {
        this.images.splice(index, 1);
        this.isHovered = null;
      },
      addNewImage(event) {
        const fileList = event.target.files;
        if (fileList.length === 0) return;

        const fileReader = new FileReader();
        fileReader.onload = () => {
            const imageURL = fileReader.result;
            this.images.push({ src: imageURL });
        };
        fileReader.readAsDataURL(fileList[0]);
      },
    }
  };
  </script>

  
<style>



.row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
    flex: 25%;
    max-width: 25%; 
    padding: 0 4px;
}

.column img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
}


.image-container {
  position: relative;
  margin-top: 8px;
  width: 100%;
  overflow: hidden;
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
  /*hier unten drunter weglassen, für "x" in der Mitte*/
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
    .column {
        flex: 50%;
        max-width: 50%;
    }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
    .column {
        flex: 100%;
        max-width: 100%;
    }
}
</style>