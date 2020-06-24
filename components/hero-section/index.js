import Link from 'next/link';
import { HeroSectionWrap } from './style';
import { Mark } from "components/mark";

const HeroSection = () => (
  <HeroSectionWrap>
    <div className="container">
      <h2>
        <Mark>RemoteIndian community</Mark> is an encouragement network for more
        than 1000 folks who are working remotely in India 🇮🇳
      </h2>
      <p>
        Your success does not depend upon your pincode in the Internet age 🌐
      </p>
    </div>
  </HeroSectionWrap>
);

export default HeroSection;
