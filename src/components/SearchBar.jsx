
function SearchBar({filter, handleChange, categories}) {
    console.log(filter);
    
    if (!filter) return null;
    
    return <>
        <form onSubmit={(event)=>event.preventDefault()}>
            <div>
                <input
                    name="search"
                    className="form-control"
                    type="text"
                    placeholder="Inserisci il nome del prodotto"
                    value={filter.search}
                    onChange={handleChange}
                />
                <select 
                name="category" 
                className="form-select" 
                value={filter.category} 
                onChange={handleChange}>
                    <option value="">Tutte le categorie</option>
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>
        </form>
    </>;
}
export default SearchBar;