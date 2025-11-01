import React from "react";
import {Link} from "react-router-dom";
import "./index.css";

const Home = ()=> {
    return(
        <>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Atv01">Atividade 1</Link>
                    </li>
                    <li>
                        <Link to="/Atv02">Atividade 2</Link>
                    </li>
                    <li>
                        <Link to="/Atv03">Atividade 3</Link>
                    </li>
                    <li>
                        <Link to="/Atv04">Atividade 4</Link>
                    </li>
                    <li>
                        <Link to="/Atv05">Atividade 5</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Home;