const app = new Vue({
  el: '#app',
  data: {
    intId: null,
    active: 0,
    posts: [{
        image: 'https://www.themoviedb.org/t/p/original/rE1AOt56R4vrvVKpWrQ4wn7DYyg.jpg',
        title: 'Mandalorian',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
      },
      {
        image: 'https://www.themoviedb.org/t/p/original/sjx6zjQI2dLGtEL0HGWsnq6UyLU.jpg',
        title: 'The book of boba fett',
        text: 'Lorem ipsum.',
      },
      {
        image: 'https://www.themoviedb.org/t/p/original/ilJpKKQZ7WGCnSTSRsZov9CIrvJ.jpg',
        title: 'Picard',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
      {
        image: 'https://www.themoviedb.org/t/p/original/6Ys6koNajP5ld9EIMfOSQrRquki.jpg',
        title: 'The Good Doctor',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
      },
      {
        image: 'https://www.themoviedb.org/t/p/original/1uegR4uAxRxiMyX4nQnpzbXhrTw.jpg',
        title: 'Moon knite',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
      }
    ]
  },
  methods: {
    prevImage() {
      console.log('prev');
      if (this.active === 0) {
        this.active = this.posts.length
      }
      this.active--
    },
    nextImage() {
      console.log('next');
      this.active++
      if (this.active === this.posts.length) {
        this.active = 0
      }
    },
    changeImage(i) {
      console.log(i, 'Img');
      this.active = i
    },
    pauseSlider() {
      console.log('pause');
      clearInterval(this.intId)
    },
    startSlider() {
      console.log('start');
      this.autoplay()
    },
    autoplay() {
      this.intId = setInterval(this.nextImage, 3000)
    }
  },
  mounted() {
    this.autoplay()
  }
})
