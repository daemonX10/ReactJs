import React from 'react'
import UserContextProvider from './context/UserContext.jsx';
import Login from './components/Login';
import Profile from './components/Profile';

const App = () => {
  return (
    <UserContextProvider>
    <h1>
      Context API
    </h1>
    <Login />
    <Profile/>
    </UserContextProvider>
  )
}

export default App