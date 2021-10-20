import Facebook from "../../assets/images/facebook.png";
import Instagram from "../../assets/images/instagram.png";
import Twitter from "../../assets/images/twitter.png";
import Youtube from "../../assets/images/youtube.png";
import Dribble from "../../assets/images/dribbble.png";

const Index = () => {
  return (
    <footer className="bg-dark py-6">
      <div className="container flex justify-between items-center flex-wrap flex-col gap-4 sm:flex-row-reverse">
        <div className="flex items-center gap-4">
          <span>
            <img src={Facebook} alt="facebook" className="w-8" />
          </span>
          <span>
            <img src={Instagram} alt="instagram" className="w-8" />
          </span>
          <span>
            <img src={Twitter} alt="twitter" className="w-8" />
          </span>
          <span>
            <img src={Youtube} alt="dribble" className="w-8" />
          </span>
          <span>
            <img src={Dribble} alt="dribble" className="w-8" />
          </span>
        </div>
        <div className="text-white font-rubik text-xs text-center sm:text-left mt-8  sm:mt-0">
          <p className="pb-4">
            Copyright © 2021. All Rights Reserved by Jaw Breakers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Index;
