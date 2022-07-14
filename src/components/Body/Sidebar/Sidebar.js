import Sugestions from "./Sugestions";
import Help from "./Help";
import User from "./User";

export default function Sidebar() {
    return (
        <aside>
            <User />
            <Sugestions />
            <Help />
        </aside>
    );
}