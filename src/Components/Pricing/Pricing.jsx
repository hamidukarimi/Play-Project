import { pricingRef } from "../Navbar/Navbar";

const Card = ({ title, price, features, recommended = false }) => (
  <div className="shadow-2xl dark:bg-[#1f2a37] py-16 rounded-xl dark:text-white w-[80%] sm:w-[46%] md:w-[37%] lg:w-[30%] flex flex-col px-10 gap-10 relative">
    {recommended && (
      <div className="absolute rounded-tl-md rounded-bl-md top-12 py-2 px-4 text-sm font-semibold -right-9 bg-[#3758f9] text-white -rotate-90">
        Recommended
      </div>
    )}
    <div className="flex flex-col gap-3">
      <h3 className="font-medium text-xl">{title}</h3>
      <div className="flex gap-2 items-end">
        <span className="font-semibold text-lg">$</span>
        <h2 className="font-bold text-4xl">{price}</h2>
        <span className="text-gray-600 md:text-base sm:text-sm dark:text-gray-400">
          Per Month
        </span>
      </div>
    </div>
    <div className="flex flex-col gap-4">
      <h4 className="font-medium text-lg">Features</h4>
      <ul className="text-gray-600 dark:text-gray-400 flex flex-col gap-2 text-md">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
    <div>
      <button className="bg-[#3758f9] mt-3 text-white py-2 hover:bg-[#344dcb] font-medium px-6 rounded-md duration-200">
        Purchase Now
      </button>
    </div>
  </div>
);

function Pricing() {
  const plans = [
    {
      title: "Starter",
      price: "25.00",
      features: [
        "Up to 1 User",
        "All UI components",
        "Lifetime access",
        "Free updates",
      ],
    },
    {
      title: "Basic",
      price: "59.00",
      features: [
        "Up to 1 User",
        "All UI components",
        "Lifetime access",
        "Free updates",
      ],
      recommended: true,
    },
    {
      title: "Premium",
      price: "99.00",
      features: [
        "Up to 1 User",
        "All UI components",
        "Lifetime access",
        "Free updates",
      ],
    },
  ];

  return (
    <div ref={pricingRef} className="py-28 dark:bg-[#111928]">
      <div className="text-center flex flex-col items-center justify-center gap-4 px-4">
        <p className="font-medium tracking-wide text-[#3758f9]">
          Pricing Table
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold dark:text-white">
          Awesome Pricing Plan
        </h1>
        <h2 className="text-sm max-w-xl text-gray-700 dark:text-gray-400">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </h2>
      </div>

      <div className="mt-16 flex justify-center gap-6 flex-wrap items-center">
        {plans.map((plan, index) => (
          <Card key={index} {...plan} />
        ))}
      </div>
    </div>
  );
}

export default Pricing;
