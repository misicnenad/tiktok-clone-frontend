import { useEffect, useState } from 'react'
import './App.css'
import Video from './Video'
import axios from './axios'

function App() {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        async function fetchPosts() {
            const response = await axios.get('/v2/posts')
            setVideos(response.data)
            return response
        }

        fetchPosts()
    }, [])

    return (
        // BEM naming convention
        <div className='app'>
            <div className='app__videos'>
                {videos.map((video) => (
                    <Video
                        key={video._id}
                        url={video.url}
                        channel={video.channel}
                        description={video.description}
                        song={video.song}
                        likes={video.likes}
                        shares={video.shares}
                        messages={video.messages}
                    />
                ))}
            </div>
        </div>
    )
}

export default App
