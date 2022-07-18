import Sugestions from './Sugestions'

export default function Sidebar() {
    const ArraySidebar = [
        {
            image: "img/badvibesmemes 1.svg",
            name: "bad.vibes.memes",
            description: "Segue você"
        },
        {
            image: "img/chibirdart 1.svg",
            name: "chibirdart",
            description: "Segue você"
        },
        {
            image: "img/razoesparaacreditar 1.svg",
            name: "razoesparaacreditar",
            description: "Novo no Instagram"
        },
        {
            image: "img/smallcutecats 1.svg",
            name: "smallcutecats",
            description: "Segue você"
        },
        {
            image: "img/adorableanimals 1.svg",
            name: "adorable_animals",
            description: "Segue você"
        }
    ];

    return (
        <aside>
            <div className="User">
                <img src="img/catanacomics 1.svg" alt="" />
                <div>
                    <h3>Isael.alves23</h3>
                    <h4>Katatau</h4>
                </div>
            </div>
            <div className="Sugestions">
                <span>
                    <h4>Sugestões para você</h4>
                    <p>Ver tudo</p>
                </span>

                <ul>
                    {ArraySidebar.map((sidebar, i) => <Sugestions key={i} image={sidebar.image} name={sidebar.name} description={sidebar.description} />)}
                </ul>
            </div>
            <div className="Helps">
                <h6>
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags •
                    Idioma
                </h6>
                <h6>
                    © 2021 INSTAGRAM DO FACEBOOK
                </h6>
            </div>
        </aside>
    );
}