import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Why should I choose Humestic?",
    answer:
      "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
  },
  {
    id: 2,
    question: "I like your works, how do we start a project?",
    answer: "ou can start by contacting us through the form or email.",
  },
  {
    id: 3,
    question: "What info is required to get a quotation?",
    answer: "ou can start by contacting us through the form or email.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="wrapper max-sm:px-2 max-lg:px-3">
      <div className="flex max-sm:flex-col my-14 max-sm:gap-12 gap-36">
      <p className="text-2xl text-[#001C4A]  ">
        Frequently asked <br/> questions
      </p>
      <h4 className="text-6xl max-lg:text-4xl max-w-4xl ">
        Constant collaboration is how we roll.
        Let&apos;s see if we are a good fit.
      </h4>
      </div>
      

      {faqs.map((faq, index) => (
        <div key={faq.id} className="border-b border-[#CCCCCC] py-6">
          <div
            className="flex justify-between items-start cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex items-center gap-4">
              <span className="text-[#8B7D4C] text-3xl">
                {String(faq.id).padStart(2, "0")}
              </span>
              <h3 className="text-[40px] max-sm:text-2xl max-lg:text-3xl text-[#111111]">{faq.question}</h3>
            </div>
            <span className="text-4xl">{openIndex === index ? "−" : "+"}</span>
          </div>
          {openIndex === index && faq.answer && (
            <p className="font-light text-[#636363] ml-10 mt-3">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
