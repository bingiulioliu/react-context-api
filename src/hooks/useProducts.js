import { useState, useEffect } from 'react';

// Se API_URL non è globale, passalo come argomento o importalo
const API_URL = 'https://fakestoreapi.com/products';

export function useProducts() {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState({
        search: '',
        category: ''
    });


    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Errore fetch:", err));
    }, []);

    const handleChange = (event) => {
        event.preventDefault
        const { name, value, type, checked } = event.target;
        const valueToUpdate = type === "checkbox" ? checked : value;

        setFilter(prev => ({ ...prev, [name]: valueToUpdate }));
    };

    // Logica di filtraggio
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(filter.search.toLowerCase());
        const matchesCategory = filter.category === '' || product.category === filter.category;
        return matchesSearch && matchesCategory;
    });

    // Esportiamo quello che serve al componente
    return {
        filter,
        filteredProducts,
        handleChange,
        // Esportiamo anche l'elenco originale delle categorie per la select (opzionale)
        categories: [...new Set(products.map(p => p.category))]
    };
}