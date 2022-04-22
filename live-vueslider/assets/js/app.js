const app = new Vue({
  el: '#app',
  data: {
    sliderTimerId: null,
    active: 0,
    posts: [{
        image: 'https://www.themoviedb.org/t/p/original/rE1AOt56R4vrvVKpWrQ4wn7DYyg.jpg',
        title: 'Mandalorian',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis,  magnam dolores dolorum corporis.'
      },
      {
        image: 'https://www.themoviedb.org/t/p/original/sjx6zjQI2dLGtEL0HGWsnq6UyLU.jpg',
        title: 'The book of bobba fett',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis,  magnam dolores dolorum corporis.'
      },
      {
        image: 'https://www.themoviedb.org/t/p/original/ilJpKKQZ7WGCnSTSRsZov9CIrvJ.jpg',
        title: 'Picard',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis,  magnam dolores dolorum corporis.'
      },
      {
        image: 'https://www.themoviedb.org/t/p/original/6Ys6koNajP5ld9EIMfOSQrRquki.jpg',
        title: 'The good doctor',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis,  magnam dolores dolorum corporis.'
      },
      {
        image: 'https://www.themoviedb.org/t/p/original/1uegR4uAxRxiMyX4nQnpzbXhrTw.jpg',
        title: 'The moon knight',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis,  magnam dolores dolorum corporis.'
      },


    ]
  },
  methods: {
    prevImage() {
      console.log('Prev image');
      if (this.active === 0) {
        this.active = this.posts.length;
      }
      this.active--;
    },
    nextImage() {
      console.log('Next Image');
      this.active++;
      if (this.active === this.posts.length) {
        this.active = 0;
      }
    },
    changeImage(index) {
      console.log('change this image', index);
      this.active = index

    },
    pauseSlider() {
      console.log('Pause');
      clearInterval(this.sliderTimerId)
    },
    autoplay() {
      console.log('Start');
      this.sliderTimerId = setInterval(this.nextImage, 3000)
    }

  },
  mounted() {
    console.log('Mounted');
    this.autoplay()
  }
})
/* console.log(app.$data);
console.log(app._data); */
