<template>
  <div class="fx_modal position-fixed top-0 h-100" v-if="openModal && content">
    <button class="btn btn-outline-dark text-white" @click="$emit('close-modal')">Close</button>
    <div class="modal-fullscreen">
      <div class="container-xxl">
        <div class="modal-body d-flex justify-content-around flex-wrap g-4">
          <img class="img-fluid" :src="'https://image.tmdb.org/t/p/w780/' + content.backdrop_path" alt="">
          <div class="data_text p-4">
            <h2 class="display-3">{{ content.title }}</h2>
            <p>{{ content.overview }}</p>
          </div>
          <slot></slot>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
  props: {
    content: Object,
    openModal: Boolean
  }
}
</script>

<style lang="scss" scoped>
/* Modal */

.fx_modal {
  background-color: rgba(0, 0, 0, 0.921);
  color:white;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  img {
    flex-grow: 1;
  }
}
</style>