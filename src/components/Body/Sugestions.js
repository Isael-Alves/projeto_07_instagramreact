export default function Sugestions(props) {
    return (
        <li key={props.i}>
            <span>
                <img src={props.image} alt="" />
                <div>
                    <h3>{props.name}</h3>
                    <h4>{props.description}</h4>
                </div>
            </span>

            <h5>Seguir</h5>
        </li>
    );
}