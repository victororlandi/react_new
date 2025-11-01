import {Link} from "react-router-dom";
import ContadorPessoas from "./ContadorPessoas";
import "./index.css";
import mulher from "./mulher.png";
import homem from "./homem.png";
import { useState } from "react";

export default function Atv02(){

    const [countHomens, setCountHomens] = useState(0);
    const [countMulheres, setCountMulheres] = useState(0);
    const countTotal = countHomens + countMulheres;

    function ContadorHomensMais(){
        setCountHomens(countHomens + 1);
    }
    function ContadorHomensMenos(){
        setCountHomens(countHomens - 1);
    }

    function ContadorMulheresMais(){
        setCountMulheres(countMulheres + 1);
    }
    function ContadorMulheresMenos(){
        setCountMulheres(countMulheres - 1);
    }

    return(
        <>
            <h1>Atividade da Semana 2</h1>
            <div class="contagem-total">
                <div class="total">
                    <h2>Total</h2>
                    <div class="numero-total">
                        <p>{countTotal}</p>
                    </div>
                </div>
                
                <div class="contadores">
                    <div class="contador-homem">
                        <h2>Homens</h2>
                        <img src={homem} width="100px"/>
                        <ContadorPessoas 
                            value={countHomens} 
                            onIncrement={ContadorHomensMais} 
                            onDecrement={ContadorHomensMenos} 
                        />
                    </div>
                    <div class="contador-mulher">
                        <h2>Mulheres</h2>
                        <img src={mulher} width="100px"/>
                        <ContadorPessoas 
                            value={countMulheres} 
                            onIncrement={ContadorMulheresMais} 
                            onDecrement={ContadorMulheresMenos} 
                        />
                    </div>
                </div>
            </div>
            <div></div>
            <Link to="/">Voltar</Link>
        </>
    );
}