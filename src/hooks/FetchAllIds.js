// recupero l'array con tutti gli id per scorrere index

export function fetchAllIds() {
    return fetch('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(products=>products.map(product=>product.id));
}