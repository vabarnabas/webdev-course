import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import welcome from '../markdown/welcome.md'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

const Navbar = (props) => {

    const { updateCount, setUpdateCount } = props

    const [showMenu, setShowMenu] = useState(false);

    const menuItems = [
        {
            name: 'A Web Története',
            link: '/storyofweb',
            isSolid: false,
        },
        {
            name: 'HTML',
            link: '/html',
            isSolid: false,
        },
        {
            name: 'CSS',
            link: '/css',
            isSolid: false,
        },
        {
            name: 'Javascript',
            link: '/javascript',
            isSolid: false,
        },
        {
            name: 'React',
            link: '/react',
            isSolid: false,
        },
        {
            name: 'Linkek',
            link: '/links',
            isSolid: false,
        },
    ]

    return (
        <div className='w-full h-12 fixed top-0 left-0 text-textWhite bg-editorDark flex items-center justify-center px-6 select-none'>
            <div onClick={() => {setShowMenu(false);setUpdateCount(updateCount+1)}} className="text-xs cursor-pointer mr-auto select-none">
                <Link to='/'>
                    <p className="">Webfejlesztés</p>
                    <p className="text-textBlue">Alapjai<span className='text-textYellow'>()</span></p>
                </Link>
            </div>
                <HiOutlineMenuAlt4 onClick={() => setShowMenu(!showMenu)} className='ml-auto text-2xl block md:hidden'/>
                <div onClick={() => setShowMenu(false)} className={`fixed top-12 w-full h-full bg-editorLight bg-opacity-70 ${showMenu ? 'block md:hidden' : 'hidden'}`}>
                    <div className="py-4 w-full text-center bg-editorDark">
                        {menuItems.map(item => (
                            <div onClick={() => setUpdateCount(updateCount+1)} key={uuidv4()} className="hover:bg-editorLight py-2 cursor-pointer">
                                <p className="">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

            <div className="text-xs ml-auto space-x-8 hidden md:flex">
                {menuItems.map(item => (
                    <div onClick={() => setUpdateCount(updateCount+1)} key={uuidv4()} className="hover:text-textBlue cursor-pointer">
                        <Link to={item.link} >
                            <p className="">{item.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Navbar
