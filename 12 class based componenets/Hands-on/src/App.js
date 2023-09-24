import UserFinder from './components/UserFinder';
import Users from './components/Users';
import UsersContext from './store/users-context';


const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <div>
      {/* <Users /> */}
      {/* way to use context in class based compoennt */}
      <UsersContext.Provider value={usersContext}>
        <UserFinder></UserFinder>
      </UsersContext.Provider>
    </div>
  );
}

export default App;
