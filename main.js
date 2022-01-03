const menuBtn = document.querySelector(".mobile-menu-btn");
const navLeft = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const blackOverlay = document.querySelector(".black-overlay");
const cart = document.querySelector(".basket-window");
const avatar = document.querySelector(".avatar");
const cartSvg = document.querySelector(".cart");

let itemQty = 0;

const qtyPlus = document.querySelector(".qty-plus");
const qtyMinus = document.querySelector(".qty-minus");
const qty = document.querySelector(".qty");
const itemCounter = document.querySelector(".item-counter");

const addToCartBtn = document.querySelector(".btn-cart");

menuBtn.addEventListener("click", () => {
  navLeft.classList.add("menu-open");
  blackOverlay.classList.add("black-overlay-on");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("menu-open");
  blackOverlay.classList.remove("black-overlay-on");
});

const handleCart = () => {
  if (cart.style.visibility !== "visible") {
    cart.style.visibility = "visible";
    avatar.style.outline = "2px solid hsl(26, 100%, 55%)";
  } else {
    cart.style.visibility = "hidden";
    avatar.style.outline = "none";
  }
};

avatar.addEventListener("click", handleCart);
cartSvg.addEventListener("click", handleCart);

qtyPlus.addEventListener("click", () => {
  itemQty++;
  qty.textContent = itemQty;
});

qtyMinus.addEventListener("click", () => {
  if (itemQty > 0) {
    itemQty--;
    qty.textContent = itemQty;
  }
});

addToCartBtn.addEventListener("click", () => {
  cart.style.visibility = "visible";
  avatar.style.outline = "2px solid hsl(26, 100%, 55%)";
  itemCounter.textContent = itemQty;
  if (itemQty === 0) {
    itemCounter.textContent = null;
  }
});

// const cartItem = ``
const emptyCartTemplate = `<p class="empty-cart-txt">Your cart is empty.</p>`;
