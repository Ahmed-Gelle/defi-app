import React from 'react'
import logo from '../../../assets/logo.png'

function Menu() {
  return (
    <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>
  )
}

export default Menu


export function Hero() {
    return (
        <div className="bg-white">
            <header className="bg-[#FCF8F1] bg-opacity-30">
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                            <a href="#" title="" className="flex">
                                <img className="w-auto h-8" src={logo} alt="" />
                            </a>
                        </div>

                        <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"></button>
                        </div>
                        </div>
                        </header>
                        </div>
    )
}
                            