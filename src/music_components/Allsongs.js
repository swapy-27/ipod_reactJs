
import '../css/music.css'

import Playscreen from './Playscreen'

const Allsongs = (props)=>{
  
    const songs =props.state.songs
    return (
        <div>

      {
      props.state.show_play_screen===false ? 
         <div className ='music_list'>
            {    

             songs.map(
                     (song)=>{
                         return (
                             <div className='music_component' onClick={props.handleSongClick}>
                                 {song.name}
                                 </div>
                         )
                     }
                 )

            }
                  
         </div> 
         :''
      }
      {
            props.state.show_play_screen===true ? <Playscreen/>:''
      }
        </div>
    )
}

export default Allsongs;