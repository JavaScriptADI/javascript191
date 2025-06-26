const productsDiv = document.querySelector("#products");
const usersDiv = document.querySelector("#users")
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

const createUserDiv = (user) => {
    const div = document.createElement("div");

    div.innerHTML = (`
        <div class="mb-3 user rounded"
            data-bs-toggle="popover" 
            data-bs-placement="bottom"
            data-bs-title="${user.email}"
        >
            <img src=${user.image} class="rounded rounded-circle" style="width: 24px; height: 24px"/>
            <span>${user.username}</span>
        </div>
    `);

    return div;
};

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
                    productsDiv.appendChild(createProductDiv(product));
                }
            },
            function (error) {
                alert("Something terrible has happened", error);
            }
        );
}

function loadUsers() {
    fetch('https://dummyjson.com/users')
        // arrow functions
        .then(res => res.json()) // this arrow function immediately return response.json()
        .then((data) => {
            // this arrow function has a body
            console.log(data);
            data.users.forEach((user) => {
                usersDiv.appendChild(
                    createUserDiv(user)
                );
            });
            const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
            const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
        });
}
loadProducts();
loadUsers();

