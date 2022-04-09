
import '../css/music.css'



const Allsongs = (props)=>{
  
    const songs =props.songs
    return (
      
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
    )
}

export default Allsongs;