import { useProducts } from "./useProducts";


const API_URL = 'https://fakestoreapi.com/products';

// Esportiamo la funzione che accetta l'ID come parametro
export function fetchSingleProductData(productId) {
    return fetch(`${API_URL}/${productId}`)
        .then(response => {
            if (response.status === 404) {
                throw new Error('Pagina non trovata');
            }
            return response.json();
        })
        .then(json => json);
}