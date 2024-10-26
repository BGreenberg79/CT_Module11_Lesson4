import { useParams } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";

function CharacterDetailWrapper() {
    let {id} = useParams()

    return <CharacterDetail id={id}/>}

export default CharacterDetailWrapper