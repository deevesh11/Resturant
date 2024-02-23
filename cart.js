let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping_cart");

// Get basket array from localStorage
let basket = JSON.parse(localStorage.getItem("cart")) || [];

let generateCartItems = () => {
  if (basket.length !== 0) {
    shoppingCart.innerHTML = basket
      .map((x) => {
        let { id, name, price, img } = x;
        return `
        <div class="cart_item" id="product-${id}">
          <p>${name}</p>
          <img src="${img}" width="100">
          <p>$ ${price}</p>
          <button class="rmv_btn" data-id="${id}">Remove</button> 
        </div>
      `;
      })
      .join("");
  } else {
    shoppingCart.innerHTML = `<h3>Cart is empty</h3>`;
  }
  addRemoveListeners();
};

let removeItem = (id) => {
  basket = basket.filter((item) => item.id !== id);

  localStorage.setItem("cart", JSON.stringify(basket));

  generateCartItems();
};

let addRemoveListeners = () => {
  let buttons = document.querySelectorAll(".rmv_btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let id = e.target.dataset.id;
      removeItem(id);
    });
  });
};

generateCartItems();
