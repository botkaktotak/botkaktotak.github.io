$(document).ready(function(){
      $('.slider').slick();
    });
var productsCount = document.getElementById("products-count")
console.log(productsCount)

var addToCartButtons = document.querySelectorAll(".add-to-cart")
console.log(addToCartButtons)


for(var i = 0;i < addToCartButtons.length;i++) {
	addToCartButtons[i].addEventListener('click',function(){
		// console.log("clicked")
		var prevProductsCount = +productsCount.textContent
		productsCount.textContent = prevProductsCount + 1
	})
}