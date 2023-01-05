import React from "react";
import MainPage from "./mainPage";
import { Layout, Typography } from "antd";
import DailyForecast from "./dailyForecast/";
import { Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./app.css";
const { Content } = Layout;
const { Text, Title } = Typography;

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout className="mainLayout">
          <Title>
            <Text className="mainPageHeaderTitle" strong>
              Weather App
            </Text>
          </Title>
          <Content>
            <Route path="/" component={MainPage} />
            <Route path="/:nameDay" exact component={DailyForecast} />
          </Content>
        </Layout>
      </div>
    );
  }
}
export default App;
