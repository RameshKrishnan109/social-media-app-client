import { useState } from 'react'
import LoginPage from './components/LoginPage'
import MainPage from './components/MainPage'
import { UseGlobalStore } from './zustand/GlobalStore';

function App() {

  const {currentPage} = UseGlobalStore();

  return (
    <div>
      {currentPage == 0 && <LoginPage />}
      {currentPage == 1 && <MainPage />}
      
    </div>
  )
}

export default App
