


function Homepage() {
    return <>
            <header className="bg-dark text-warning text-center py-5 border-bottom border-5 border-warning">
                <div className="container">
                    <h1 className="display-4 fw-bold">🐾 CATASTROPHIC DEALS</h1>
                    <p className="lead text-white fst-italic">"Qualità da Cani, Servizio da Gatti"</p>
                    <span className="badge bg-warning text-dark p-2 text-uppercase">Aperti solo quando non dormiamo</span>
                </div>
            </header>

            <main className="container my-5">
                <section className="row mb-5 justify-content-center">
                    <div className="col-md-8 text-center">
                        <h2 className="fw-bold border-start border-4 border-warning ps-3 d-inline-block">Benvenuti nello store peggiore dell'internet</h2>
                        <p className="lead mt-3">Gestito interamente da gatti senza alcuna esperienza nel commercio. Buttiamo la merce giù dagli scaffali per voi prima di spedirla (forse).</p>
                    </div>
                </section>

                <section className="mb-5">
                    <h3 className="h4 fw-bold mb-4 border-start border-4 border-warning ps-3">I Nostri "Best" Seller</h3>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 border-secondary">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Cuffie "Senza Fili"</h5>
                                    <p className="card-text small text-muted">Erano con i fili. Il CEO le ha masticate. Ora sono wireless (ma non funzionano).</p>
                                    <p className="h5 text-danger fw-bold">15.00€</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 border-secondary">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Vaso (Kit Puzzle)</h5>
                                    <p className="card-text small text-muted">Ex vaso di cristallo. Spedito in 400 pezzi unici. Un'emozione tagliente.</p>
                                    <p className="h5 text-danger fw-bold">29.99€</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 border-secondary">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Maglione Peloso</h5>
                                    <p className="card-text small text-muted">Lana acrilica ricoperta da uno strato naturale di 3cm di pelo di gatto rosso.</p>
                                    <p className="h5 text-danger fw-bold">12.50€</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 border-secondary">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Orologio Relativo</h5>
                                    <p className="card-text small text-muted">Funziona solo se il gatto non ci dorme sopra. Spesso segna l'ora della pappa.</p>
                                    <p className="h5 text-danger fw-bold">5.00€</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-5">
                    <h3 className="h4 fw-bold mb-4 border-start border-4 border-warning ps-3">Perché scegliere noi?</h3>
                    <div className="list-group shadow-sm">
                        <div className="list-group-item d-flex align-items-center">
                            <span className="me-3">📦</span>
                            <div><strong>Spedizioni "Forse":</strong> Spediamo solo se la scatola non ci serve per giocare.</div>
                        </div>
                        <div className="list-group-item d-flex align-items-center">
                            <span className="me-3">🦷</span>
                            <div><strong>Qualità Masticata:</strong> Ogni pezzo è testato personalmente dai nostri denti.</div>
                        </div>
                        <div className="list-group-item d-flex align-items-center">
                            <span className="me-3">😾</span>
                            <div><strong>Customer Care:</strong> Chiamaci per ascoltare 10 minuti di fusa o soffi repentini.</div>
                        </div>
                    </div>
                </section>

                <section className="mb-5">
                    <h3 className="h4 fw-bold mb-4 border-start border-4 border-warning ps-3">Feedback degli Umani</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <blockquote className="blockquote bg-white p-4 rounded border">
                                <p className="mb-0 small fst-italic">"Ho ricevuto una lucertola morta al posto del caricabatterie. Il mio gatto dice che è il miglior acquisto di sempre."</p>
                                <footer className="blockquote-footer mt-2">Umano Sottomesso</footer>
                            </blockquote>
                        </div>
                        <div className="col-md-6">
                            <blockquote className="blockquote bg-white p-4 rounded border">
                                <p className="mb-0 small fst-italic">"Il pacco profumava di tonno e non è mai arrivato. Cinque stelle per il coraggio."</p>
                                <footer className="blockquote-footer mt-2">Cliente Rassegnato</footer>
                            </blockquote>
                        </div>
                    </div>
                </section>
            </main>
    </>;
}
export default Homepage;
