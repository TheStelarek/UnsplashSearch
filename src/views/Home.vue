<template>
  <div class="home">
    <form @submit.prevent="fetchPhotos" class="search-form">
      <input v-model="query" type="text" class="search-form-input" />
      <select v-model="perPage" class="search-form-select">
        <option v-for="number in numbers" :key="number">{{ number }}</option>
      </select>
      <BaseButton type="submit">Submit</BaseButton>
    </form>
    <h1 v-if="loading">Loading photos</h1>

    <masonry
      :cols="{ default: 5, 2400: 3, 1250: 2, 830: 1 }"
      :gutter="{ default: '20px', 1000: '10px' }"
      class="masonry-container"
    >
      <PhotoCard v-for="photo in photos" :key="photo.id" :photo="photo" />
    </masonry>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PhotoCard from '../components/PhotoCard'
export default {
  name: 'Home',
  components: {
    PhotoCard
  },

  data() {
    return {
      query: '',
      perPage: 10,
      loading: false
    }
  },
  computed: {
    ...mapState(['photos', 'numbers'])
  },
  methods: {
    fetchPhotos() {
      this.loading = true
      this.$store
        .dispatch('fetchPhotos', { query: this.query, perPage: this.perPage })
        .then(() => {
          this.query = ''
        })
        .catch(() => {})
      this.loading = false
    }
  }
}
</script>

<style lang="scss">
.search-form {
  display: flex;
  justify-content: center;
  align-items: center;

  &-input {
    max-width: 320px;
    width: 100%;
    font-family: 'Montserrat', 'Trebuchet MS', Helvetica, sans-serif;
    padding: 0.6rem 1.5rem;
    border-radius: 0.2rem;
    border: none;
    border-bottom: 2px solid #42b983;
    transition: all 0.3s;
  }
  @media (min-width: 1500px) {
    &-input {
      max-width: 500px;
    }
  }
  @media (min-width: 2500px) {
    &-input {
      max-width: 1000px;
    }
  }

  &-select {
    padding: 0.6rem 1.5rem;
    border: none;
    box-shadow: none;
    font-size: 1.1rem;
    background: transparent;
  }
}
.masonry-container {
  margin-top: 2rem;
}
</style>
