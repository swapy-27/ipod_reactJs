import db from '../firebase'


const allSongs = db
.collection('')
.get();
const Allsongs = (props)=>{
    return (
        <div className ='music_component'>
           
        </div>
    )
}

export default Allsongs;