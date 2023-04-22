import React from 'react'
import SideMenu from './SideMenu'
import LiveChannels from './LiveChannels'
import Hero from './Hero'
import IconBar from './IconBar'
import Categories from './Categories'

const MainPage = () => {
  return (
       <div className='absolute left-[64px] xl:left-[250px] pl-3'>
        <Hero />
        <LiveChannels />
        <IconBar />
        <Categories />
       </div>
  )
}

export default MainPage