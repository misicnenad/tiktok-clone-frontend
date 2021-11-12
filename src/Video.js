import React, { useEffect, useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'
import { useInView } from 'react-intersection-observer'

function Video(props) {
    const [isPlaying, setIsPlaying] = useState(true)
    const videoRef = useRef(null)

    const { ref, inView } = useInView({
        threshold: 1,
    })

    const handleVideoPress = () => {
        setIsPlaying(!isPlaying)
    }

    useEffect(() => {
        if (inView && isPlaying) {
            videoRef.current.play()
        } else {
            if (videoRef.current.play) {
                videoRef.current.pause()
            }
        }
    }, [isPlaying, inView])

    return (
        <div className='video' ref={ref}>
            <video
                onClick={handleVideoPress}
                className='video__player'
                loop
                ref={videoRef}
                src={props.url}
                muted={props.muted}
            ></video>

            <VideoFooter
                channel={props.channel}
                description={props.description}
                song={props.song}
                muted={props.muted}
                handleToggleMuted={() => props.handleToggleMuted()}
            />
            <VideoSidebar
                likes={props.likes}
                shares={props.shares}
                messages={props.messages}
            />
        </div>
    )
}

export default Video
