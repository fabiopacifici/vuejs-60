<template>
  <form @change.prevent="$emit('updateGenreSelection', type, selection)">
    <!-- <label :for="`genre-${type}`" class="text-secondary">Filter Movies by Genre</label> -->
    <select :id="`genre-${type}`" class="d-inline-block"
    :value="selection"
    @input="$emit('input', $event.target.value)">
      <option value="">All {{type}} genres</option>
      <option :value="genre.id" v-for="genre in genreList" :key="genre.id">
        {{ genre.name }}
      </option>
    </select>
  </form>
</template>
<script>
export default {
  name: 'SelectFilter',
  props: {
    genreList: Array,
    selection: String,
    type: String
  },
}
</script>

<style lang="scss" scoped>
select {
  padding: 0.5rem;
  border-radius: 0.5rem;
}
</style>