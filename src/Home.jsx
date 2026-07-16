import React from "react";
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
        </div>
    )
}