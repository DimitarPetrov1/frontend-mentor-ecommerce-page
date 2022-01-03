const menuBtn = document.querySelector(".mobile-menu-btn");
const navLeft = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const blackOverlay = document.querySelector(".black-overlay");
const cart = document.querySelector(".basket-window");
const avatar = document.querySelector(".avatar");
const cartSvg = document.querySelector(".cart");
const basketContent = document.querySelector(".basket-bottom");

let itemQty = 0;

const qtyPlus = document.querySelector(".qty-plus");
const qtyMinus = document.querySelector(".qty-minus");
const qty = document.querySelector(".qty");
const itemCounter = document.querySelector(".item-counter");

const addToCartBtn = document.querySelector(".btn-cart");

setInterval(() => {
  let removeItemBtn = document.querySelectorAll(".remove-item-btn");
  removeItemBtn.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
      itemCounter.textContent = null;
      itemQty = 0;
      qty.textContent = 0;
      if (itemQty === 0) {
        basketContent.innerHTML = emptyCartTemplate;
      }
    })
  );
}, 1000);

menuBtn.addEventListener("click", () => {
  navLeft.classList.add("menu-open");
  blackOverlay.classList.add("black-overlay-on");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("menu-open");
  blackOverlay.classList.remove("black-overlay-on");
});

const handleOpenCart = () => {
  if (cart.style.visibility !== "visible") {
    cart.style.visibility = "visible";
    avatar.style.outline = "2px solid hsl(26, 100%, 55%)";
  } else {
    cart.style.visibility = "hidden";
    avatar.style.outline = "none";
  }
};

avatar.addEventListener("click", handleOpenCart);
cartSvg.addEventListener("click", handleOpenCart);

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
  if (itemQty > 0) {
    // reset the cart
    basketContent.innerHTML = ``;
    // create the template
    const cartItemTemplate = `<img
                src="images/image-product-1-thumbnail.jpg"
                alt="thumbnail"
              />
              <div class="cart-more">
                <p>Fall Limited Edition Sneakers</p>
                <div style='display: flex'>$125.00 x ${itemQty}<div style='font-weight: 700; color: hsl(220, 13%, 13%); margin-left: 6px'>$${(
      itemQty * 125
    ).toFixed(2)}</div></div>
              </div>
              <svg
                width="14"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="remove-item-btn"
              >
                <defs>
                  <path
                    d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                    id="a"
                  />
                </defs>
                <use
                  fill="hsl(220, 14%, 75%)"
                  fill-rule="nonzero"
                  xlink:href="#a"
                />
              </svg>`;

    const template = document.createElement("div");
    template.cloneNode(false);
    template.classList.add("cart-item");
    template.innerHTML = cartItemTemplate;
    // Append template
    basketContent.append(template);

    itemCounter.textContent = itemQty;

    cart.style.visibility = "visible";
    avatar.style.outline = "2px solid hsl(26, 100%, 55%)";
  }

  if (itemQty === 0) {
    itemCounter.textContent = null;
    basketContent.innerHTML = emptyCartTemplate;
  }
});

const emptyCartTemplate = `<p class="empty-cart-txt">Your cart is empty.</p>`;
