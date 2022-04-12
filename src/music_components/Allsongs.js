
import '../css/music.css'

const Allsongs = (props)=>{
  
    const songs =props.state.songs
    return (
    

     
         <div className ='music_list display_component'>
            {    

             songs.map(
                     (song)=>{
                         
                         return (
                             <div className='music_component' >
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