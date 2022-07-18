import { SiInstagram } from 'react-icons/si';
import { FiSend } from 'react-icons/fi';
import { IoIosHeartEmpty } from 'react-icons/io';
import { BsPerson } from 'react-icons/bs';
import { ImCompass2 } from 'react-icons/im';

export default function Header() {
    return (
        <nav className="Top">
            <div className="elementTop">
                <div className="Icons-left">
                    <SiInstagram />
                    <div className="barrinha"></div>
                    <img src="/img/logo.png" alt="" />
                </div>
                <div className="button">Pesquisar</div>
                <span className="Icons-right">
                    <IoIosHeartEmpty />
                    <FiSend />
                    <BsPerson />
                    <ImCompass2 />
                </span>
            </div>
        </nav>
    );
}