const title = ["Casual", "Modern", "Wedding"]
const paragraph = [`Explore the timeless charm of Habesha culture with our casual collection,
  designed to bring comfort and style to your daily life. Each piece in this collection reflects the rich traditions
  of Ethiopia and Eritrea, offering you the perfect blend of modern convenience and traditional beauty.`,

  `Welcome to our modern collection, where traditional Habesha craftsmanship meets contemporary design. This section
  features a curated selection of clothing, accessories, and home decor that seamlessly blend the rich cultural heritage of
  Ethiopia and Eritrea with modern aesthetics. Perfect for those who appreciate the beauty of tradition but seek a stylish,
  up-to-date look.`,
  `Celebrate your special day with the timeless elegance and rich cultural heritage of Habesha traditions.
  Our wedding collection is carefully curated to offer you the finest selection of traditional attire, accessories,
  and ceremonial items that honor the beauty and depth of Ethiopian and Eritrean customs.`
  ]
const img = ['./casual/casual2.png', './modern/modern3.png', './wedding/wedding6.jpeg']

let title1 = document.querySelector('.description-title')
let paragraph1 = document.querySelector('.description-paragraph')
let display = document.querySelector('.wedding-display');
let img1 = document.querySelector('.display-img')

let i = 0;

function scroll(){
  if(i > 1){
    title1.innerText = title[i]
    paragraph1.innerText = paragraph[i]
    img1.src = img[i]
    i = 0
  }else{
    title1.innerText = title[i]
    paragraph1.innerText = paragraph[i]
    img1.src = img[i]
    i++
  }
}
const clicked = document.querySelector('.clicked')
clicked.addEventListener('click', () => scroll())
