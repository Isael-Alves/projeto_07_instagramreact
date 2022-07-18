import React from 'react';
import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';
import Corpo from './components/Body/Corpo';
import { FaHome } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { GrAddCircle } from 'react-icons/gr'
import { IoIosHeartEmpty } from 'react-icons/io';
import { ImCompass2 } from 'react-icons/im';

export default function App() {
    return (
        <div>
            <Header />
            <HeaderMobile />
            <Corpo />
            <footer>
                <FaHome/>
                <AiOutlineSearch />
                <GrAddCircle />
                <IoIosHeartEmpty />
                <ImCompass2 />
            </footer>
        </div>
    );
}

