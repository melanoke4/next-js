import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH
import { useState } from 'react';

function Home() {
  const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((prevState) => prevState + 1);
  };

  return (
    <>
      <h1>Counter Title</h1>
      <h2>{value}</h2>
      <Button type="button" onClick={handleClick}>Increment</Button>
      <Button type="button" onClick={() => setValue((prevState) => prevState - 1)}>Decrement</Button>
      <Button type="button" onClick={() => setValue(0)}>Reset</Button>
    </>
  );
}

export default Home;
