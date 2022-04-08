
import Allsongs from '../music_components/Allsongs';
import Albums from '../music_components/Albums'
import Artists from '../music_components/Artists'
const Music = (props) => {
    
    return (
        
        <div className="display_component">
            <h1>Music</h1>
           {props.show_music_page===true && props.music_page === props.curr_ele && props.curr_ele === 0 ? <Allsongs/> :''}
           {props.show_music_page===true && props.music_page === props.curr_ele && props.curr_ele === 1 ? <Albums/>:''}
           {props.show_music_page===true && props.music_page === props.curr_ele && props.curr_ele === 2 ?<Artists/> :''}


        </div>
    )
}

export default Music;