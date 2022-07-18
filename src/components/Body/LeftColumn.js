import BoxStorie from './BoxStories'
import PartPosts from './PartPosts'

export default function LeftColumn(){
    return (
        <div className="ColumnLeft">
            <BoxStorie />
            <PartPosts />
        </div>
    );
}