import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../Button/Button.elements";
import {
  BannerContainer,
  BannerBg,
  VideoBg,
  BannerContent,
  BannerH1,
  BannerP,
  BannerBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./Banner.elements";

const Banner = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <BannerContainer>
      <BannerBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </BannerBg>
      <BannerContent>
        <BannerH1>Enterprise Website</BannerH1>
        <BannerP>
          Sign in for submit your ideas to contributing the company!
        </BannerP>
        <BannerBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </BannerBtnWrapper>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
