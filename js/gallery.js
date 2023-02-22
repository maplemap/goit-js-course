/* 
  Створити гелерею з картинок використовуючи масив 'images'

  Вимоги:
  - При кліку на картинку показувати модалку з написом що зберігається 
    в полі title. Використовувати делегування при обробці кліків
*/

const images = [
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg',
    title: 'A Toyota Previa covered in graffiti',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05621_zgtcco.jpg',
    title: 'Interesting living room light through a window',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05513_gfbiwi.jpg',
    title: 'Sara on a red bike',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05588_nb0dma.jpg',
    title: 'XOXO venue in between talks',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05459_ziuomy.jpg',
    title: 'Trees lit by green light during dusk',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05586_oj8jfo.jpg',
    title: 'Portrait of Justin Pervorse',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05465_dtkwef.jpg',
    title: 'Empty bike racks outside a hotel',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05626_ytsf3j.jpg',
    title: 'Heavy rain on an intersection',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05449_l9kukz.jpg',
    title: 'Payam Rajabi eating peanut chicken',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05544_aczrb9.jpg',
    title: 'Portland skyline sunset',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05447_mvffor.jpg',
    title: "Interior at Nong's",
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05501_yirmq8.jpg',
    title: 'A kimchi hotdog on a plate',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05624_f5b2ud.jpg',
    title: "Restaurant window with graffiti saying 'water'",
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05623_dcpfva.jpg',
    title: 'Portrait of Jeremy Tanner',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05515_d2gzut.jpg',
    title: 'Jordan, Sarah and Sara on red bikes, waiting',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05581_ceocwv.jpg',
    title: "Barista wearing a hoodie saying 'Coffee Should Be Dope.'",
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05517_ni2k0p.jpg',
    title: 'Payam crossing the street on a bike',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814783/photostream-photos/DSC05620_qfwycq.jpg',
    title: 'Lit trees reflected in a puddle',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814783/photostream-photos/DSC05462_b33uvp.jpg',
    title: 'Moody chair in my hotel room',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814783/photostream-photos/DSC05489_mqzktl.jpg',
    title: 'Tom and Jenn wearing sunglasses',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814783/photostream-photos/DSC05476_dlkjza.jpg',
    title: 'Jordan and Sarah in front of a restaurant window',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814783/photostream-photos/DSC05497_abbd3c.jpg',
    title: 'Sarah reading the Double Dragon drink menu',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05487_fcdv7t.jpg',
    title: 'Beer brewing equipment',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05493_q6njbk.jpg',
    title: '2 cocktails in the making',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05446_xj60ff.jpg',
    title: "Beverage fridge at Nong's",
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05559_hu49zx.jpg',
    title: 'Wood structure reflections',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05482_dtrj02.jpg',
    title: 'Colorful garden equipment in a shop window',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05565_dx5rp6.jpg',
    title: 'Sarah in front of a wooden wall',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05613_o9af2z.jpg',
    title: 'A neon banana',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05469_fdxdzx.jpg',
    title: "Matt Sacks smiling while we're waiting for food",
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05558_yq2tnz.jpg',
    title: 'A fixed-gear bike under some bright lights',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05483_dyiuya.jpg',
    title: "Panic's PlayDate being held by a tester",
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05468_xzbtcd.jpg',
    title: 'Window reflection of me and Payam',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05457_nloycw.jpg',
    title: 'Upside down shopping carts',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05522_mekpec.jpg',
    title: 'Payam riding a bike with no hands',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05611_lbwtmk.jpg',
    title: "A kid's pillow left on the bench of a bus stop",
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05572_xfvij7.jpg',
    title: 'My reflection in the mirror',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05481_gnljae.jpg',
    title: 'Jordan holding an iced coffee against his head to cool down',
  },
  {
    src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05480_zkw8sm.jpg',
    title: 'Jordan and Sarah looking at the menu in a coffee shop',
  },
];

// function showModal(content) {
//   const modalRef = document.querySelector('.modal');
//   modalRef.querySelector('.modal-content').innerHTML = content || '';
//   modalRef.classList.add('show-modal');

//   modalRef.querySelector('.close-button').addEventListener('click', closeModal);
//   modalRef.addEventListener('click', onCloseModalByClickOnDropDown);
// }

// function closeModal() {
//   const modalRef = document.querySelector('.modal');
//   modalRef.querySelector('.modal-content').innerHTML = '';
//   modalRef.classList.remove('show-modal');

//   modalRef
//     .querySelector('.close-button')
//     .removeEventListener('click', closeModal);
//   modalRef.removeEventListener('click', onCloseModalByClickOnDropDown);
// }

// function onCloseModalByClickOnDropDown(e) {
//   if (e.target === e.currentTarget) {
//     closeModal();
//   }
// }
