const productBtn = document.querySelectorAll('.product_btn');
const products = document.querySelectorAll('.product');

productBtn.forEach((item, index) => {
    item.addEventListener('click', () => {
        const category = item.getAttribute('data-category');

		for(let i = 0; i < productBtn.length; i++) {
			productBtn[i].classList.remove('btn_on');
		}

		productBtn[index].classList.add('btn_on');

        products.forEach(product => {
            const productCategory = product.getAttribute('data-category');

            if (category === 'all' || category === productCategory) {
                product.style.display = 'flex';
            } else {
                product.style.display = 'none';
            }
        });
    });
});