import { Link } from "react-router-dom";
import Gallery from "./Gallery.js";
import { Profile } from "./Gallery.js";
import TodoList from "./TodoList.js";
import Avatar from "./Avatar.js";
import Utils from "./Utils.js";
import PackingList from "./PackingList.js";
import TesteMapFilter from "./TesteMapFilter.js";
import Recipes from "./Recipe.js";

export default function Atv03(){
    return(
        <>
            <h1>Atividade da Semana 3</h1>
            <Gallery />
            <Profile />
            <TodoList />
            <Avatar />
            <Utils />
            <PackingList />
            <TesteMapFilter />
            <Recipes />
            <Link to="/">Voltar</Link>
        </>
    );
}