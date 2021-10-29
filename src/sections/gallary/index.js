import Image1 from "../../assets/images/1.png";
import Image2 from "../../assets/images/2.png";
import Image3 from "../../assets/images/3.png";
import Image4 from "../../assets/images/4.png";
import Image5 from "../../assets/images/5.png";
import Image6 from "../../assets/images/6.png";
import Image7 from "../../assets/images/7.png";
import Image8 from "../../assets/images/8.png";
import Image9 from "../../assets/images/9.png";
import Image10 from "../../assets/images/10.jpg";

const data = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
];

const Index = () => {
  return (
    <section className="py-16 bg-primary text-dark" id="faq">
      <div className="container">
        <h2 className="font-serif  text-3xl text-center  lg:text-4xl mb-20">
          Gallary
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-5">
          {data.map((v, i) => (
            <div key={i} className="rounded-lg overflow-hidden">
              <img src={v} alt="" className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
