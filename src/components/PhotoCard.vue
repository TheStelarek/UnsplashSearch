<template>
  <router-link :to="{ name: 'photo-show', params: { id: photo.id } }">
    <img :src="photo.urls.small" class="photo-container" />
  </router-link>
</template>

<script>
export default {
  props: {
    photo: Object
  }
}
</script>

<style>
@media (max-width: 600px) {
  .photo-container {
    max-width: 350px;
    width: 100%;
  }
}

@media (max-width: 400px) {
  .photo-container {
    max-width: 250px;
    width: 100%;
  }
}
</style>
