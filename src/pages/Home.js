import { Layout } from "../components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  HeroSection,
  AboutSection,
  RoadmapSection,
  FaqSection,
  JoinSection,
} from "../sections";
toast.configure();
const Home = ({ account, mint, totalSupply, displayPrice, loadWeb3 }) => {
  return (
    <div>
      <Layout account={account} loadWeb3={loadWeb3}>
        <HeroSection
          account={account}
          mint={mint}
          totalSupply={totalSupply}
          displayPrice={displayPrice}
        />
        <AboutSection />
        <RoadmapSection />
        <FaqSection />
        <JoinSection />
      </Layout>
    </div>
  );
};

export default Home;
