import Storie from './Storie';

export default function BoxStories() {
    const stories = [
        { src: "/img/9gag 1.svg", names: "9gag" },
        { src: "/img/meowed 1.svg", names: "meowed" },
        { src: "/img/barked 1.svg", names: "barked" },
        { src: "/img/nathanwpylestrangeplanet 1.svg", names: "nathanwpyle..." },
        { src: "/img/wawawiwacomicsa 1.svg", names: "wawawiwac..." },
        { src: "/img/respondeai 1.svg", names: "respondeai" },
        { src: "/img/filomoderna 1.svg", names: "filomoderna" },
        { src: "/img/memeriagourmet 1.svg", names: "memeriagourmet" }
    ];

    return (
        <section className="BoxStories">
            <img className="Vector" src="img/Vector.png" alt="" />

            {stories.map((stories, i) => <Storie key={i} src={stories.src} name={stories.names} />)}

        </section>
    );
}