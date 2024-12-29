import CharacterItem from './CharacterItem';

function CharacterGrid({ isLoading, items }) {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <CharacterItem item={item} key={item.id}/>
      ))}
    </section>
  );
}

export default CharacterGrid;
