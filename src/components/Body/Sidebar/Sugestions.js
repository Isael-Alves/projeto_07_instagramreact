export default function Sugestions() {
    const ArraySugestions = [
        {
            image: "img/smallcutecats 1.svg",
            name: "bad.vibes.memes",
            seguidor: "Segue você"
        },
        {
            image: "img/smallcutecats 1.svg",
            name: "bad.vibes.memes",
            seguidor: "Segue você"
        },
        {
            image: "img/smallcutecats 1.svg",
            name: "bad.vibes.memes",
            seguidor: "Segue você"
        },
        {
            image: "img/smallcutecats 1.svg",
            name: "bad.vibes.memes",
            seguidor: "Segue você"
        },
        {
            image: "img/smallcutecats 1.svg",
            name: "bad.vibes.memes",
            seguidor: "Segue você"
        }];

    const sugestoes = ArraySugestions.map((dados, i) => {
        `<li key="${i}">
            <span>
                <img src="${dados.image}" alt="" />
                <div>
                    <h3>${dados.name}</h3>
                    <h4>${dados.seguidor}</h4>
                </div>
            </span>
            <h5>Seguir</h5>
        </li>`
    });

    console.log(sugestoes);

    return (
        <div class="Sugestions">
            <span>
                <h4>Sugestões para você</h4>
                <p>Ver tudo</p>
            </span>
            <ul>
                ${sugestoes}
            </ul>
        </div>
    );
}