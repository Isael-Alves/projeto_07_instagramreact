import React from 'react';
import Top from './Top';
import Corpo from './Corpo';

export default function App() {
    const ArrayIcons = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"];
    const Icons = ArrayIcons.map((dados, i) => {`<ion-icon key=${i} name=${dados}></ion-icon>`});

    return (
        <div>
            <Top />
            <Corpo />
            <footer>
            ${Icons}
            </footer>
        </div>
    );
}