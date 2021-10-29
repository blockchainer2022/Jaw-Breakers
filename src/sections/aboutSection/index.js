import Image from "../../assets/images/about.png";

const Index = () => {
  return (
    <section
      className="py-16 bg-dark  text-center md:text-left text-white"
      id="about"
    >
      <div className="container md:flex items-center ">
        <div className="md:w-1/2">
          <h2 className="font-serif text-primary text-3xl lg:text-4xl mb-10">
            About
          </h2>
          <div className="mx-auto md:mx-0 max-w-xs w-full ">
            <img src={Image} alt="" />
          </div>
        </div>
        <div className="md:w-1/2">
          <h4 className="text-4xl font-serif my-10 ">Jawbreakerz</h4>
          <p className="text-xs font-normal">
            These wicked and devious Jawbreakerz come from a world like no
            other. Each Jawbreakerz is inspired by a gobstopper candy, they're
            mean and tough to crack. Not only do they look amazing but they
            stand out from other NFT projects. This passion project came alive
            from the idea of wanting to create some badass looking art. We are
            therefore extremely proud to present you Jawbreakerz and we hope you
            all love it just as much as we do!
          </p>

          <p className="text-xs font-normal mt-4">
            And then for the main page under the name: 10,000 randomly generated
            Jawbreakerz ready to find a new home on the Ethereum blockchain.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
