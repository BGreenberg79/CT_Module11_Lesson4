// Task 1.2 Create Route Components
import { useState, useEffect } from 'react';
import axios from 'axios';

const BrowseCharacters = ({onSelectedCharacter}) => {
    const [fetchedCharacters, setFetchedCharacters] = useState([]);

    let ts = "1728768095246";
    let publicKey ="d439bcb5d546b0de1cbff183b2365de5";
    let hashVal ="77a953b9de082568b4b060eb0cfe1598";
    const apiMarvelURL = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hashVal}`;
    
    const retrieveCharacter =async () => {
        try{
            const response = await axios.get(apiMarvelURL);
            setFetchedCharacters(response.data.data.results);
        } catch (error) {console.error('Error retrieveing characters', error);
        }
    }

    useEffect(()=>{
        retrieveCharacter();
    }, []);

    return (
        <div>
            <h2>Characters</h2>
            <ul>
                {fetchedCharacters.map((character)=>(
                    <li key={character.id}>
                        Name: {character.name} <br />
                        <img onClick={()=>onSelectedCharacter(character)} src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default BrowseCharacters;