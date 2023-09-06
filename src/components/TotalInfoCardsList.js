import TotalInfoCard from "./TotalInfoCard";
import "../CSS/components styles/TotalInfoCardsList.scss";

const TotalInfoCardsList = () => {
  return (
    <div className="TotalInfoCardsList">
      <TotalInfoCard
        platform="facebook"
        username="@nathanf"
        followersCount={1987}
        changeRate={["up", 12]}
      />
      <TotalInfoCard
        platform="twitter"
        username="@nathanf"
        followersCount={1044}
        changeRate={["up", 99]}
      />
      <TotalInfoCard
        platform="instagram"
        username="@realnathanf"
        followersCount="11k"
        changeRate={["up", 1099]}
      />
      <TotalInfoCard
        platform="youtube"
        username="Nathan f."
        followersCount={8239}
        changeRate={["down", 144]}
      />
    </div>
  );
};
export default TotalInfoCardsList;
