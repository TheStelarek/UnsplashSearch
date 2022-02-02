<template>
  <div class="container" v-if="photo">
    <img :src="photo.urls.small" class="photo-container" />
    <div class="details">
      <p v-if="photo.description" class="description">
        Description: {{ photo.description }}
      </p>
      <p>Author: {{ photo.user.username }}</p>
      <p>Likes: {{ photo.likes }}</p>
      <div class="links">
        <a :href="photo.links.download" class="button">Download</a>
        <a :href="photo.user.links.html" class="button">Profile author</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: ['id'],
  created() {
    this.fetchPhoto(this.id)
  },
  computed: mapState({
    photo: state => state.photo
  }),
  methods: mapActions(['fetchPhoto'])
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.details {
  display: flex;
  flex-direction: column;

  margin: 0 40px;
}
.links {
  margin-top: 60px;
}
.links a {
  margin: 0 20px;
}
.description {
  max-width: 500px;
}
@media (max-width: 900px) {
  .container {
    flex-direction: column;
  }
  .links {
    margin-top: 20px;
  }
}

@media (max-width: 430px) {
  .links {
    display: flex;
    flex-direction: column;
  }
  .links a {
    margin-top: 5px;
  }
}
</style>
