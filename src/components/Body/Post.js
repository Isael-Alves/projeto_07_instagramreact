import React from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { VscBookmark } from 'react-icons/vsc';
import { FaEllipsisH } from 'react-icons/fa';

export default function Post(props) {

    return (
        <li className="Posts" key={props.i}>
            <div className="Part-Superior-Posts">
                <div>
                    <img src={props.SupImage} alt="" />
                    <h3>{props.name}</h3>
                </div>
                <FaEllipsisH />
            </div>

            <div className="Img-Post"><img src={props.ImagePost} alt="" /></div>

            <div className="Part-Inferior-Post">
                <section>
                    <div>
                        <IoIosHeartEmpty />
                        <IoChatbubbleOutline />
                        <FiSend />
                    </div>
                    <VscBookmark />
                </section>
                <span className="textInferior">
                    <img src={props.InfImage} alt="" />
                    Curtido por <strong> {props.curtida} </strong> e <strong> {props.QtdCurtidas}
                    </strong>
                </span>
            </div>
        </li>
    );
}