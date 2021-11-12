import './App.css'
import Video from './Video'

function App() {
    return (
        // BEM naming convention
        <div className='app'>
            <div class='app__videos'>
                <Video
                    url={
                        'https://v19.tiktokcdn.com/9c1ef81ae49c18d208d38d71f68d4ca3/618d1236/video/tos/useast2a/tos-useast2a-ve-0068c003/4eb3db19e943495abd949eab536df959/?a=1233&br=1404&bt=702&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wE~O8FLgkag3-I&l=2021111106525201019021922346020409&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajN4Zjk6ZmVoODMzNzczM0ApODpmODY1O2UzN2VpOmdkaWdtcWRocjQwcnNgLS1kMTZzc2BhM142Yy5fYmFhNi0xNS06Yw%3D%3D&vl=&vr='
                    }
                    channel='misicnenad'
                    description='MERN stack TikTok clone'
                    song='Some random TikTok song'
                    likes={111}
                    shares={222}
                    messages={333}
                />
                <Video
                    url={
                        'https://v19.tiktokcdn.com/9c1ef81ae49c18d208d38d71f68d4ca3/618d1236/video/tos/useast2a/tos-useast2a-ve-0068c003/4eb3db19e943495abd949eab536df959/?a=1233&br=1404&bt=702&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wE~O8FLgkag3-I&l=2021111106525201019021922346020409&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajN4Zjk6ZmVoODMzNzczM0ApODpmODY1O2UzN2VpOmdkaWdtcWRocjQwcnNgLS1kMTZzc2BhM142Yy5fYmFhNi0xNS06Yw%3D%3D&vl=&vr='
                    }
                    channel='misicnenad'
                    description='MERN stack TikTok clone'
                    song='Some random TikTok song'
                    likes={111}
                    shares={222}
                    messages={333}
                />
            </div>

            {/* app container */}
            {/* videos */}
            {/* <Video /> */}
            {/* <Video /> */}
            {/* <Video /> */}
            {/* <Video /> */}
            {/* <Video /> */}
        </div>
    )
}

export default App
