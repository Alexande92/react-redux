export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Headfirst. Design Patterns',
      author: 'Happy Family',
      price: 29,
      coverImage: 'http://loveread.ec/img/photo_books/2317.jpg'
    },
    {
      id: 2,
      title: 'JS. Best textbook',
      author: 'Illya Сantor',
      price: 40,
      coverImage: 'http://loveread.ec/img/photo_books/2317.jpg'
    }
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Someth  bad happened'));
        }
        resolve(this.data);

      }, 1000);
    });
  }
}