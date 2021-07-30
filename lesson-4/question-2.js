const basket = {
    goods: [
        {
            id_product: 123,
            product_name: 'Пуховик',
            price: 15000,
            quantity: 1
        },
        {
            id_product: 456,
            product_name: 'Шорты',
            price: 3000,
            quantity: 2
        }
    ],
    countBasketPrice() {
        return this.goods.reduce((totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity, 0);
    }
};
console.log(basket.countBasketPrice());