const container = document.querySelector(".products-container");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".categories button");

/* ===========================
   عرض المنتجات
=========================== */

function displayProducts(productList){

    container.innerHTML = "";

    if(productList.length === 0){

        container.innerHTML = `
            <h2 style="grid-column:1/-1;text-align:center;color:white;">
                لا توجد منتجات
            </h2>
        `;

        return;

    }

    productList.forEach(product=>{

        container.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <div class="price">${product.price}</div>

                <p>${product.description}</p>

                <a href="product.html?id=${product.id}" class="product-btn">

    عرض التفاصيل

</a>       

            </div>

        </div>

        `;

    });

}

displayProducts(products);

/* ===========================
   البحث
=========================== */

if(searchInput){

    searchInput.addEventListener("input",()=>{

        const text = searchInput.value.toLowerCase();

        const filtered = products.filter(product=>{

            return product.name.toLowerCase().includes(text);

        });

        displayProducts(filtered);

    });

}

/* ===========================
   الفلاتر
=========================== */

categoryButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        categoryButtons.forEach(btn=>btn.classList.remove("active"));

        button.classList.add("active");

        const category = button.textContent.trim();

        if(category==="الكل"){

            displayProducts(products);

            return;

        }

        const filtered = products.filter(product=>{

            return product.category===category;

        });

        displayProducts(filtered);

    });

});

/* ===========================
   تغيير لون الناف بار
=========================== */

const navbar = document.querySelector(".navbar");

if(navbar){

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 100){

            navbar.style.background = "#000";
            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";

        }else{

            navbar.style.background = "rgba(0,0,0,.7)";
            navbar.style.boxShadow = "none";

        }

    });

}