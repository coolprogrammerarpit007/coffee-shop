`use strict`;

// Acessing the dom elements.

// Feature to the top products section.

const featuredBtn = document.querySelector(`.featured`);
const latestBtn = document.querySelector(`.latest`);
const bestSellerBtn = document.querySelector(`.bestseller`);

// dom elements for featured section

const productImgs = document.querySelectorAll(`.product-img`);
const productTitle = document.querySelectorAll(`.product-title`);
const productPrice = document.querySelectorAll(`.product-price`);

// featured object data

const featuredObjs = [
  {
    id: 0,
    img: "./../images/topProducts/product1.jpg",
    name: "Irish Coffee",
    price: "$96.00",
  },
  {
    id: 1,
    img: "./../images/topProducts/product2.jpg",
    name: "Calypso Coffee",
    price: "$2,000.00",
  },
  {
    id: 2,
    img: "./../images/topProducts/product3.jpg",
    name: "Australian Coffee",
    price: "$122.00",
  },
  {
    id: 3,
    img: "./../images/topProducts/product4.jpg",
    name: "Witch Coffee",
    price: "$123.00",
  },
];

// top products data

const topObjs = [
  {
    id: 0,
    img: "./../images/topProducts/dairy-1.jpg",
    name: "dairy product 1",
    price: "$25",
  },
  {
    id: 1,
    img: "./../images/topProducts/dairy-2.jpg",
    name: "dairy product 2",
    price: "$30",
  },
  {
    id: 3,
    img: "./../images/topProducts/dairy-3.jpg",
    name: "dairy product 3",
    price: "$35",
  },
  {
    id: 4,
    img: "./../images/topProducts/dairy-1.jpg",
    name: "dairy product 4",
    price: "$40",
  },
];

// latest products data
const latestObjs = [
  {
    id: 0,
    img: "./../images/topProducts/food-1.jpg",
    name: "Italian Food-1",
    price: "$300",
  },
  {
    id: 1,
    img: "./../images/topProducts/food-2.jpg",
    name: "Italian Food-2",
    price: "$320",
  },
  {
    id: 3,
    img: "./../images/topProducts/food-3.jpg",
    name: "Italian Food-3",
    price: "$340",
  },
  {
    id: 4,
    img: "./../images/topProducts/food-4.jpg",
    name: "Italian Food-4",
    price: "$360",
  },
];

// functuanility to the featured object
featuredBtn.addEventListener(`click`, (e) => {
  latestBtn.removeAttribute(`id`);
  bestSellerBtn.removeAttribute(`id`);
  featuredBtn.setAttribute(`id`, `activeBtn`);
  productImgs.forEach((item, i) => {
    productImgs[i].src = `${featuredObjs[i].img}`;
    productTitle[i].textContent = `${featuredObjs[i].name}`;
    productPrice[i].textContent = `${featuredObjs[i].price}`;
  });
});

// Functuanility to the latest object
latestBtn.addEventListener(`click`, (e) => {
  featuredBtn.removeAttribute(`id`);
  bestSellerBtn.removeAttribute(`id`);
  latestBtn.setAttribute(`id`, `activeBtn`);
  productImgs.forEach((item, i) => {
    productImgs[i].src = `${latestObjs[i].img}`;
    productTitle[i].textContent = `${latestObjs[i].name}`;
    productPrice[i].textContent = `${latestObjs[i].price}`;
  });
});

// functuanity for the top products

bestSellerBtn.addEventListener(`click`, (e) => {
  latestBtn.removeAttribute(`id`);
  featuredBtn.removeAttribute(`id`);
  bestSellerBtn.setAttribute(`id`, `activeBtn`);
  productImgs.forEach((item, i) => {
    productImgs[i].src = `${topObjs[i].img}`;
    productTitle[i].textContent = `${topObjs[i].name}`;
    productPrice[i].textContent = `${topObjs[i].price}`;
  });
});

// *********************************
// top products section

// *************************************

// Adding feature for the modal to the image gallery
// storing gallery images

const imgGallery = document.querySelectorAll(`.gallery-image`);
const gallery = document.querySelector(`.gallery-section`);

// Event listener to the image gallery

imgGallery.forEach((img, i) => {
  img.addEventListener(`click`, (e) => {
    console.log(img.src);
    const image = document.createElement(`img`);
    image.src = `./../images/gallery/${i + 1}.jpg`;
    console.log(image);

    const modal = document.createElement(`div`);
    modal.setAttribute(`id`, `modal`);
    // modal.classList.remove(`hidden`);

    // Adding close modal functuanility
    const closeBtn = document.createElement(`button`);
    closeBtn.textContent = `Close Modal`;
    closeBtn.classList.add(`close-modal`);
    modal.appendChild(closeBtn);
    modal.appendChild(image);
    gallery.appendChild(modal);

    // Event listener to the close button

    closeBtn.addEventListener(`click`, (e) => {
      // modal.classList.add(`hidden`);
      modal.remove();
    });
  });
});

// ********************************
// Image Gallery Functuanility

// **********************************

// Hero Section Gallery crousel

const heroContainer = document.querySelector(`.hero-section`);

// hero section image json

const heroImgs = [
  {
    id: 0,
    img: `./../images/tea-0.jpg`,
  },
  {
    id: 1,
    img: `./../images/tea-1.jpg`,
  },
  {
    id: 2,
    img: `./../images/tea-2.jpg`,
  },
  {
    id: 3,
    img: `./../images/tea-3.jpg`,
  },
];

const nextBtn = document.querySelector(`.next`);
const previousBtn = document.querySelector(`.last`);

// state variable
let i = 0;

// *********************************
nextBtn.addEventListener(`click`, (e) => {
  // Assigning value to variable i
  i++;
  i = i <= heroImgs.length - 1 ? i : (i = 0);
  let src = `${heroImgs[i].img}`;
  console.log(src);
  i++;
  heroContainer.style.backgroundImage = `url(${src})`;
});

previousBtn.addEventListener(`click`, (e) => {
  console.log(`Previous Button!`);
  console.log(i);
  i--;
  i = i >= 0 ? i - 1 : (i = 0);
  console.log(i);
  console.log(heroImgs[i]);
  let newSrc = `${heroImgs[i].img}`;
  console.log(newSrc);
  heroContainer.style.backgroundImage = `url(${newSrc})`;
});

// **********************************

// ***********************************
// blog slider

// Acessing to the blog dom

const blogContainer = document.querySelectorAll(`.blog-container`);
const blogs = document.querySelectorAll(`.blog`);

const blogLastBtn = document.querySelector(`.last-btn`);
const blogNextBtn = document.querySelector(`.next-btn`);

let count = 0;
blogNextBtn.addEventListener(`click`, () => {});
// Feature to show the blogs
blogNextBtn.addEventListener(`click`, (e) => {
  console.log(`working!`);
  if (count >= blogContainer.length - 1) {
    blogContainer[count].classList.add(`blog-hidden`);
    count = 0;
    blogContainer[count].classList.remove(`blog-hidden`);
  } else {
    blogContainer[count].classList.add(`blog-hidden`);
    count++;
    blogContainer[count].classList.remove(`blog-hidden`);
  }
  console.log(count);
});

blogLastBtn.addEventListener(`click`, (e) => {
  if (count <= 0) {
    blogContainer[count].classList.add(`blog-hidden`);
    count = blogContainer.length - 1;
    blogContainer[count].classList.remove(`blog-hidden`);
  } else {
    blogContainer[count].classList.add(`blog-hidden`);
    count--;
    blogContainer[count].classList.remove(`blog-hidden`);
  }
});
