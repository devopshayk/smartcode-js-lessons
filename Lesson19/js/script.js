function vibrateImage() {
    const image = document.getElementById('image');
    
    image.classList.add('vibrate');
    
    setTimeout(function() {
        image.classList.remove('vibrate');
    }, 400);
    }
    
    function foo(imageElement) {
        const imageSrc = imageElement.src;
        const square = document.querySelector('.square');
    
        const imageSize = 'cover';
        
        square.style.backgroundImage = `url(${imageSrc})`;
        square.style.backgroundSize = imageSize;
    
        if (image) {
            image.remove();
            image = null; 
        }
      }
    