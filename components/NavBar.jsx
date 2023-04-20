import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import Logo from '../public/assets/logo.png'
import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import {BsThreeDotsVertical, BsSearch, BsPerson} from 'react-icons/bs'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px] justify-between z-10'>
        {/* Left Side */}
        <div className='flex grow items-center justify-start'>
         <Link href = "/">
                <Image src={Logo} width={36} height={36} className='cursor-pointer z-10' />
         </Link>
         <p className='p-4'>Browse</p>
         <div className='p-4'>
         <Menu as='div' className='relative text-left'>
            <div className='flex'>
              <Menu.Button>
                <BsThreeDotsVertical size={20} />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        License
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
         </div>
        </div>

        {/* Middle */}
        <div className='hidden md:flex grow-[2] items-center justify-center'>
            <div className='bg-gray-500 flex justify-between items-center w-full max-w-[400px] m-auto p-2 rounded-2xl'>
                <div>
                    <input type="text" className='bg-transparent border-none text-white focus:outline-none' placeholder='Search' />
                </div>
                <div>
                    <BsSearch />
                </div>
            </div>
        </div>

        {/* Right Side */}
        <div className='hidden md:flex grow items-center justify-end'>
             <div className='flex items-center'>
                <Link href='/Account'>
                <button className='px-4 py-[6px] rounded-lg font-bold bg-[#9147ff]'>Account</button>
                </Link>
                <BsPerson className='mx-2' size={30} />
             </div>
        </div>

        {/* Hamburger Menu */}

        <div onClick={handleNav} className='block md:hidden cursor-pointer z-10'>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        {/* Mobile Menu */}
        <div className={nav ? " md:hidden fixed top-0 left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300" : "md:hidden fixed top-[-100%] left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300"}>
            <ul className='text-center'>
                <li className='p-4 text-3xl font-bold'><Link href="/">Home</Link></li>
                <li className='p-4 text-3xl font-bold'><Link href="/">Live Channels</Link></li>
                <li className='p-4 text-3xl font-bold'><Link href="/">Top Categories</Link></li>
                <li className='p-4 text-3xl font-bold'><Link href="/Account">Account</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar