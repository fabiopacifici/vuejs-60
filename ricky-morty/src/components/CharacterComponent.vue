<template>
  <div class="col-3" >
    <img :src="character.image" alt="" />
    <h2>{{ character.name }}</h2>
    <div>{{ character.origin }}</div>
    <div>{{ character.species }}</div>
  </div>
</template>

<script>
export default {
    name: 'CharacterComponent',
    props : {
        character: Object
    }
};
</script>

<style>
</style>