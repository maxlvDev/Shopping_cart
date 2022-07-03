
window.addEventListener("click", (event) => {
        if (event.target.dataset.action ==='minus' || event.target.dataset.action === 'plus'){
        let parent = event.target.closest('.counter-wrapper');
        let counter = parent.querySelector('[data-action = "counter"]');
            if (event.target.dataset.action === 'minus') {
                if (counter.innerText > 1) {
                counter.innerText = --counter.innerText;
                } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
                    event.target.closest('.card').remove()
                    toggleBasket()
                    priceSum()
                }
            } else if (event.target.dataset.action === 'plus') {
            counter.innerText = ++counter.innerText;
            }

        if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
            priceSum()
        }
    }
});

const cartWrapper = document.querySelector('.cart-wrapper')

window.addEventListener("click", (event) => {
    if (event.target.hasAttribute('data-but')) {
        let card = event.target.closest('.card')
        
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.item-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            price: card.querySelector('.price-currency').innerText,
            counter: card.querySelector('[data-action = "counter"]').innerText,
        }

        let itemInCard = cartWrapper.querySelector(`[data-id = "${productInfo.id}"]`)

            if (itemInCard) {
                const counterElement = itemInCard.querySelector('[data-action = "counter"]')
                counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter)
            } else {
                const cardItem = 
                `<div class="card"  data-id="${productInfo.id}">
                    <img class="item-img" src="${productInfo.imgSrc}">
                    <div class="card-body center">
                        <h4 class="item-title">${productInfo.title}</h4>
                        <div class="details">
                            <div class="items counter-wrapper">
                                <div class="items-control" data-action="minus">-</div>
                                <div class="items-current" data-action="counter">${productInfo.counter}</div>
                                <div class="items-control" data-action="plus">+</div>
                            </div>
                            <div class="price">
                                <div class="price-currency">${productInfo.price}</div>
                            </div>
                        </div>
                    </div>
                </div>`
                cartWrapper.insertAdjacentHTML('beforeend', cardItem)
            }

        card.querySelector('[data-action = "counter"]').innerText = "1"
        toggleBasket()
        priceSum()
    }
})

