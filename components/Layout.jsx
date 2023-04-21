import React from 'react'
import SideMenu from './SideMenu'
import MainPage from './MainPage'


const Layout = () => {
  return (
    <div className='pt-[60px] flex w-full'>
    <SideMenu />
    <MainPage />
</div>
  )
}

export default Layout