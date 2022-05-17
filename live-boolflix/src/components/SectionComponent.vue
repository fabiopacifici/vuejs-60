<template>
<section>
  <div class="section_heading d-flex align-items-center justify-content-between">
    <h2 class="fx_text_primary py-4">
      {{sectionTitle.toUpperCase()}}
    </h2>
    <slot name="filter"></slot>
  </div>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-6 g-4">
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