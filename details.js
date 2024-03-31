import { menu } from "./db.js";
import { calculatePrice } from "./helpers.js";
const outlet = document.getElementById("outlet");
const searchParams = new URLSearchParams(window.location.search);
const paramId = searchParams.get("id");
console.log(paramId);
const product = menu.find((item) => item.id === Number(paramId));
outlet.innerHTML = `
    <div class="d-flex justify-content-between align-items-center">
        <a href="/" class="fs-1"><i class="bi bi-house"></i></a>
        <div>anasayfa / ${
          product.category
        } / ${product.title.toLowerCase()}</div>
        </div>
        <h1 class="text-center shadow rounded p-2 my-3">${product.title}</h1>
        <div class="d-flex align-items-center justify-content-center">
            <img
            src="${product.img}"
            style="max-width: 500px"
            class="img-fluid rounded shadow"
            alt=""
        />
        </div>
    <div>
<h3 class="my-5">
  Product Category: <span class="text-success">${product.category}</span>
</h3>
<h3 class="my-5">
  Product Price: <span class="text-success">${calculatePrice(
    product.price
  )} .-Eur</span>
</h3>
</div>
<p class="lead fs-3">
${product.desc}
</p>
`;