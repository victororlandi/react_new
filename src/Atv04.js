import {Link} from "react-router-dom";
import Toolbarsemana4 from "./Toolbarsemana4.js";
import Gallerysemana4 from "./Gallerysemana4.js";
import Countersemana4 from "./Countersemana4.js";
import Formsemana4 from "./Formsemana4.js";
import MovingDotsemana4 from "./MovingDotsemana4.js";
import Form2semana4 from "./Form2semana4.js";
import Form3semana4 from "./Form3semana4.js";
import Listsemana4 from "./Listsemana4.js";
import List2semana4 from "./List2semana4.js";
import ShapeEditorsemana4 from "./ShapeEditorsemana4.js";
import CounterListsemana4 from "./CounterListsemana4.js";
import List3semana4 from "./List3semana4.js";
import List4semana4 from "./List4semana4.js";
import BucketListsemana4 from "./BucketListsemana4.js";



export default function Atv04(){

    const estilo = {
     borderStyle: 'solid',
     backgroundColor: 'rgba(203, 219, 215, 1)',
     margin: '25px',
     padding: '10px',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'flex-start'
    };

    return(
        <>
            <h1>Atividade da Semana 4</h1>
            <div style={estilo}>
                <Toolbarsemana4/>
            </div>
            <div style={estilo}>
                <Gallerysemana4/>
            </div>
            <div style={estilo}>
                <Countersemana4/>
            </div>
            <div style={estilo}>
                <Formsemana4/>
            </div>
            <div style={estilo}>
                <MovingDotsemana4/>
            </div>
            <div style={estilo}>
                <Form2semana4/>
            </div>
            <div style={estilo}>
                <Form3semana4/>
            </div>
            <div style={estilo}>
                <Listsemana4/>
            </div>
            <div style={estilo}>
                <List2semana4/>
            </div>
            <div style={estilo}>
                <h4>Vá para o início da página.
                    As formas estão lá.
                    Não consegui fazê-las ficarem dentro da div.
                </h4>
                <ShapeEditorsemana4/>
            </div>
            <div style={estilo}>
                <CounterListsemana4/>
            </div>
            <div style={estilo}>
                <List3semana4/>
            </div>
            <div style={estilo}>
                <List4semana4/>
            </div>
            <div style={estilo}>
                <BucketListsemana4/>
            </div>
            

            <Link to="/">Voltar</Link>
        </>
    );
}