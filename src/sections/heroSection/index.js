import { useState, useEffect } from "react";
import Image1 from "../../assets/images/hero1.png";
import Image2 from "../../assets/images/hero2.png";
import { Timer, Button } from "../../components";
import moment from "moment";
import Slider, { SliderTooltip } from "rc-slider";
import "rc-slider/assets/index.css";
import "./style.css";

const Index = ({ account, mint, totalSupply, displayPrice, maxSupply }) => {
  const [value, setValue] = useState(0);
  console.log(value);
  const difference = +new moment("2021-09-17 00:00:00").utc() - +new Date();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((difference / 1000 / 60) % 60));
        setSeconds(Math.floor((difference / 1000) % 60));
      }
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });
  const { Handle } = Slider;

  const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    if (value > 0) {
      setValue(value);
    }

    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={`${value}`}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  };

  return (
    <section className="py-16 text-dark">
      <div className="container md:flex md:flex-row-reverse gap-10 ">
        <div className="md:w-1/2 ">
          <picture>
            <source srcSet={Image2} media="(min-width:768px)" />
            <img src={Image1} alt="Hero" className="mx-auto " />
          </picture>
        </div>
        <div className="md:w-1/2">
          <h1 className="font-serif text-3xl text-center mt-10 md:text-5xl lg:text-6xl  md:text-left">
            Jawbreakerz
          </h1>
          <p className="text-center sm:mx-auto md:mx-0 text-xs mt-6 md:text-left w-full  max-w-lg">
            10,000 randomly generated Jawbreakerz ready to find a new home on
            the Ethereum blockchain!
          </p>
          {difference > 0 ? (
            <Timer
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
            />
          ) : (
            <div className="mt-14 max-w-md w-full">
              <div className="flex justify-between text-xs mb-5">
                <span>Total Jawbreakerz Minted</span>
                <span>
                  {totalSupply}/{maxSupply}
                </span>
              </div>
              <Slider min={0} max={20} defaultValue={1} handle={handle} />
              <p className="text-center text-xs mt-2">
                {account
                  ? `Mint ${value} Starfish(${(value * displayPrice).toFixed(
                      4
                    )} Ether)`
                  : "Connect Account"}
              </p>
              <div className="mt-8">
                <Button
                  onClick={() => mint(value)}
                  // disabled={!account ? true : false}
                  disabled={true}
                >
                  Mint now
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Index;

// const { Handle } = Slider;

// const handle = (props) => {
//   const { value, dragging, index, ...restProps } = props;
//   if(value>0){
//     setValue()
//   }
//   return (
//     <SliderTooltip
//       prefixCls="rc-slider-tooltip"
//       overlay={`${value}`}
//       visible={dragging}
//       placement="top"
//       key={index}
//     >
//       <Handle value={value} {...restProps} />
//     </SliderTooltip>
//   );
// };
