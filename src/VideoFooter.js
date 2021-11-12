import MusicNoteIcon from '@material-ui/icons/MusicNote'
import React from 'react'
import Ticker from 'react-ticker'
import './VideoFooter.css'

function VideoFooter(props) {
    return (
        <div className='videoFooter'>
            <div className='videoFooter__text'>
                <h3>@{props.channel}</h3>
                <p>{props.description}</p>
                <div className='videoFooter__ticker'>
                    <MusicNoteIcon className='videoFooter__icon' />

                    <Ticker mode='smooth'>
                        {({ index }) => (
                            <>
                                <p>{props.song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img
                className={
                    !props.muted
                        ? 'videoFooter__record-spinning'
                        : 'videoFooter__record'
                }
                src='https://static.thenounproject.com/png/934821-200.png'
                alt=''
                onClick={() => props.handleToggleMuted()}
            />
        </div>
    )
}

export default VideoFooter
