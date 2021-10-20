import Image from "../../assets/images/discord-big.svg";
import { Button } from "../../components";
const Index = () => {
  return (
    <section
      className="py-16 bg-violet text-white text-center md:text-left"
      id="contact"
    >
      <div className="container md:flex md:flex-row-reverse md:justify-between items-center">
        <div className="w-40 md:mx-0 mx-auto md:w-1/2">
          <img src={Image} alt="" className="md:mx-auto" />
        </div>
        <div className="md:w-1/2">
          <h6 className="font-serif text-3xl my-5">JOIN OUR DISCORD GROUP</h6>
          <p className="text-xs"></p>
          <div className="mt-4">
            <Button className="ml-0" color="primary">
              Join Discord
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
