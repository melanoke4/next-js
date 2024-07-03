import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH
import Counter from '../components/Counter';

function Home() {
  const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH
  const counters = [{ title: 'Counter 1' }, { title: 'Counter 2' }, { title: 'Counter 3' }];
  // const user = { displayName: 'Dr. T' }; // TODO: COMMENT OUT FOR AUTH
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.displayName}! </h1>

      {counters.map((counter) => (
        <Counter key={counter.title} title={counter.title} />
      ))}
    </div>
  );
}

export default Home;
