function toggleBasket() {
    const emptyBasket = document.querySelector('.empty');
    const order = document.querySelector('#order');

    if (cartWrapper.children.length > 0) {
        emptyBasket.classList.add('none');
        order.classList.remove('none');
    } else {
        emptyBasket.classList.remove('none');
        order.classList.add('none');
    }
}