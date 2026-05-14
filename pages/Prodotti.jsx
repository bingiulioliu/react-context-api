import { NavLink } from "react-router";
import ProductCard from "../src/components/ProductCard";
import SearchBar from "../src/components/SearchBar";
import { fetchSingleProductData } from "../src/hooks/SingleProductFetch";
import { useProducts } from "../src/hooks/useProducts";
import { useContext } from "react";
import { BudgetContext } from "../src/context/BudgetContext";



function Prodotti() {
    

    const { filter, filteredProducts, handleChange, categories } = useContext(BudgetContext);

    if (filteredProducts.length === 0 && filter.search === '') {
        return <div className="container mt-5 text-center"><p>Caricamento prodotti...</p></div>;
    }

    return <>

        <h1>Prodotti</h1>
        <SearchBar
            filter={filter}
            handleChange={handleChange}
            categories={categories}
        />
        <div className="container">
            <div className="row g-4">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div key={product.id} className="col-md-4 col-lg-3">
                        <NavLink to={`/prodotti/${product.id}`}>
                            <ProductCard
                                image={product.image}
                                title={product.title}
                                category={product.category}
                                price={product.price}
                            />
                        </NavLink>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-5">
                        <p className="text-muted">Nessun prodotto trovato.</p>
                    </div>
                )}
            </div>
        </div>

    </>;
}

export default Prodotti;