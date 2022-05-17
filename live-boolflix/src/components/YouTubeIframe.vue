<template>
  <iframe :width="frameWidth" :height="frameHeight" :src="`https://www.youtube.com/embed/${videoId}`"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
</template>

<script>
export default{
  name: 'YouTubeIframe',
  props: {
    videoId: String,
    frameWidth: String,
    frameHeight: String
  }
}
</script>