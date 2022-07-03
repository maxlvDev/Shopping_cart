function priceSum() {
	const cartWrapper = document.querySelector('.cart-wrapper');
	const prices = cartWrapper.querySelectorAll('.price-currency');
	const totalPrice = document.querySelector('.total-price');
	const deliveryCost = document.querySelector('.delivery-cost');
	const cartDelivery = document.querySelector('[data-cart-delivery]');

	let priceTotal = 0;

	prices.forEach(function (item) {
		const amountEl = item.closest('.card').querySelector('[data-action="counter"]');
		priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
	});

	totalPrice.innerText = priceTotal;

	if (priceTotal > 0) {
		cartDelivery.classList.remove('none');
	} else {
		cartDelivery.classList.add('none');
	}

	if (priceTotal >= 57000) {
		deliveryCost.classList.add('free');
		deliveryCost.innerText = 'Бесплатно';
		let term = document.querySelector('.term')
		term.classList.add('none');
	} else {
		deliveryCost.classList.remove('free');
		deliveryCost.innerText = '250 ₽';
		let term = document.querySelector('.term')
		term.classList.remove('none');

	}
}