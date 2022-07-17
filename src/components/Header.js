export default function Header() {
    return (
        <nav className = "Top">
            <div className = "elementTop">
                <div className = "Icons-left">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div className = "barrinha"></div>
                    <img src="/img/logo.png" alt="" />
                </div>
                <div className = "button">Pesquisar</div>
                <span className = "Icons-right">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </span>
            </div>
        </nav>
    );
}