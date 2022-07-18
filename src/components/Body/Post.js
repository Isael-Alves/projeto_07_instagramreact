export default function Post(props) {
    return (
        <li className="Posts" key={props.i}>
            <div className="Part-Superior-Posts">
                <div>
                    <img src ={props.SupImage} alt="" />
                    <h3>{props.name}</h3>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>

            <div className="Img-Post"><img src={props.ImagePost} alt="" /></div>

            <div className="Part-Inferior-Post">
                <section>
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon name="bookmark-outline"></ion-icon>
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