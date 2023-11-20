import './App.css';
import Login from './component/login';
import Profile from './component/profile';
import UserContextProvider from './context/userContextProvider';

function App() {

  return (
    <UserContextProvider>
      <h1>React With Chai and Share Is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
