const shop = document.getElementById("shop");
let count = document.getElementById("cart_amount");
let cart = [];

if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);
  count.innerText = cart.length;
}

const generateShop = () => {
  shop.innerHTML = shopItemsData.map((x) => {
    let { id, name, price, img } = x;

    return `<div class='shop_item'  id=prodcut-id-${id}>
               <img src= '${img}' alt='' />
               <div class='product_info' >
                      <h5>${name}</h5>
                      <p  class='price'> <span>$:</span> ${price} </p>
                       <button onclick ="addToCart('${id}','${name}','${price}','${img}')">Add to Cart </button>
               </div>
           </div>`;
  });
};

function addToCart(id, name, price, img) {
  let itemInCart = cart.find((item) => item.id === id);

  if (itemInCart) {
    alert("Item already in cart");
    return;
  }

  let cartItem = { id, name, price, img };

  cart.push(cartItem);

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  count.innerHTML = cart.length;
}
generateShop();
