import React from "react";

const faqList = [
  {
    question: "Is TailGrids Well-documented?",
    answer:
      "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post.",
  },
  {
    question: "How do I get support for TailGrids?",
    answer:
      "You can reach out through our support email or use the documentation. We reply within 24 hours.",
  },
  {
    question: "Can I use TailGrids for commercial projects?",
    answer:
      "Yes, TailGrids can be used in commercial projects according to the licensing terms. Always read the license before using it.",
  },
  {
    question: "Is there a free version of TailGrids?",
    answer:
      "Yes, there is a free version available with limited components. You can upgrade anytime to access all features.",
  },
];

function FAQs() {
  return (
    <section className="dark:bg-[#111928] pt-32">
      <div className="w-[90%] mx-auto flex flex-col justify-center items-center text-center gap-5">
        <p className="text-[#3758f9] text-sm font-medium">FAQs</p>
        <h1 className="text-3xl lg:text-5xl font-bold">Any Questions? Look Here</h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:w-[50%]">
          It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post.
        </p>
      </div>

      <div className="px-0 mt-20 flex flex-wrap justify-center items-center gap-12">
        {faqList.map((faq, index) => (
          <div
            key={index}
            className="w-[80%] md:w-[40%] lg:w-[45%] flex justify-center items-start gap-5"
          >
            <div className="bg-[#3758f9] relative text-white py-3 text-lg z-10 px-3 rounded-xl">
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                className="fill-current"
              >
                <path
                  d="M15.2985 0.846149C15.1101 0.633959 14.8565 0.512406 14.5762 0.512406C14.296 0.512406 14.0424 0.633959 13.854 0.846149L5.51298 10.0801L2.14647 6.38809C1.95799 6.17515 1.70426 6.05334 1.42381 6.053C1.14337 6.05265 0.889442 6.17379 0.700647 6.38652C0.511851 6.59924 0.400391 6.88743 0.400391 7.1896C0.400391 7.49176 0.511851 7.77996 0.700647 7.99268L4.88133 12.6066C5.06982 12.8188 5.32347 12.9404 5.60374 12.9404C5.88374 12.9404 6.1374 12.8188 6.32588 12.6066L15.2985 2.6473C15.487 2.43511 15.5985 2.14697 15.5985 1.84467C15.5985 1.54237 15.487 1.25422 15.2985 1.04203V0.846149Z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-md lg:text-2xl font-semibold">{faq.question}</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQs;
