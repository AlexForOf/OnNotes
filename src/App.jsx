import React from 'react';
import './App.css';


// Router

import { Route, Routes } from "react-router-dom";


// Firebase functions

import { signInAnonymously } from 'firebase/auth';

import { auth } from './firebase';
import { getDatabase, ref, set } from 'firebase/database';


import { AuthContext } from './context/AuthContext';

import { DrawerMenu } from './components/DrawerMenu';

import { Main } from './pages/Main/Main';
import { Groups } from './pages/Groups/Groups';
import { Controls } from './pages/Controls/Controls';
import { Profile } from './pages/Profile/Profile';

function App() {

  const [currentAuth, setCurrentAuth] = React.useState(null)

  const getCurrentDimension = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }
  
  const writeNoteData = (note) => {
    const db = getDatabase();
    set(ref(db, "users/" + currentAuth.currentUser.uid + "/notes/" + note.id), {
      title: note.title,
      content: note.content,
      id: note.id
    })
  }



  const [screenSize, setScreenSize] = React.useState(getCurrentDimension())

  React.useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension)
    }
    window.addEventListener('resize', updateDimension)

    return(() => {
      window.removeEventListener('resize', updateDimension)
    })
  }, [screenSize])

  React.useEffect(() => {
    const anonymousSignIn = () => {
      signInAnonymously(auth)
      .then(() => (
        setCurrentAuth(auth)
      ))
      .catch((err) => {
        console.log(err)
      })
    }

    return anonymousSignIn;
  }, [currentAuth])

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(prevIsDrawerOpen => !prevIsDrawerOpen)
  }

  return (
      <div className='appcontent'>
        {/* <Header /> */}
        <div className='maincontent'>
          <DrawerMenu isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
          <div className='maincontent-content'>
          <AuthContext.Provider value={currentAuth}>
            <Routes>
              <Route path='/' element={<Main screenSize={screenSize} writeNoteData={writeNoteData}/>} />
              <Route path='/groups' element={<Groups />} />
              <Route path='/controls' element={<Controls />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          </AuthContext.Provider>
          </div>
        </div>
      </div>  
  );
}

export default App;
