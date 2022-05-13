<template>
<section>
  <h2 class="fx_text_primary py-4">{{sectionTitle.toUpperCase()}}</h2>
  <div class="row row-cols-4 g-2">
    <slot></slot>
  </div>
</section>
</template>

<script>
export default{
  name: 'SectionTitle',
  props: {
    sectionTitle: String
  }
}

</script>