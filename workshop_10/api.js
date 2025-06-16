fetch("https://dummyjson.com/products")
    .then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for (const product of data.products) {
            const productDiv = document.createElement("div");
            productDiv.innerHTML = (`
                <span>${product.title}</span>
                <img src="${product.thumbnail}"/>
            `);
            document.body.appendChild(productDiv);
        }
    })