import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import './featured.scss'
// https://assets-in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/spider-man-no-way-home-et00310790-1662017800.jpg
const Featured = ({type}) => {
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-Fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img src="https://wallpaper.dog/large/20532003.jpg" 
        alt="" />
        <div className="info">
            <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/sn_lob_log_div_01.png" alt="" />
            <span className="desc">With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured