import Spinner from '../../Spinner';
import CharacterItem from './CharacterItem';

function CharacterGrid({ isLoading, items }) {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <CharacterItem item={item} key={item.id} />
      ))}
    </section>
  );
}

export default CharacterGrid;
