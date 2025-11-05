import { Link } from "react-router-dom";
import Gallery from "./Gallery.js";
import { Profile } from "./Gallery.js";
import TodoList from "./TodoList.js";
import Avatar from "./Avatar.js";

export default function Atv03(){
    return(
        <>
            <h1>Atividade da Semana 3</h1>
            <Gallery />
            <Profile />
            <TodoList />
            <Avatar />
            <Link to="/">Voltar</Link>
        </>
    );
}