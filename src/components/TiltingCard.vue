<template>
    <div class="tiltingCard">
        
        <div class="mousePositionTracker">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        
    </div>
</template>

<style>
.tiltingCard {
    --perspective: 500px;
    --rotateX: 0;
    --rotateY: 0;
    --angle: 15deg;
    
    height: 50vh;
    width: 100%;
  
    position: relative;
    display: grid;
    place-content: center;
    text-align: center;
    box-shadow: 0 0 8px gray;
    padding: 2rem;
    background-image: url(../../public/img/wandern.jpg);
    background-size: cover;
    background-position: bottom center;
    /*aspect-ratio: 1 / 2;*/
    transform: perspective(var(--perspective)) rotateX(var(--rotateX))
      rotateY(var(--rotateY));
    transition: transform 350ms ease;
  }
  
  
  .mousePositionTracker {
    position:absolute;
    inset:0;
  }
  
  .mousePositionTracker > div {
    position: absolute;
    width: calc(100% / 3);
    height: calc(100% / 3);
    z-index: 2;
  }
  
  .tiltingCard:has(.mousePositionTracker > div:nth-child(1):hover) {
    --rotateX: var(--angle);
    --rotateY: calc(var(--angle) * -1);
  }
  
  .tiltingCard:has(.mousePositionTracker > div:nth-child(2):hover) {
    --rotateX: var(--angle);
  }
  
  .tiltingCard:has(.mousePositionTracker > div:nth-child(3):hover) {
    --rotateX: var(--angle);
    --rotateY: var(--angle);
  }
  
  .tiltingCard:has(.mousePositionTracker > div:nth-child(4):hover) {
    --rotateY: calc(var(--angle) * -1);
  }
  
  .tiltingCard:has(.mousePositionTracker > div:nth-child(6):hover) {
    --rotateY: var(--angle);
  }
  
  .tiltingCard:has(.mousePositionTracker > div:nth-child(7):hover) {
    --rotateX: calc(var(--angle) * -1);
    --rotateY: calc(var(--angle) * -1);
  }
  
  .tiltingCard:has(.mousePositionTracker > div:nth-child(8):hover) {
    --rotateX: calc(var(--angle) * -1);
  }
  
  .tiltingCard:has(.mousePositionTracker > div:nth-child(9):hover) {
    --rotateX: calc(var(--angle) * -1);
    --rotateY: var(--angle);
  }
  
  /* 1st 4th 7th */
  .mousePositionTracker > div:nth-of-type(3n - 2) {
    left:0;
  }
  
  /* 2nd 5th 8th */
  .mousePositionTracker > div:nth-of-type(3n - 1) {
    left:calc(100% / 3)
  }
  
  /* 3rd 6th 9th */
  .mousePositionTracker > div:nth-of-type(3n) {
    right:0;
  }
  
  /* 1-3 */
  .mousePositionTracker > div:nth-child(n + 1):nth-child(-n + 3) {
    top:0;
  }
  
  /* 4-6 */
  .mousePositionTracker > div:nth-child(n + 4):nth-child(-n + 6) {
    top:calc(100% / 3);
  }
  
  /* 7-9 */
  .mousePositionTracker > div:nth-child(n + 7):nth-child(-n + 9) {
    bottom:0;
  }
</style>