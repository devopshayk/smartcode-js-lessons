let container = document.querySelector(".container");

function loadUsers() {
    container.innerHTML = ''; // Очистка контейнера перед загрузкой новых данных
    fetch("https://dummyjson.com/users")
        .then((data) => data.json())
        .then((userData) => {
            userData.users.forEach((user) => {
                container.insertAdjacentHTML(
                    "beforeend",
                    `
                    <div class="userCard">
                        <img src=${user.image} alt="User Image">
                        <h1>${user.firstName}</h1>
                        <h1>${user.lastName}</h1>
                        <p>${user.age}</p>
                    </div>
                    `
                );
            });
        });
}

function loadProducts() {
    container.innerHTML = '';

    fetch("https://dummyjson.com/products")
        .then((data) => data.json())
        .then((productData) => {
            productData.products.forEach((product) => {
                container.insertAdjacentHTML(
                    "beforeend",
                    `
                    <div class="productCard">
                        <img src=${product.thumbnail} alt="Product Image">
                        <h1>${product.title}</h1>
                        <p>${product.description}</p>
                    </div>
                    `
                );
            });
        });
}

function loadPosts() {
    container.innerHTML = '';

    fetch("https://dummyjson.com/posts")
        .then((data) => data.json())
        .then((postData) => {
            postData.posts.forEach((post) => {
                container.insertAdjacentHTML(
                    "beforeend",
                    `
                    <div class="postCard">
                        <h1>${post.title}</h1>
                        <p>${post.tags}</p>
                    </div>
                    `
                );
            });
        });
}
