import React from 'react'
import SideMenu from './SideMenu'
import LiveChannels from './LiveChannels'

const MainPage = () => {
  return (
       <div className='absolute left-[64px] xl:left-[220px]'>
        <LiveChannels />
       </div>
  )
}

export default MainPage