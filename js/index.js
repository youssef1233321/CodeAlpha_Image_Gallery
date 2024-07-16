
const items = document.querySelectorAll('.rowContainer .Item')
const itemsImages = document.querySelectorAll('.thumbnail img')
const layoutNav = document.querySelector('.layoutNavImage')
const layoutNavImage = document.querySelector('.layoutNavImage img')
const iconClose = document.querySelector('.fa-regular')
const iconRight = document.querySelector('.fa-arrow-right')
const iconLeft = document.querySelector('.fa-arrow-left')

const filterationButtons = document.querySelectorAll('.filterImages ul li span')


console.log(itemsImages);

function removeActiveClass() {
    filterationButtons.forEach(button => button.classList.remove('active'));
}

for (let i = 0; i < filterationButtons.length; i++) {
    filterationButtons[i].addEventListener('click', function () {
        removeActiveClass();
        
        this.classList.add('active');

        let filter = this.innerHTML
        
        if(filter == "All Photos"){
            items.forEach(item => item.style.display = 'block');
        }
        else{
            items.forEach(item => item.style.display = 'none');
            items.forEach(item => {
                if(item.classList.contains(filter)) item.style.display = 'block';
            });
        }
    });
 
}

for (let i = 0; i < items.length; i++) {
    itemsImages[i].addEventListener('click', function () {
        layoutNav.style.display = 'block';
        layoutNavImage.src = this.src;
    });
}

iconClose.addEventListener('click', function () {
    layoutNav.style.display = 'none';
});

iconRight.addEventListener('click', function () {
    if(filterationButtons[0].classList.contains("active")){
        let currentImageSrc = layoutNavImage.src;
        let currentIndex = Array.from(itemsImages).findIndex(img => img.src === currentImageSrc);
        let nextIndex = (currentIndex + 1) % itemsImages.length;
        layoutNavImage.src = itemsImages[nextIndex].src;
    }
    else{
        let currentImageSrc = layoutNavImage.src;
        let currentIndex = Array.from(itemsImages).findIndex(img => img.src === currentImageSrc);
        let nextIndex = (currentIndex + 1) % itemsImages.length;
        while (items[nextIndex].style.display !== 'block') {
            nextIndex = (nextIndex + 1) % itemsImages.length;
            console.log(nextIndex);
            if (nextIndex == currentIndex) break;
        }
       
        layoutNavImage.src = itemsImages[nextIndex].src;
    }
    
    
});

iconLeft.addEventListener('click', function () {
    if(filterationButtons[0].classList.contains("active")){
        let currentImageSrc = layoutNavImage.src;
        let currentIndex = Array.from(itemsImages).findIndex(img => img.src === currentImageSrc);
        let prevIndex = (currentIndex - 1 + itemsImages.length) % itemsImages.length;
        layoutNavImage.src = itemsImages[prevIndex].src;
    }
    else{
        let currentImageSrc = layoutNavImage.src;
        let currentIndex = Array.from(itemsImages).findIndex(img => img.src === currentImageSrc);
        
    
        let prevIndex = (currentIndex - 1 + itemsImages.length) % itemsImages.length;
        while (items[prevIndex].style.display !== 'block') {
            prevIndex = (prevIndex - 1 + itemsImages.length) % itemsImages.length;
            
            if (prevIndex === currentIndex) break;
        }
        
        layoutNavImage.src = itemsImages[prevIndex].src;
    }
    
});