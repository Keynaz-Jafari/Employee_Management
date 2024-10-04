import React from 'react'
import sidebar from '../../constants/sidebar'
import { Link } from 'react-router-dom'
import { IoMdMenu } from 'react-icons/io'


const Desktoplayout = ({ buttonClick, activePage }: { buttonClick: () => any, activePage: string }) => {

    return (
        <>
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col font-semibold">
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
                    <div className="flex h-16 shrink-0 items-center">
                  
                        <h1 className='text-white ml-2 text-[15px]'>Quera Employ Management</h1>
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {sidebar.map((item: any) => (
                                        <li key={item.name}>
                                            <Link
                                                to={`/${item.name.toLowerCase()}`}
                                                className={`${"/" + item.name.toLowerCase() === activePage ? 'bg-gray-800' : 'bg-gray-900'} text-white group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`}
                                            >
                                                {item.icon}
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>


                        </ul>
                    </nav>
                </div>
            </div>
            <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
                <button onClick={buttonClick} type="button" className="-m-2.5 p-2.5 text-gray-400 lg:hidden">
                    <IoMdMenu />

                </button>
                <div className="flex-1 text-sm font-semibold leading-6 text-white">
                    Dashboard
                </div>

            </div>
        </>
    )
}

export default Desktoplayout
