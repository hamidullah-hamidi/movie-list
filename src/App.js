import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { useEffect } from 'react';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './Search';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function fetchItems() {
      const res = await fetch(`https://rickandmortyapi.com/api/character?name=${query}`);
      const data = await res.json();

      setItems(data.results);
      setIsLoading(false);
      console.log(data);
    }
    fetchItems();
  }, [query]);

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
