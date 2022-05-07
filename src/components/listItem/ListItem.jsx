import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";

import { useState } from "react";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =   "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";;
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://i2.wp.com/spirossoutsos.com/wp-content/uploads/2016/01/good_bad_ugly_poster_clint_eastwood_paitning_leone.jpg?fit=950%2C761&ssl=1"
        alt="cover"
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow />
              <Add />
              <ThumbUpAltOutlined />
              <ThumbDownOutlined />
            </div>
            <div className="itemInfo">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1963</span>
            </div>
            <div className="desc">Lorem ipsum dolor sit amet consectetur.</div>
            <div className="genre"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
