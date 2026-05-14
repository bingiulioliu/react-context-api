

function ChiSiamo() {

    return <>

        <main className="container my-5">
            {/* Header Pagina About Us */}
            <section className="text-center mb-5">
                <h1 className="display-1 fw-black text-uppercase border-bottom border-5 border-danger d-inline-block">
                    CHI S1AMO (FORSE)
                </h1>
                <p className="lead text-muted mt-2">
                    Pagina scritta da <i>Birba</i> (Direttore Logistica) mentre cercava di catturare il cursore del mouse.
                </p>
            </section>

            {/* La Nostra Storia (Disastrosa) */}
            <div className="row align-items-center mb-5">
                <div className="col-md-6">
                    <h2 className="h3 fw-bold text-primary">La nostra Storia</h2>
                    <p>
                        Tutto è iniziato nel 2024, quando abbiamo capito che potevamo smettere di miagolare per il cibo
                        e iniziare a vendere la spazzatura che troviamo sotto il divano. Siamo partiti con un capitale
                        sociale di <strong>3 croccantini</strong> e una scatola di Amazon vuota.
                    </p>
                    <div className="alert alert-warning border-dash">
                        <strong>NOTA:</strong> Il nostro ufficio legale è composto da un gatto di marmo che non risponde mai alle mail.
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    {/* Simulo una foto caricata male */}
                    <div
                        className="bg-secondary text-white p-5 rounded-pill shadow-sm"
                        style={{ transform: 'rotate(15deg)', opacity: 0.5 }}
                    >
                        [QUI DOVEVA ESSERCI UNA FOTO FIGA DEL TEAM, MA L'ABBIAMO CANCELLATA PER SBAGLIO]
                    </div>
                </div>
            </div>

            {/* Il Team (Organigramma Caotico) */}
            <section className="mb-5">
                <h2 className="h3 fw-bold mb-4 text-center">Il Nostro "Team" di Esperti</h2>
                <div className="row g-4 text-center">
                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="display-3 pt-3">🐈‍⬛</div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Lord Muffins</h5>
                                <p className="badge bg-danger">CEO & Fondatore</p>
                                <p className="card-text small">
                                    Passa l'80% del tempo a fissare il muro. Prende decisioni basandosi sul movimento della sua coda.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm h-100 bg-dark text-white">
                            <div className="display-3 pt-3">🐈</div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Luna</h5>
                                <p className="badge bg-info">Responsabile Customer Care</p>
                                <p className="card-text small">
                                    Specializzata nel soffiare ai clienti insoddisfatti. Non accetta rimborsi, solo carezze.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" style={{ marginTop: '100px' }}> {/* Errore di allineamento palese */}
                        <div className="card border-3 border-warning h-100">
                            <div className="display-3 pt-3">🐾</div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Un Umano Qualunque</h5>
                                <p className="badge bg-secondary text-dark">Schiavo delle tastiere</p>
                                <p className="card-text small">
                                    È qui solo per pulire le lettiere e cliccare "Pubblica". Non ha potere decisionale.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* La Nostra Mission (Assurda) */}
            <section
                className="bg-white p-5 rounded shadow-lg mb-5"
                style={{ border: '10px solid pink' }}
            >
                <h2 className="h1 text-center mb-4" style={{ fontFamily: '"Comic Sans MS", cursive' }}>
                    La Nostra Miss1one
                </h2>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <div className="h1 text-warning">1.</div>
                        <p>Riempire il mondo di peli di gatto, un ordine alla volta.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="h1 text-warning">2.</div>
                        <p>Convincere gli umani che un vaso rotto è "arte moderna".</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="h1 text-warning">3.</div>
                        <p>Dominazione globale. (E scatolette di tonno gratis).</p>
                    </div>
                </div>
            </section>

            {/* Sezione "Dove siamo" che non aiuta nessuno */}
            <section className="text-center py-5 bg-info text-white rounded">
                <h3>Dove siamo?</h3>
                <p className="mb-0">Siamo esattamente <strong>dietro di te</strong>.</p>
                <p className="small">(Oppure sotto il letto, dipende se è passato l'aspirapolvere).</p>
                <div className="mt-4">
                    <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => alert('NON FUNZIONA, MIAO!')}
                    >
                        Vedi Mappa (Rotta)
                    </button>
                </div>
            </section>
        </main>

    </>
};

export default ChiSiamo;