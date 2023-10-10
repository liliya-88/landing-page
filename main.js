// ********** set date ************
const date = document.getElementById("date");
if (date) {
  date.innerHTML = new Date().getFullYear();
}
/* *************************************** */
/*--------------- SCTOLL UP--------------- */

// ********** arrow to scroll up ************
const topLink = document.querySelector(".top-link");
const whatsappLink = document.querySelector(".whatsapp-link");
window.addEventListener("scroll", () => {
  const scrollHeight = window.scrollY;

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
  if (scrollHeight > 500) {
    whatsappLink.classList.add("show-link");
  } else {
    whatsappLink.classList.remove("show-link");
  }
});
/* end of date_arrow_to_scroll */

/* *************************************** */

/* landing Page */
window.addEventListener("load", function () {
  const productWrapper = document.querySelector(".section_hero");

  if (productWrapper) {
    /* variables*/
    const slider = document.querySelector(".section_hero .products_container");
    let slideImages = document.querySelectorAll(
      ".section_hero .products_container article"
    );
    let slideCount = document.querySelectorAll(
      ".section_hero .products_container article"
    ).length;
    let slideHeight = document.querySelector(".section_hero").offsetHeight;
    const downSlider = document.querySelector(".down");
    const upSlider = document.querySelector(".up");
    let totalHeight = slideCount * slideHeight;
    let counter = 0;
    let topPosition = 0;
    let isPaused = false;
    slider.style.top = totalHeight;

    /* actions */
    window.addEventListener("resize", updateSlider);
    downSlider.addEventListener("click", runNextSlide);
    upSlider.addEventListener("click", runPrevSlide);
    slider.addEventListener("mouseover", () => {
      isPaused = true;
      downSlider.classList.add("visible");
      upSlider.classList.add("visible");
    });
    slider.addEventListener("mouseout", () => {
      isPaused = false;
      downSlider.classList.remove("visible");
      upSlider.classList.remove("visible");
    });
    setTimeout(() => {
      setInterval(() => {
        if (!isPaused) {
          runNextSlide();
        }
      }, 5000);
    }, 3000);
    /* --------------- */

    /* functions */
    function updateSlider() {
      let windowHeight = window.innerHeight;
      if (counter != slideCount) {
        counter = 0;
        topPosition = 0;
        slider.style.top = topPosition;
      } else {
        counter = 0;
        topPosition = 0;
        slider.style.top = topPosition;
      }
      slideHeight = windowHeight;
    }
    /* next function */
    function runNextSlide() {
      counter++;
      if (counter == slideCount) {
        makeUlCloneAfter();
        counter = 0;
        topPosition = `-${counter * slideHeight}px`;
        slider.style.top = topPosition;
      }
      topPosition = `-${counter * slideHeight}px`;
      slider.style.top = topPosition;
    }
    /* next function */
    function runPrevSlide() {
      counter--;
      if (counter < 0) {
        makeUlCloneBefore();
        counter = slideCount - 1;
      }
      topPosition = `-${counter * slideHeight}px`;
      slider.style.top = topPosition;
    }
    /* next function */
    function makeUlCloneAfter() {
      /* clones */
      const ulClone = slider.cloneNode(true);
      ulClone.className = "products_container";

      productWrapper.appendChild(ulClone);
      productWrapper.replaceChild(slider, ulClone);
    }
    /* next function */
    function makeUlCloneBefore() {
      /* clones */
      const ulClone = slider.cloneNode(true);
      ulClone.className = "products_container";
      productWrapper.prepend(ulClone);
      productWrapper.replaceChild(slider, ulClone);
    }
    /* ============= */
  }
});
/* ========== */
