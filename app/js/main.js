var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,


    // Navigation arrows
    navigation: {
        nextEl: '.swiper__button-next',
        prevEl: '.swiper__button-prev',
    },
});


const ratingItemsList = querySelectorAll(".ratings__item");
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item =>
    item.addEventListener("click", () =>
        item.parentNode.dataset.totalValue = item.dataset.itemValue)
);