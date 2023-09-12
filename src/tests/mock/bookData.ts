import GoogleBook from 'src/types/book';

export const fullBook: GoogleBook = {
  kind: 'books#volume',
  id: 'yZuUDwAAQBAJ',
  etag: 'rDqw6IKnjVI',
  selfLink: 'https://www.googleapis.com/books/v1/volumes/yZuUDwAAQBAJ',
  volumeInfo: {
    title: 'Romantic call',
    authors: ['Natacha Pilorge'],
    publisher: 'Editions Elixyria',
    publishedDate: '2019-04-24',
    description:
      'Romance contemporaine - 310 pages Il suffit parfois de peu de chose pour que votre vie change radicalement. Une erreur de numéro et l’existence de Jo, serveuse dans un pub réputé de la ville, va emprunter une route insolite. Jaylan, ex-chanteur dans un petit groupe, après plusieurs années d’absence, décide de remonter sur scène. Entre eux va s’installer un jeu de séduction par téléphone interposé. Elle est envoûtée par la voix de cet inconnu, il est charmé par sa fraîcheur de vivre. ... jusqu’à ce que leurs chemins se croisent ! Mais comment faire de nouveau confiance lorsque l’on a été maintes fois déçu ?',
    industryIdentifiers: [
      {
        type: 'ISBN_13',
        identifier: '9782379610554',
      },
      {
        type: 'ISBN_10',
        identifier: '237961055X',
      },
    ],
    readingModes: {
      text: true,
      image: true,
    },
    pageCount: 328,
    printType: 'BOOK',
    categories: ['Fiction'],
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: true,
    contentVersion: '1.6.6.0.preview.3',
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false,
    },
    imageLinks: {
      smallThumbnail:
        'http://books.google.com/books/content?id=yZuUDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      thumbnail:
        'http://books.google.com/books/content?id=yZuUDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
    language: 'fr',
    previewLink:
      'http://books.google.fr/books?id=yZuUDwAAQBAJ&pg=PP1&dq=romantic&hl=&cd=4&source=gbs_api',
    infoLink: 'https://play.google.com/store/books/details?id=yZuUDwAAQBAJ&source=gbs_api',
    canonicalVolumeLink: 'https://play.google.com/store/books/details?id=yZuUDwAAQBAJ',
  },
  saleInfo: {
    country: 'FR',
    saleability: 'FOR_SALE',
    isEbook: true,
    listPrice: {
      amount: 5.99,
      currencyCode: 'EUR',
    },
    retailPrice: {
      amount: 5.99,
      currencyCode: 'EUR',
    },
    buyLink:
      'https://play.google.com/store/books/details?id=yZuUDwAAQBAJ&rdid=book-yZuUDwAAQBAJ&rdot=1&source=gbs_api',
    offers: [
      {
        finskyOfferType: 1,
        listPrice: { amountInMicros: 5990000, currencyCode: 'EUR' },
        retailPrice: { amountInMicros: 5990000, currencyCode: 'EUR' },
        giftable: true,
      },
    ],
  },
  accessInfo: {
    country: 'FR',
    viewability: 'PARTIAL',
    embeddable: true,
    publicDomain: false,
    textToSpeechPermission: 'ALLOWED',
    epub: {
      isAvailable: true,
      acsTokenLink:
        'http://books.google.fr/books/download/Romantic_call-sample-epub.acsm?id=yZuUDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
    },
    pdf: {
      isAvailable: true,
      acsTokenLink:
        'http://books.google.fr/books/download/Romantic_call-sample-pdf.acsm?id=yZuUDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
    },
    webReaderLink: 'http://play.google.com/books/reader?id=yZuUDwAAQBAJ&hl=&source=gbs_api',
    accessViewStatus: 'SAMPLE',
    quoteSharingAllowed: false,
  },
};

export const notFullBook: GoogleBook = {
  kind: 'books#volume',
  id: 'yZuUDwAAQBAJ',
  etag: 'rDqw6IKnjVI',
  selfLink: 'https://www.googleapis.com/books/v1/volumes/yZuUDwAAQBAJ',
  volumeInfo: {
    title: 'Romantic call',
    authors: [],
    publisher: 'Editions Elixyria',
    publishedDate: '2019-04-24',
    industryIdentifiers: [
      {
        type: 'ISBN_13',
        identifier: '9782379610554',
      },
      {
        type: 'ISBN_10',
        identifier: '237961055X',
      },
    ],
    readingModes: {
      text: true,
      image: true,
    },
    pageCount: 328,
    printType: 'BOOK',
    categories: [],
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: true,
    contentVersion: '1.6.6.0.preview.3',
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false,
    },
    imageLinks: {
      smallThumbnail:
        'http://books.google.com/books/content?id=yZuUDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      thumbnail:
        'http://books.google.com/books/content?id=yZuUDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
    language: 'fr',
    previewLink:
      'http://books.google.fr/books?id=yZuUDwAAQBAJ&pg=PP1&dq=romantic&hl=&cd=4&source=gbs_api',
    infoLink: 'https://play.google.com/store/books/details?id=yZuUDwAAQBAJ&source=gbs_api',
    canonicalVolumeLink: 'https://play.google.com/store/books/details?id=yZuUDwAAQBAJ',
  },
  saleInfo: {
    country: 'FR',
    saleability: 'FOR_SALE',
    isEbook: true,
    listPrice: {
      amount: 5.99,
      currencyCode: 'EUR',
    },
    retailPrice: {
      amount: 5.99,
      currencyCode: 'EUR',
    },
    buyLink:
      'https://play.google.com/store/books/details?id=yZuUDwAAQBAJ&rdid=book-yZuUDwAAQBAJ&rdot=1&source=gbs_api',
    offers: [
      {
        finskyOfferType: 1,
        listPrice: { amountInMicros: 5990000, currencyCode: 'EUR' },
        retailPrice: { amountInMicros: 5990000, currencyCode: 'EUR' },
        giftable: true,
      },
    ],
  },
  accessInfo: {
    country: 'FR',
    viewability: 'PARTIAL',
    embeddable: true,
    publicDomain: false,
    textToSpeechPermission: 'ALLOWED',
    epub: {
      isAvailable: true,
      acsTokenLink:
        'http://books.google.fr/books/download/Romantic_call-sample-epub.acsm?id=yZuUDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
    },
    pdf: {
      isAvailable: true,
      acsTokenLink:
        'http://books.google.fr/books/download/Romantic_call-sample-pdf.acsm?id=yZuUDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
    },
    webReaderLink: 'http://play.google.com/books/reader?id=yZuUDwAAQBAJ&hl=&source=gbs_api',
    accessViewStatus: 'SAMPLE',
    quoteSharingAllowed: false,
  },
};
