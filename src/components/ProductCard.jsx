

function ProductCard({image, title, category, price}) {
    return <>
        <div className="card h-100 shadow-sm d-flex">
            <img src={image} className="card-img-top" style={{ padding: '10px', objectFit: 'contain', height: '200px' }}/>
            <div className="card-body">
                <p className="card-title fw-bold" style={{height: '100px' }}>{title}</p>
                <p className="card-text">{category}</p>
                <p className="card-text">${price}</p>
            </div>
        </div>
    </>;
}
export default ProductCard;