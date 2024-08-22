import React from 'react';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
    return (
        <UserContextProvider>
            {/* <h1 className='bg-red-800'>React with Chai</h1> */}
            <Login />
            <Profile />
            {/* <Button>Sub</Button> */}
        </UserContextProvider>
    );
}

export default App;
