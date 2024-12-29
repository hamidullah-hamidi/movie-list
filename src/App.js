import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { useEffect } from 'react';
import CharacterGrid from './components/characters/CharacterGrid';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchItems() {
      const res = await fetch('https://rickandmortyapi.com/api/character');
      const data = await res.json();

      setItems(data.results);
      setIsLoading(false);
      console.log(data);
    }
    fetchItems();
  }, []);

  return (
    <div className='container'>
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
