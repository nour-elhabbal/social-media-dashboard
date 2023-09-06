import OverviewCard from "./OverviewCard";
import "../CSS/components styles/OverviewCardsList.scss";

const OverviewCardsList = () => {
  return (
    <div className="overviewCardsList">
      <h2>Overview - Today</h2>
      <div className="wrapper">
        <OverviewCard
          infoType={"Page Views"}
          platform={"facebook"}
          count={87}
          changeRate={["up", "3%"]}
        />
        <OverviewCard
          infoType={"Likes"}
          platform={"facebook"}
          count={52}
          changeRate={["down", "2%"]}
        />
        <OverviewCard
          infoType={"Likes"}
          platform={"instagram"}
          count={5462}
          changeRate={["up", "2257%"]}
        />
        <OverviewCard
          infoType={"Profile Views"}
          platform={"instagram"}
          count={"52k"}
          changeRate={["up", "1375%"]}
        />
        <OverviewCard
          infoType={"Retweets"}
          platform={"twitter"}
          count={117}
          changeRate={["up", "303%"]}
        />
        <OverviewCard
          infoType={"Likes"}
          platform={"twitter"}
          count={"507"}
          changeRate={["up", "583%"]}
        />
        <OverviewCard
          infoType={"Likes"}
          platform={"youtube"}
          count={107}
          changeRate={["down", "19%"]}
        />
        <OverviewCard
          infoType={"Total Views"}
          platform={"youtube"}
          count={1407}
          changeRate={["down", "12%"]}
        />
      </div>
    </div>
  );
};

export default OverviewCardsList;
