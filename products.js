
function createProductDiv(product) {
    const productDiv = document.createElement("div");

    productDiv.innerHTML = (`
    <div class="card" style="width: 18rem;">
        <img src="${product.thumbnail}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <span class="badge badge-success bg-success">${product.price}</span>
            <a href="#" class="btn btn-primary">Buy</a>
        </div>
    </div>
    `);
    return productDiv;
}

function loadProducts() {
    fetch("https://dummyjson.com/products")
        .then(
            function (response) {
                console.log(response);
                return response.json();
            },
            function (error) {
                alert("Something terrible has happened", error);
            }
        )
        .then(
            function (data) {
                for (const product of data.products) {
                    document.body.appendChild(createProductDiv(product));
                }
            },
            function (error) {
                alert("Something terrible has happened", error);
            }
        );
}

function loadUsers() {
    fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(console.log);
}
loadProducts();
loadUsers();
