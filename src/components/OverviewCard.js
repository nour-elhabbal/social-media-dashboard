import "../CSS/components styles/OverviewCard.scss";
import youtubeLogo from "../images/icon-youtube.svg";
import facebookLogo from "../images/icon-facebook.svg";
import twitterLogo from "../images/icon-twitter.svg";
import instagramLogo from "../images/icon-instagram.svg";
import upArrow from "../images/icon-up.svg";
import downArrow from "../images/icon-down.svg";

const OverviewCard = ({ infoType, platform, count, changeRate }) => {
  let imgSrc;
  let imgAlt;
  let arrow;
  let changeColor;

  changeRate[0] === "up"
    ? (arrow = upArrow) && (changeColor = "hsl(163, 72%, 41%)")
    : (arrow = downArrow) && (changeColor = "hsl(356, 69%, 56%)");

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
    <div className="overviewCard">
      <div className="infoType">
        <p>{infoType}</p>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="count">
        <p>{count}</p>
        <div className="changeRate">
          <img src={arrow} alt="arrow" />
          <span style={{ color: changeColor }}>{changeRate[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
