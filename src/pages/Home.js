import { Layout } from "../components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  HeroSection,
  AboutSection,
  RoadmapSection,
  FaqSection,
  JoinSection,
  GallarySection,
} from "../sections";
toast.configure();
const Home = ({
  account,
  mint,
  totalSupply,
  displayPrice,
  loadWeb3,
  maxSupply,
}) => {
  return (
    <div>
      <Layout account={account} loadWeb3={loadWeb3}>
        <HeroSection
          account={account}
          mint={mint}
          totalSupply={totalSupply}
          displayPrice={displayPrice}
          maxSupply={maxSupply}
        />
        <AboutSection />
        <GallarySection />
        <RoadmapSection />
        <FaqSection />
        <JoinSection />
      </Layout>
    </div>
  );
};

export default Home;
