import { buttonsData, menu } from "./db.js";
import { calculatePrice, elements } from "./helpers.js";
document.addEventListener("DOMContentLoaded", () => {
  renderMenuItems(menu);
  renderButtons();
});
elements.buttonsArea.addEventListener("click", searchCategory);
function renderMenuItems(menuItems) {
  let menuHTML = menuItems.map((item) => {
    return `
    <a
    href="productDetail.html?id=${item.id}"
    id="card"
    class="text-decoration-none text-black d-flex flex-column flex-md-row gap-2">
        <img src=${item.img} alt="" class="rounded shadow" />
        <div>
        <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success">${calculatePrice(item.price)} .-Eur</p>
        </div>
        <p class="lead">
            ${item.desc}
        </p>
        </div>
    </a>
    `;
  });
  menuHTML = menuHTML.join("");
  elements.mainArea.innerHTML = menuHTML;
}
function searchCategory(e) {
  const category = e.target.dataset.category;
  const filtredMenu = menu.filter((item) => item.category === category);
  if (category === "all") {
    renderMenuItems(menu);
  } else {
    renderMenuItems(filtredMenu);
  }
  renderButtons(category);
}
function renderButtons(active) {
  elements.buttonsArea.innerHTML = "";
  buttonsData.forEach((btn) => {
    const buttonEle = document.createElement("button");
    buttonEle.className = "btn btn-outline-dark filter-btn";
    buttonEle.textContent = btn.text;
    buttonEle.dataset.category = btn.value;
    if (btn.value === active) {
      buttonEle.classList.add("bg-dark", "text-light");
    }
    elements.buttonsArea.appendChild(buttonEle);
  });
}