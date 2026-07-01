const products = [
    { id: 1, name: "Rice", price: 60 },
    { id: 2, name: "Sugar", price: 40 },
    { id: 3, name: "Wheat", price: 50 },
];

function showProducts() {
    products.forEach((product) => {
        console.log(`Product: ${product.name} - ₹${product.price}`);
    });
}
showProducts(); 

let cart = [];

const addToCart = function (productId, quantity) {
    const product = products.find((item) => item.id === productId);
    if (product) {
        cart.push({
            name: product.name,
            price: product.price,
            quantity: quantity,
        });
        console.log(`${product.name} added to cart (${quantity}kg)`);
    } else {
        console.log("Product not found");
    }
};

addToCart(1, 2);  
addToCart(3, 1);  

const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
        total += item.price * item.quantity;
    });
    return total;
};

function applyDiscount(totalAmount) {
    if (totalAmount >= 150) {
        return 20; 
    }
    return 0;
}

function showFinalMessage(total, discount, callback) {
    console.log(`Cart Total: ₹${total}`);
    console.log(`Discount Applied: ₹${discount}`);
    let finalAmount = total - discount;
    callback(finalAmount);
}

let total = calculateTotal(); 
let discount = applyDiscount(total); 
showFinalMessage(total, discount, function (finalAmount) {
    console.log(`You need to pay ₹${finalAmount}`);
});
