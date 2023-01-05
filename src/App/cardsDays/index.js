import React from "react";
import { useSpring, animated } from "react-spring";
import "./cardsDays.css";
import { Typography } from "antd";

const { Text } = Typography;
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Card = Props => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  const { max, min, dailuForecast, generalStateToday } = Props.data[1];
  const Today = Props.data[0].toUpperCase();
  console.log(generalStateToday);
  return (
    <div>
      <animated.div
        className="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <div className="cardContentLayout">
          <Text className="textCard" code>
            {Today}
          </Text>
          <div className={`${generalStateToday}IMG imageWeather`} />
          <div>
          <Text className="textCard" code>
            {min}°
          </Text>
          <Text className="textCard" code>
            {max}°
          </Text>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default Card;
