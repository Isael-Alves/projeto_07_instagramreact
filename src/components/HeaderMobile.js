import { SiInstagram } from 'react-icons/si';
import { FiSend } from 'react-icons/fi';

export default function HeaderMobile() {
    return (
        <nav class="TopMobile">
            <div class="elementTop">
                <SiInstagram />
                <img src="/img/logo.png" alt=""></img>
                <FiSend />
            </div>
        </nav>
    );
}