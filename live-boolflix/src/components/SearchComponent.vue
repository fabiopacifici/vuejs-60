<template>

   <form @submit.prevent="$emit('submitSearch')">
        <div class="form-group d-flex">
           <input type="search" 
           :value="searchText"
           @input="$emit('input', $event.target.value)" 
           class="form-control" placeholder="Start searching">
          <button class="btn text-white" :disabled="disableButton">
            <font-awesome-icon icon="fa-solid fa-search"></font-awesome-icon>
          </button>
        </div>
         
        </form>
</template>

<script>

export default {
  name: 'SearchComponent',
  props: {searchText: String, disableButton: Boolean}
}
</script>