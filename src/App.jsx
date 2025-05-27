import React from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import Blog from './components/Blog';

const App = () => {
  return (
    <div className='min-h-screen w-full bg-gray-200'>
      <Header />
      <Hero />
      <Blog />
    </div>
  )
}

export default App;