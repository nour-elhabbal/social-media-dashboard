import "../CSS/components styles/TotalInfoCard.scss";

import youtubeLogo from "../images/icon-youtube.svg";
import facebookLogo from "../images/icon-facebook.svg";
import twitterLogo from "../images/icon-twitter.svg";
import instagramLogo from "../images/icon-instagram.svg";
import upArrow from "../images/icon-up.svg";
import downArrow from "../images/icon-down.svg";

const PlatformCard = ({ username, followersCount, platform, changeRate }) => {
  let followersOrSubs, imgSrc, imgAlt, arrow, changeColor;

  changeRate[0] === "up"
    ? (arrow = upArrow) && (changeColor = "hsl(163, 72%, 41%)")
    : (arrow = downArrow) && (changeColor = "hsl(356, 69%, 56%)");

  platform === "youtube"
    ? (followersOrSubs = "SUBSCRIBERS")
    : (followersOrSubs = "FOLLOWERS");

  if (platform === "youtube") {
    imgSrc = youtubeLogo;
    imgAlt = "youtube logo";
  } else if (platform === "facebook") {
    imgSrc = facebookLogo;
    imgAlt = "facebook logo";
  } else if (platform === "twitter") {
    imgSrc = twitterLogo;
    imgAlt = "twitter logo";
  } else if (platform === "instagram") {
    imgSrc = instagramLogo;
    imgAlt = "instagram logo";
  }
  return (
    <div className={`card ${platform}`}>
      <div className="username">
        <img src={imgSrc} alt={imgAlt} />
        <p>{username}</p>
      </div>

      <div className="followersCount">
        <p className="totalCount">{followersCount}</p>
        <p>{followersOrSubs}</p>
        <div className="change">
          <img src={arrow} alt="arrow" />
          <p style={{ color: changeColor }}>{changeRate[1]} Today</p>
        </div>
      </div>
    </div>
  );
};

export default PlatformCard;
