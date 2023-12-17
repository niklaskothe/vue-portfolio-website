<template>
  <Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true }" resize>
    <Camera :position="{ x: 1, y: 1, z: -2 }" />
    <Scene ref="scene" background="#f2f2f2">
      <AmbientLight></AmbientLight>
      <DirectionalLight
        :position="{ x: 0, y: 200, z: 100 }"
      />
      <GltfModel src="/../../../public/Tree1.glb" />
    </Scene>
  </Renderer>
</template>

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
};
</script>