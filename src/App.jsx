import React from 'react';
import './App.css';

import { Main } from './pages/Main/Main';

// import { Header } from './components/Header';
import { DrawerMenu } from './components/DrawerMenu';

import { Route, Routes } from "react-router-dom";
import { Groups } from './pages/Groups/Groups';
import { Controls } from './pages/Controls/Controls';
import { Profile } from './pages/Profile/Profile';


function App() {

  const getCurrentDimension = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
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
            <Routes>
              <Route path='/' element={<Main screenSize={screenSize}/>} />
              <Route path='/groups' element={<Groups />} />
              <Route path='/controls' element={<Controls />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>  
  );
}

export default App;
