import { useState } from "react";
import "./style.css";
import Logo from "../../assets/images/logo.png";
import Button from "../button";
const Index = ({ account, loadWeb3 }) => {
  const [open, setOpen] = useState(false);
  return (
    <header className=" bg-primary text-white shadow-md ">
      <nav className=" container flex items-center justify-between relative py-4">
        <div className="flex-1 lg:flex-none">
          <div className="w-48 ">
            <img src={Logo} alt="logo" className="w-full" />
          </div>
        </div>
        <div className="hidden lg:block flex-1">
          <ul className="flex list-none  text-dark ml-8 ">
            <li className="p-3.5 text-sm">
              <a href="#roadmap">Roadmap</a>
            </li>
            <li className="p-3.5 text-sm">
              <a href="#about">About us</a>
            </li>
            <li className="p-3.5 text-sm">
              <a href="#contact">Contact us</a>
            </li>
            <li className="p-3.5 text-sm">
              <a href="#faq">FAQ's</a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <div className="text-dark flex lg:block">
            <span className="inline-block p-2">
              <a
                href="https://discord.gg/jBNXF5DmYT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-discord"></i>
              </a>
            </span>
            <span className="inline-block p-2">
              <a
                href="https://twitter.com/JawbreakerzNFT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </span>
          </div>
        </div>
        <div className="ml-5">
          <Button responsive onClick={() => loadWeb3()}>
            {account
              ? account.slice(0, 8) + "..." + account.slice(account.length - 5)
              : "CONNECT"}
          </Button>
        </div>

        {/* Active on Mobile */}
        <div className="text-dark text-lg cursor-pointer lg:hidden ml-8">
          <span
            onClick={() => setOpen(!open)}
            className="transition-all duration-1000 text-xl bar"
          >
            {open ? (
              <i class="fas fa-times transition-all "></i>
            ) : (
              <i className="fas fa-bars transition-all "></i>
            )}
          </span>
        </div>
        <div
          className={`mobile-nav bg-dark ${open ? "active" : null} lg:hidden`}
        >
          <ul className="list-none text-center p-8 text-white">
            <li className="p-2 text-sm">
              <a href="#roadmap">Roadmap</a>
            </li>
            <li className="p-2 text-sm">
              <a href="#about">About us</a>
            </li>
            <li className="p-2 text-sm">
              <a href="#contact">Contact us</a>
            </li>
            <li className="p-2 text-sm">
              <a href="#faq">FAQ's</a>
            </li>
            <li className="p-2 text-sm">
              <Button onClick={() => loadWeb3()}>
                {account
                  ? account.slice(0, 8) +
                    "..." +
                    account.slice(account.length - 5)
                  : "CONNECT"}
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Index;
