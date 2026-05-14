import React from 'react';

function NotFound() {
    return (
        <>
            <div className="container-fluid min-vh-100 d-flex align-items-center bg-danger text-white overflow-hidden" style={{ position: 'relative' }}>

                {/* Elementi decorativi di disturbo (Z-index a caso) */}
                <div style={{ position: 'absolute', top: '-50px', left: '-50px', fontSize: '200px', opacity: 0.2, transform: 'rotate(-15deg)' }}>
                    😿
                </div>
                <div style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '150px', opacity: 0.1 }}>
                    🐟
                </div>

                <div className="container text-center" style={{ zIndex: 10 }}>
                    <div className="row justify-content-center">
                        <div className="col-md-8">

                            {/* Il Numero dell'errore */}
                            <h1 className="display-1 fw-bold mb-0" style={{ fontSize: '12rem', letterSpacing: '-10px', filter: 'blur(1px)' }}>
                                404
                            </h1>

                            <h2 className="h1 fw-black text-uppercase bg-white text-danger d-inline-block px-4 py-2 mb-4" style={{ transform: 'skewY(-3deg)' }}>
                                MIAO! PAGINA MANGIATA.
                            </h2>

                            <p className="lead mb-5 shadow-sm p-3 bg-dark rounded">
                                Siamo onesti: cercavi un prodotto scadente, ma hai trovato il <strong>nulla cosmico</strong>.
                                Probabilmente il nostro sviluppatore (un Persiano di 7kg) ha scambiato il cavo del server per un filo interdentale.
                            </p>

                            {/* Opzioni per l'utente disperato */}
                            <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
                                <button
                                    className="btn btn-warning btn-lg fw-bold px-5 border-bottom border-5 border-dark"
                                    onClick={() => window.location.href = '/'}
                                >
                                    TORNA ALLA HOME (FORSE)
                                </button>

                                <button
                                    className="btn btn-outline-light btn-lg"
                                    onClick={() => alert('Abbiamo ignorato il tuo click. Riprova tra 18 ore dopo il nostro riposino.')}
                                >
                                    DENUNCIA AI CARABINIERI
                                </button>
                            </div>

                            {/* Immagine placeholder "Rotta" */}
                            <div className="mt-5 p-4 border border-4 border-white border-dashed rounded" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                                <p className="mb-0 small fst-italic">
                                    [QUI DOVEVA ESSERCI UNA GIF DI UN GATTO CHE CHIEDE SCUSA, MA NON ABBIAMO PAGATO L'HOSTING]
                                </p>
                                <div className="mt-2" style={{ fontSize: '3rem' }}>🔌 🐈</div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Testo che scorre in fondo palesemente buggato */}
                <div className="fixed-bottom bg-dark py-2">
                    <marquee scrollamount="15" className="text-warning fw-bold">
                        ERRORE CRITICO -- IL GATTO È SUL SERVER -- NON CLICCARE NIENTE -- STIAMO PERDENDO TUTTI I TUOI DATI -- MIAO MIAO MIAO
                    </marquee>
                </div>
            </div>
        </>
    );
}

export default NotFound;