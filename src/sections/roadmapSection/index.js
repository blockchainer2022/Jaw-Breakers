import Image from "../../assets/images/roadmap.png";
import Image2 from "../../assets/images/roadmap2.png";
import Image3 from "../../assets/images/roadmap3.png";
import Image4 from "../../assets/images/roadmap4.png";
import "./style.css";

// const Images = [Image, Image2, Image3, Image4];

const Index = () => {
  return (
    <section
      className="py-16 mb-2 bg-dark text-center sm:text-left"
      id="roadmap"
    >
      <div className="container">
        <h2 className="font-serif text-primary text-3xl  mb-10">Roadmap</h2>
        <div className="w-full">
          <Card
            img={Image}
            title="PHASE 1"
            text={[
              "10% Minted - Jawbreakerz Airdrop to Holders 5 Jawbreakerz will be airdropped to 5 random holders!",

              "20% Minted - Ethereum Raffle Holders will be able to participate in an Ethereum raffle!",

              "30% Minted - 2nd Jawbreakerz Airdrop to Holders 5 more Jawbreakerz will be airdropped to another 5 random holders!",
            ]}
          />
          <Card
            img={Image2}
            title="PHASE 2
            "
            text={[
              "40% Minted - 2nd Ethereum Raffle Holders will be able to participate in the 2nd Ethereum raffle!",

              "50% Minted - Creation of Community Wallet We will dedicate 10 Ethereum (depending on Ethereum price at the time) towards a community wallet. Holders will be able to vote on how to spend the funds in order to grow the project!",
            ]}
          />
          <Card
            img={Image3}
            title="PHASE 3"
            text={[
              "60% Minted - Charity Donation We will donate $10,000 USD to a charity that is chosen by the community!",

              "70% Minted - Legendary Jawbreakerz Airdrop 2 super rare 1/1 Jawbreakerz will be randomly airdropped to 2 lucky holders!",
              "80% Minted - Floor Sweep We will sweep the floor and give back those Jawbreakerz to loyal members of the community!",
            ]}
          />
          <Card
            img={Image4}
            line={false}
            title="PHASE 4"
            text={[
              "90% Minted - Merch Store We will start working on setting up a merch store to sell cool t-shirts, hoodies, and accessories based on Jawbreakerz!",
              "100% Minted - Sold Out!! In celebration of reaching this huge milestone we will airdrop 2 more 1/1 legendary Jawbreakerz to holders, have another Ethereum Raffle, and start development on Roadmap V2!",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Index;

const Card = ({ img, title, text, line = true }) => (
  <div className="w-full flex justify-between items-center card">
    <div
      className={`w-12 h-12 rounded-full bg-primary hidden md:block ${
        !line ? "null" : "circle"
      }      relative`}
    ></div>
    <div
      style={{ boxShadow: "8px 8px 2px 0 rgba(200, 55, 171, 1)" }}
      className="md:w-11/12 w-full p-4 sm:p-8 my-16 sm:pr-0 bg-primary rounded-lg sm:flex sm:flex-row-reverse"
    >
      <div className="w-20 sm:w-40  mx-auto sm:-mt-12 ">
        <img src={img} alt="profile" className="sm:w-full" />
      </div>
      <div className="text-dark sm:text-left sm:flex-1">
        <h6 className="font-serif mt-5 mb-5 sm:tracking-widest sm:mb-3 sm:mt-0 sm:text-2xl ">
          {title}
        </h6>
        {/* <p className="text-xs">{text}</p> */}
        <ul>
          {text.map((v, i) => (
            <li className="text-xs mb-2">{v}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
