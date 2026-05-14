import { Link, useParams, useNavigate, Navigate } from "react-router";
import { fetchSingleProductData } from "../src/hooks/SingleProductFetch";
import { useState } from "react";
import { useEffect } from "react";
import { fetchAllIds } from "../src/hooks/FetchAllIds";


function Prodotto() {

    const { productId } = useParams();
    const [productData, setProductData] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');
    const [idsArray, setIdsArray] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchAllIds()
            .then(ids => setIdsArray(ids))
            .catch(error => console.error('Id non trovato', error));

    }, []);

    useEffect(() => {
        setProductData(null);
        fetchSingleProductData(productId)
            .then(data => {
                setProductData(data);
            })
            .catch(error => {
                setErrorMsg(error.message)
            })
    }, [productId]);


    if (!productData) return <p>Caricamento...</p>;
    const { title, price, description, category, image, rating } = productData;

    const currentIndex = idsArray.indexOf(Number(productId));

    const prevBtn = () => {
        if (currentIndex > 0) {
            const prevId = idsArray[currentIndex - 1];
            navigate(`/prodotti/${prevId}`)
        }
    };

    const nextBtn = () => {
        if (currentIndex !== -1 && currentIndex < idsArray.length -1) {
            const nextId = idsArray[currentIndex + 1];
            navigate(`/prodotti/${nextId}`)
        }
    };

    // Per blocco se non ci più precedenti o successivi
    const isFirst = currentIndex <= 0;
    const isLast = currentIndex === idsArray.length -1;

    return <>
        <h1>{currentIndex}</h1>
        <div className="row justify-content-center">
            <div className="card-footer bg-white border-top-0 p-4">
                <div className="d-flex justify-content-between gap-2">
                    <button
                        className="btn btn-outline-dark fw-bold px-4 py-2 border-3"
                        onClick={prevBtn}
                        disabled={isFirst}
                    >
                        ← PRECEDENTE
                    </button>

                    <button
                        className="btn btn-warning fw-bold px-4 py-2 border-bottom border-5 border-dark"

                    >
                        <Link to='/prodotti'>
                            TORNA ALLO STORE
                        </Link>
                    </button>

                    <button
                        className="btn btn-outline-dark fw-bold px-4 py-2 border-3"
                        onClick={nextBtn}
                        disabled={isLast}
                    >
                        PROSSIMO →
                    </button>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card shadow-lg border-4 border-dark">
                    <div className="row g-0">
                        {/* Immagine Prodotto */}
                        <div className="col-md-5 bg-light d-flex align-items-center justify-content-center p-3">
                            <img
                                src={image}
                                alt={title}
                                className="img-fluid rounded shadow-sm"
                                style={{ maxHeight: '300px', filter: 'sepia(0.2)' }}
                            />
                        </div>

                        {/* Dettagli Prodotto */}
                        <div className="col-md-7">
                            <div className="card-body">
                                <span className="badge bg-warning text-dark mb-2 text-uppercase">{category}</span>
                                <h1 className="card-title h2 fw-bold text-uppercase">{title}</h1>

                                <div className="d-flex align-items-baseline gap-2 my-3">
                                    <span className="h3 fw-bold text-danger">{price}€</span>
                                </div>

                                <p className="card-text text-secondary fst-italic">
                                    "{description}"
                                </p>

                                <button className="btn btn-dark w-100 py-3 fw-bold border-bottom border-5 border-warning mt-3">
                                    AGGIUNGI ALLA LETTIERA
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Torna indietro, avanti e indietro */}

        </div>
        {errorMsg && <h1>{errorMsg}</h1>}
    </>
}

export default Prodotto;