import React from "react";
import "./mainPage..css";
import Card from "../cardsDays/";
import { Link } from "react-router-dom";
const data = require("../../weatherData.json");
class MainPage extends React.Component {
  render() {
    return (
      <div className="mainPage">
        <div className="cardsLayout">
          {Object.entries(data).map(value => {
            console.log(value);
            return (
              <Link key={value[0]} to= {`/${value[0]}`}>
                <Card data={value} />
              </Link>
            );
          })}
        </div>
  
      </div>
    );
  }
}
export default MainPage;
