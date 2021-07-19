let arrBasket = [['Jacket', 100, 1], ['Polo', 100, 1], ['Shirt', 100, 1], ['Bag', 100, 1]]; // [[0], [1], [2], [3]]
let summBascet = 0;

function countBasketPrice(array) {
    for (let i = 0; i < array.length; i++) {
        summBascet = summBascet + array[i] [1] * array[i] [2];
    }
    return summBascet;
}

console.log(countBasketPrice(arrBasket));