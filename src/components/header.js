import React, { useRef, useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { MdOutlineLightMode, MdOutlineModeNight } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useDarktheme } from './Themecontext';

export const Header = () => {
    const allsongs = useMemo(() => {
        const data = require('../../data/data.json');
        return data.allsongs;
    }, []);
    const { darkMode, toggleDarkMode } = useDarktheme();
    const [searchvalue, setsearchvalue] = useState([]);
    const navref = useRef();
    const searchref = useRef();
    const keywords = useRef();
    const toggle = () => {
        navref.current.classList.toggle("responsivenav");
    }
    const search = () => {
        searchref.current.classList.toggle("searchclass");
        searchref.current.focus();
        keywords.current.classList.toggle("searchclass");
    }
    const changehandler = (e) => {
        const filterval = allsongs.filter(fil => fil.album.toLowerCase().includes(e.target.value.toLowerCase()));
        setsearchvalue(filterval);
        e.target.value === "" && setsearchvalue([]);
    }
    const closesearch = () => {
        searchref.current.classList.toggle("searchclass");
        keywords.current.classList.toggle("searchclass");
    }
    return (
        <>
            <header className='homeheader'>
                <div className="logo">
                    <h2>LyRiCs MaMa</h2>
                </div>
                <nav className='headernavbar'>
                    <div className="navitemswrap">
                        <div ref={navref} className="servicelink">
                            <div className="navwrap">
                                <div className="navlogo">
                                    <h2>LyRiCs MaMa</h2>
                                </div>
                                <div className='icondivs'>
                                    <Link onClick={toggle} className='navbar-icons' href={'/'}>Home</Link>
                                </div>
                                <div className='icondivs'>
                                    <Link onClick={toggle} className='navbar-icons' href={'/service'}>Our Services</Link>
                                </div>
                                <button onClick={toggle} className='navbtn navclosebtn'><FaTimes /></button>
                            </div>
                        </div>
                        <div className="serchbtn"><button onClick={search} className='reacticons'><BsSearch /></button></div>
                        <div className="themebtn" onClick={() => toggleDarkMode()}>{darkMode ? <button className='reacticons'><MdOutlineLightMode /></button> : <button className='reacticons'><MdOutlineModeNight /></button>}</div>
                        <button onClick={toggle} className='navbtn navopenbtn'><FaBars /></button>
                    </div>
                </nav>
            </header>
            <div className="search">
                <input onChange={changehandler} ref={searchref} className='searchinput' type="text" placeholder='Search a Song....' />
            </div>
            <div ref={keywords} className="searchkeywords">
                {searchvalue.map(ser => {
                    return (
                        <Link onClick={closesearch} href={`http://localhost:3000/song/${ser.title}`} className="singlealbum">
                            {ser.album}
                        </Link>
                    )
                })}
            </div>
        </>
    )
}
