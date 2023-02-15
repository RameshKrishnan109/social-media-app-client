import { useState } from 'react'
import LoginPage from './components/LoginPage'
import MainPage from './components/MainPage'
import { UsePageStore } from './zustand/PageStore';

function App() {

  const {currentPage} = UsePageStore();

  return (
    <div>
      {currentPage == 0 && <LoginPage />}
      {currentPage == 1 && <MainPage />}
      
    </div>
  )
}

export default App
