import { useState, useEffect } from "react";
import axios from "axios";
import BrowseCharacters from "./BrowseCharacters";
import CharacterDetail from "./CharacterDetail";
import Comics from "./Comics"
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import './NavStyles.css'
import NavBar from "./NavBar";
import CharacterDetailWrapper from "./CharacterDetailsWrapper";

// Task 1.3 Setting Up Routes

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const onSelectedCharacter = (character) => {
    setSelectedCharacter(character.id);
  }

  return (
    <div>
      <NavBar/>
      <h1>Marvel API</h1>
      {/* <BrowseCharacters onSelectedCharacter = {onSelectedCharacter}
      />
      <CharacterDetail selectedCharacter = {selectedCharacter}/> */}

      <Routes>
        <Route path="/browse-characters/" element={< BrowseCharacters onSelectedCharacter={onSelectedCharacter}/>}/>
        <Route path='/character-details/:id' element={< CharacterDetailWrapper selectedCharacter={selectedCharacter}/>}/>
        <Route path="/comics/" element={<Comics/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App
