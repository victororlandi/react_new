import minus from "./minus.png";
import plus from "./plus.png";
import "./index.css";

export default function ContadorPessoas({value, onIncrement, onDecrement}){
    return(
        <>
        <div class="contador">
            <div class="buttons">
                <img 
                    class="button" 
                    src={plus} 
                    width="32px" 
                    onClick={onIncrement} 
                />
                <img 
                    class="button" 
                    src={minus} 
                    width="30px" 
                    onClick = {() => {if (value > 0) onDecrement();}} 
                />
            </div>
            <div class="resultado">
                <p>{value}</p>
            </div>
        </div>
        </>
    );
}