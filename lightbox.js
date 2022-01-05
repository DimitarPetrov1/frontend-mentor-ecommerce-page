// BUTTONS
const lightboxLeftBtn = document.querySelector(".lightbox-left");
const lightboxRightBtn = document.querySelector(".lightbox-right");
const closeLightboxBtn = document.querySelector(".close-lightbox");
// Lightbox big image
const lightboxBigImage = document.querySelector(".lightbox-big-image-image");
// Big image product page
const productPageBigImage = document.querySelector(".main-left img");
// All images
const allLightboxImages = document.querySelectorAll(
  ".lightbox-images-select img"
);
// black overlay
const overlay = document.querySelector(".black-overlay");
const lightbox = document.querySelector(".lightbox");

let startIndex = 0;
lightboxLeftBtn.addEventListener("click", () => {
  const images = document.querySelectorAll(".lightbox-image-holder");

  // // Find the img with the active class
  images.forEach((img, i) => {
    if (img.classList.contains("lightbox-image-holder-active")) {
      startIndex = i;
      img.classList.remove("lightbox-image-holder-active");
    }
  });
  if (startIndex > 0) {
    startIndex--;
  }
  images[startIndex].classList.add("lightbox-image-holder-active");

  let item = images[startIndex].querySelector("img");
  lightboxBigImage.src = item.src.replace("-thumbnail", "");
});

lightboxRightBtn.addEventListener("click", () => {
  const images = document.querySelectorAll(".lightbox-image-holder");

  // // Find the img with the active class
  images.forEach((img, i) => {
    if (img.classList.contains("lightbox-image-holder-active")) {
      startIndex = i;
      img.classList.remove("lightbox-image-holder-active");
    }
  });
  if (startIndex < images.length - 1) {
    startIndex++;
  }
  images[startIndex].classList.add("lightbox-image-holder-active");

  let item = images[startIndex].querySelector("img");
  lightboxBigImage.src = item.src.replace("-thumbnail", "");
});

// clicking on images changes the big image
allLightboxImages.forEach((image, index) =>
  image.addEventListener("click", (e) => {
    //  remove all bg from parent
    allLightboxImages.forEach((img) => {
      img.parentElement.classList.remove("lightbox-image-holder-active");
    });
    allLightboxImages[index].parentElement.classList.add(
      "lightbox-image-holder-active"
    );
    lightboxBigImage.src = e.target
      .getAttribute("src")
      .replace("-thumbnail", "");
  })
);

// Close lightbox
const closeLightbox = () => {
  overlay.classList.remove("black-overlay-on");
  lightbox.style.display = "none";
};

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
  }
});
closeLightboxBtn.addEventListener("click", closeLightbox);

// Open lightbox
productPageBigImage.addEventListener("click", () => {
  overlay.classList.add("black-overlay-on");
  lightbox.style.display = "unset";
});

// change big image on main page --
const allSmallImagesMainPage = document.querySelectorAll(
  ".mainpage-small-image-holder img"
);

allSmallImagesMainPage.forEach((img) => {
  img.addEventListener("click", () => {
    allSmallImagesMainPage.forEach((child) => {
      child.parentElement.classList.remove(
        "mainpage-small-image-holder-active"
      );
    });
    img.parentElement.classList.add("mainpage-small-image-holder-active");
    productPageBigImage.src = img.src.replace("-thumbnail", "");
  });
});
