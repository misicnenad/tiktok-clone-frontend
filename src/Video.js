import React, { useEffect, useRef, useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

function Video({ url, channel, description, song, likes, shares, messages }) {
    const [isPlaying, setIsPlaying] = useState(true)
    const videoRef = useRef(null)

    const handleVideoPress = () => {
        setIsPlaying(!isPlaying)
    }

    useEffect(() => {
        if (isPlaying) {
            videoRef.current.play()
        } else {
            if (videoRef.current.play) {
                videoRef.current.pause()
            }
        }
    }, [isPlaying])

    return (
        <div className='video'>
            <VisibilitySensor onChange={(isVisible) => setIsPlaying(isVisible)}>
                <video
                    onClick={handleVideoPress}
                    className='video__player'
                    loop
                    ref={videoRef}
                    src={url}
                ></video>
            </VisibilitySensor>

            <VideoFooter
                channel={channel}
                description={description}
                song={song}
            />
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
        </div>
    )
}

export default Video
