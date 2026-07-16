import { Link } from "react-router";

export const Home = () => {
    return (
        <div>
            <div className="hero">
                <img src="./src/assets/hero.jpg" alt="" className="hero-img" />

                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <h2>Benvenuto su Currency Monitor</h2>
                    <h3>Confronta tassi e controlla lo storico recente</h3>

                    <div className="hero-actions">
                        <Link className="link" to="/currency">Guarda gli andamenti</Link>
                        <Link className="link" to="/exchange">Accedi agli scambi</Link>
                    </div>
                </div>
            </div>

            <section className="features">
                <h2>Cosa puoi fare</h2>

                <div className="features-grid">
                    <article className="feature-card">
                        <h3>Andamenti recenti</h3>
                        <p>Controlla l'andamento delle valute negli ultimi periodi.</p>
                    </article>

                    <article className="feature-card">
                        <h3>Scambi rapidi</h3>
                        <p>Consulta velocemente i cambi tra le valute principali.</p>
                    </article>

                    <article className="feature-card">
                        <h3>Confronto semplice</h3>
                        <p>Passa tra sezioni diverse in modo immediato.</p>
                    </article>

                    <article className="feature-card">
                        <h3>Valute principali</h3>
                        <p>Segui le monete più usate in un'interfaccia chiara.</p>
                    </article>

                    <article className="feature-card">
                        <h3>Navigazione veloce</h3>
                        <p>Raggiungi direttamente andamento e scambi dalla home.</p>
                    </article>

                    <article className="feature-card">
                        <h3>Dati sempre aggiornati</h3>
                        <p>Consulta i cambi più recenti grazie a un'API esterna attendibile.</p>
                    </article>
                </div>
            </section>
        </div>
    );
};