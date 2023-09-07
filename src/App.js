import TotalInfoCardsList from "./components/TotalInfoCardsList";
import "./CSS/App.scss";
import "./CSS/darkTheme.scss";
import Header from "./components/Header";
import OverviewCardsList from "./components/OverviewCardsList";

const App = () => {
  return (
    <div className="app dark ">
      <Header />
      <div className="cardsWrapper">
        <TotalInfoCardsList />
        <OverviewCardsList />
      </div>
    </div>
  );
};

export default App;
