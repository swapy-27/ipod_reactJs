const Playscreen = (props) =>{
    // const curr_song = props.state.song[props.state.curr_playing_song]
    return (
        <div className = 'play_screen_container'>
            <div className='song_name'>
                {/* <h2>{curr_song.name}</h2> */}
            </div>
                
            <div className=''>

                <div className='song_image'>
                {/* <img src={curr_song.name} alt='song'/> */}
                </div>
                
                <div className='audio_tab'>
                    
                </div>

            </div>
            <div><h2>press <span><i class="fa-solid fa-play"></i>
                <i class="fa-solid fa-pause"></i></span> button to pause/play</h2></div>
        </div>
    )
}

export default Playscreen;