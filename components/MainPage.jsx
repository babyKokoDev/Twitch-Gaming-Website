import React from 'react'
import SideMenu from './SideMenu'
import LiveChannels from './LiveChannels'
import Hero from './Hero'

const MainPage = () => {
  return (
       <div className='absolute left-[64px] xl:left-[220px]'>
        <Hero />
        <LiveChannels />
       </div>
  )
}

export default MainPage