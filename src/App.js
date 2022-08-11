import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import { useState } from 'react';
import {signOut} from 'firebase/auth'


import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CreatePost from './pages/CreatePost'
import {auth} from './firebase-config'

function App() {
  const  [isAuth,setIsAuth] = useState(localStorage.getItem('isAuth'));

  const signUserOut = () =>{
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = '/login'
    })
  }
  
  
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        {!isAuth ?(<Link to="/login">Login</Link>) : (
        <>
          <Link to="/create">Create Post</Link>
          <input className='searchInput' placeholder='Search...'/>
          <button className='logOutBtn' onClick={signUserOut}>Log Out</button>
        </>)}
      </nav>
      <Routes>
        <Route path='/' element={<HomePage isAuth={isAuth}/>}/>
          <Route path="/create" element={<CreatePost isAuth={isAuth} />} />
          <Route path='/login' element={<LoginPage setIsAuth={setIsAuth}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
