export default function Storie(props) {

    return (
        <div key={props.i} className="storie">
            <img src="img/stories_background 1.svg" alt="" />
            <div className="ImgStories">
                <img src={props.src} alt="" />
            </div>
            <p>{props.name}</p>
        </div>
    );
}