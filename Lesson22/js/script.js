function showProducts() {
    const productContainer = document.querySelector('.product-container');
  
    const products = [
      {
        src: 'https://assets.vogue.ru/photos/5fb3db49c881114ce4c35dc2/2:3/w_2560%2Cc_limit/main_9.jpg',
        alt: 'Prada Cleo',
        name: 'Prada Cleo',
        price: '$1200',
      },
      {
        src: 'https://ru.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-%D1%81%D1%83%D0%BC%D0%BA%D0%B0-onthego-mm--M45321_PM2_Front%20view.jpg',
        alt: 'Louis Vuitton',
        name: 'Louis Vuitton OnTheGo',
        price: '$1500',
      },
      {
        src: 'https://files.glamourboutique.uz/originals/123guc14.jpg',
        alt: 'Gucci',
        name: 'Gucci Bag',
        price: '$1000',
      },
      {
        src: 'https://sumkidior.ru/image/cache/catalog/01%D1%81%D1%83%D0%BC%D0%BA%D0%B0/PHOTO-2021-03-06-21-03-56%202-1000x760.jpg',
        alt: 'Dior',
        name: 'Dior Saddle Bag',
        price: '$1800',
      },
      {
        src: 'https://kasta.ua/image/1035/s3/a/96/8a/10317450/29770742/29770742_original.jpeg',
        alt: 'Zara',
        name: 'Zara Fast Fashion',
        price: '$1100',
      },   {
        src: 'https://a.lmcdn.ru/img600x866/I/X/IX001XW00NM8_11755839_1_v1.jpeg',
        alt: 'Bershka',
        name: 'Bershka',
        price: '$900',
      }
    ];
  
    productContainer.innerHTML = '';
  
    products.forEach((product) => {
      const productBlock = document.createElement('div');
      productBlock.classList.add('product');
  
      const productImage = document.createElement('img');
      productImage.src = product.src;
      productImage.alt = product.alt;
  
      // Добавляем обработчик события клика для удаления фотографии
      productImage.addEventListener('click', function () {
        productContainer.removeChild(productBlock);
      });
  
      const productName = document.createElement('p');
      productName.textContent = product.name;
  
      const productPrice = document.createElement('p');
      productPrice.textContent = `Цена: ${product.price}`;
  
      productBlock.appendChild(productImage);
      productBlock.appendChild(productName);
      productBlock.appendChild(productPrice);
  
      productContainer.appendChild(productBlock);
    });
  
    shuffleProducts(productContainer);
  }
  
  function shuffleProducts(container) {
    for (let i = container.children.length; i >= 0; i--) {
      container.appendChild(container.children[Math.random() * i | 0]);
    }
  }
  