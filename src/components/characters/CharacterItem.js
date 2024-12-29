function CharacterItem({ item }) {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.image} alt='' />
        </div>
        <div className='card-back'>
          <h1>Status: {item.status}</h1>
          <ul>
            <li>
              <strong>Actor Name: </strong>
              {item.name}
            </li>
            <li>
              <strong>Gender: </strong>
              {item.gender}
            </li>
            <li>
              <strong>Location: </strong>
              {item.location.name}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CharacterItem;
