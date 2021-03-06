import Post from './Post'

export default function PartPosts() {
    const ArrayPosts = [
        {
            SupImage: "img/barked 1.svg",
            name: "barked",
            ImagePost: "img/dog 1.svg",
            InfImage: "img/adorableanimals 2.svg",
            curtida: "adorable_animals",
            QtdCurtidas: "outras 99.159 pessoas"
        },
        {
            SupImage: "img/meowed 1.svg",
            name: "meowed",
            ImagePost: "img/gato-telefone 1.png",
            InfImage: "img/respondeai 2.svg",
            curtida: "respondeai",
            QtdCurtidas: "outras 101.523 pessoas"
        },
        {
            SupImage: "img/meowed 1.svg",
            name: "meowed",
            ImagePost: "img/gato-telefone 1.png",
            InfImage: "img/respondeai 2.svg",
            curtida: "respondeai",
            QtdCurtidas: "outras 101.523 pessoas"
        }
    ]
    
    return (
        <section className="PartPosts">
            <ul>
                {ArrayPosts.map((post, i) =>
                    <Post
                        i={i}
                        SupImage={post.SupImage}
                        name={post.name}
                        ImagePost={post.ImagePost}
                        InfImage={post.InfImage}
                        curtida={post.curtida}
                        QtdCurtidas={post.QtdCurtidas}
                    />
                )}
            </ul>
        </section>
    );
}