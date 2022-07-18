import React from 'react';
import Header from './components/Header';
import Corpo from './components/Body/Corpo';

export default function App() {
    return (
        <div>
            <Header />
            <Corpo />
            <footer>
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </footer>
        </div>
    );
}

