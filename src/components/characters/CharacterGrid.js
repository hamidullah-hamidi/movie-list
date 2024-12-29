import Spinner from '../Spinner';
import CharacterItem from './CharacterItem';

function CharacterGrid({ items, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='cards'>
          {items.map((item) => (
            <CharacterItem item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CharacterGrid;
