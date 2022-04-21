
/* 
MILESTONE 1
Creiamo un oggetto Movie, con le seguenti proprieta: 
- images che conterra una lista di immagini
- title che conterra il titolo del film
- category che conterra la categoria del film
- length che conterra la lunghezza del film in minuti


MILESTONE 2
Creare il markup ed utilizzare le direttive vue per stampare a schermo il film in una card. Mostrando la prima immagine, il titolo, la categoria e la lunghezza

MILESTONE 3
Aggiungiamo due frecce al markup e utilizziamole per rendere dimanico lo slider. 
Al click sulla freccia di destra scorriamo all'immagine successiva
Al click sulla freccia di sinistra scorriamo all'immagine precedente


MILESTONE 4
Aggiungiamo le miniature delle altre immagini presenti per il film. Evidenziamo l'immagine selezionata, magari con un border. Quando clicchiamo sulle frecce la miniatura evidenziata cambia.

*/

const app = new Vue(
  {
    el: '#app',
    data: {
      activeImage: 0,
      movie: {
        images: [
          'https://www.themoviedb.org/t/p/original/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg',
          'https://www.themoviedb.org/t/p/original/1MJNcPZy46hIy2CmSqOeru0yr5C.jpg',
          'https://www.themoviedb.org/t/p/original/aq6LgeE7aCgdzw3hJsTLrKGIZj2.jpg',
          'https://www.themoviedb.org/t/p/original/5mkTqrc2AU6XFStz9XOBDPBBJMb.jpg',
          'https://www.themoviedb.org/t/p/original/h9fHHOEZTXbT7qbUmPai1LTUXj3.jpg'

        ],
        title: 'Venom: Let There Be Carnage',
        category: 'Action',
        length: '120'
      }
    },
    methods: {
      prevImage() {
        console.log('Prev image');
        if (this.activeImage === 0) {
          this.activeImage = this.movie.images.length
        }
        this.activeImage--

      },
      nextImage() {
        console.log('Next image');
        this.activeImage++
        console.log(this.activeImage);
        if (this.activeImage === this.movie.images.length) {
          this.activeImage = 0;
        }
      }
    }
  }
)
/* 
const movie = {

  images: []

}
const activeImage = 0
movie.images[activeImage] */