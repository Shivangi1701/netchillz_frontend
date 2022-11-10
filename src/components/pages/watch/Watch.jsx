import { ArrowBack } from '@mui/icons-material'
import trailer from '../../videos/trailer.mp4'
import './watch.scss'
const Watch = () => {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBack/>
            Home
        </div>
        <video className="video"
        autoPlay
        progress
        controls
        src={trailer}
        />
    </div>
  )
}

export default Watch