import React from "react";
import Card from "../ui";
import Logo from "../Logo";
import bg from "../../assets/bg.jpg";

const Hero = (props) => {
  return (
    <div>
      <Card
        style={{
          backgroundImage: `URL(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: props.width ? props.width : "100%",
        }}
      >
        <div style={{ padding: "50px 0" }}>
          <Logo />
        </div>
      </Card>
    </div>
  );
};

export default Hero;
