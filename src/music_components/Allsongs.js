import db from '../firebase'

const handleSongClick=()=>{

}
const allSongs = db
.collection('')
.get();

const Allsongs = (props)=>{
    return (
        <div className ='music_component'>
           {
               allSongs.map(
                   (song)=>{
                       return(
                           <div onClick={this.handleSongClick}>
                                <h2>song.name</h2>
                           </div>
                       )
                   }
               )
           }
        </div>
    )
}

export default Allsongs;