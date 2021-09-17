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
          <h4 className="text-4xl font-serif my-10 ">LOREM IPSUM</h4>
          <p className="text-xs font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
            etiam viverra neque ante pretium. Donec non nunc posuere risus. Ac
            neque id cras facilisi pellentesque augue vitae volutpat. Eget cras
            at erat adipiscing quam nec nunc, faucibus fermentum. Pulvinar
            porttitor mattis in enim id in gravida imperdiet. Quis odio metus,
            fermentum cras dui. Purus tempus orci magna tempus. Nec penatibus
            tellus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
