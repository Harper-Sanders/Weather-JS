import React from "react";
import "../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries
} from "react-vis";
import './dailyForecast.css'
const dataTemp = require("../../weatherData.json");

class DailyForecast extends React.Component {
  render() {
    const dayName = this.props.match.params.nameDay;
    let xDomain = [0, 24];
    let yDomain = [-10, 30];
    let xAxisOn0 = true;
    let yAxisOn0 = true;
    let verticalTickValues = [];
    let horizontalTickValues = [0];
    let dialyForecastToday = Object.entries(
      dataTemp[dayName].dailyForecast
    ).map((item, index) => {
      return { x: index * 3, y: item[1] };
    });
    console.log(dialyForecastToday);
    if (dayName in dataTemp) {
      return (
        <div className = 'dailyForecastContainer'>
          <XYPlot width={1000} height={300} {...{ xDomain, yDomain }}>
            {!verticalTickValues || verticalTickValues.length ? (
              <VerticalGridLines tickValues={verticalTickValues} />
            ) : null}
            {!horizontalTickValues || horizontalTickValues.length ? (
              <HorizontalGridLines tickValues={horizontalTickValues} />
            ) : null}
            <XAxis on0={xAxisOn0} />
            <YAxis on0={yAxisOn0} />
            <LineSeries data={dialyForecastToday} />
          </XYPlot>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default DailyForecast;
