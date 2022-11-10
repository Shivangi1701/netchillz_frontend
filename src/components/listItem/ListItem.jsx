import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material"
import { useState } from "react"
import "./listItem.scss"
import trailer from "../videos/trailer.mp4"
const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="listItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
    >
      <img src="https://wallpapercave.com/wp/wp6691137.jpg"
        alt="" />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownAltOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 min 12 sec</span>
              <span className="limit">+16</span>
              <span>2021</span>
            </div>
            <div className="desc">
            Peter Parker's secret identity is revealed, he turns to Doctor Strange to make the world forget that he is Spider-Man. The spell goes horribly wrong and shatters the multiverse, bringing in monstrous villains.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}

    </div>
  )
}

export default ListItem