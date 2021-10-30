import { useState } from "react";

const accordianData = [
  {
    question: "How much to mint a Jawbreakerz?",
    answer: "Jawbreakerz will be listed at 0.03 to mint. ",
  },
  {
    question: "How do I purchase a Jawbreakerz?",
    answer:
      "You will be able to mint a Jawbreakerz on release, after that you can purchase one on our opensea page. ",
  },
  {
    question: "When will the Jawbreakerz be revealed?",
    answer: "After 24 hours your Jawbreakerz will reveal itself. ",
  },
  {
    question: "How many will there be?",
    answer: "There will be 10,000 Jawbreakerz. ",
  },
  {
    question: "When will the Jawbreakerz be available to mint",
    answer: "TBD, join our discord and follow our Twitter for updates.",
  },
];

const Index = () => {
  const [clicked, setClicked] = useState();

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <section className="py-16 bg-primary text-dark" id="faq">
      <div className="container">
        <h2 className="font-serif  text-3xl lg:text-4xl mb-10">
          Frequently asked questions
        </h2>
        <div className="">
          {accordianData.map((v, i) => (
            <div
              key={i}
              className=" border-b-2 border-dark border-sloid py-4  transition ease-out duration-500 "
            >
              <div
                className="flex  justify-between cursor-pointer py-4"
                onClick={() => toggle(i)}
              >
                <h6 className="md:text-2xl " style={{ userSelect: "none" }}>
                  {v.question}
                </h6>
                <span className="transition ease-out duration-500">
                  <i
                    className={`fas transition ease-out duration-500 ${
                      clicked === i ? "fa-minus" : "fa-plus"
                    } md:text-2xl `}
                  ></i>
                </span>
              </div>
              <div
                className={` text-xs transition ease-in-out duration-500 ${
                  clicked === i
                    ? "h-auto max-h-72 py-4"
                    : "overflow-hidden max-h-0 h-0"
                }`}
              >
                <p className="max-w-4xl w-full">{v.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
