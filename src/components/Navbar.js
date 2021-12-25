import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import welcome from '../markdown/welcome.md'
import storyOfWeb from '../markdown/storyOfWeb.md'
import html from '../markdown/html.md'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

const Navbar = (props) => {

    const { setMarkdownPath } = props

    const [showMenu, setShowMenu] = useState(false);

    const menuItems = [
        {
            name: 'A Web Története',
            path: storyOfWeb,
            isSolid: false,
        },
        {
            name: 'HTML',
            path: html,
            isSolid: false,
        },
        {
            name: 'CSS',
            path: welcome,
            isSolid: false,
        },
        {
            name: 'Javascript',
            path: welcome,
            isSolid: false,
        },
        {
            name: 'React',
            path: welcome,
            isSolid: false,
        },
        {
            name: 'Linkek',
            path: welcome,
            isSolid: false,
        },
    ]

    return (
        <div className='w-full h-12 fixed top-0 left-0 text-textWhite bg-editorDark flex items-center justify-center px-6'>
            <div onClick={() => {setShowMenu(false);setMarkdownPath(welcome)}} className="text-xs cursor-pointer mr-auto select-none">
                <p className="">Webfejlesztés</p>
                <p className="text-textBlue">Alapjai<span className='text-textYellow'>()</span></p>
            </div>
                <HiOutlineMenuAlt4 onClick={() => setShowMenu(!showMenu)} className='ml-auto text-2xl block md:hidden'/>
                <div onClick={() => setShowMenu(false)} className={`fixed top-12 w-full h-full bg-editorLight bg-opacity-70 ${showMenu ? 'block md:hidden' : 'hidden'}`}>
                    <div className="py-4 w-full text-center bg-editorDark">
                        {menuItems.map(item => (
                            <div onClick={() => setMarkdownPath(item.path)} key={uuidv4()} className="hover:bg-editorLight py-2 cursor-pointer">
                                <p className="">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

            <div className="text-xs ml-auto space-x-8 hidden md:flex">
                {menuItems.map(item => (
                    <div onClick={() => setMarkdownPath(item.path)} key={uuidv4()} className="hover:text-textBlue cursor-pointer">
                        <p className="">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Navbar
