
import star from "../../assets/img/testimonials/icon-star.svg";

const testimonialsData = [
  {
    id: 1,
    author: "Hamid Karimi",
    title: "Full-stack developer",
    image: "./hamid-karimi.png",
    text: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
  },
  {
    id: 2,
    author: "Sayed Naeam Hashemi",
    title: "Full-stack developer",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGl5-j9XQvFBw/profile-displayphoto-shrink_200_200/B56ZYlgrX0GoAc-/0/1744386050475?e=2147483647&v=beta&t=eoKINQppuBcVPY6umIM1erSfjnfcListWoV37-ztqF8",
    text: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
  },
  {
    id: 3,
    author: "Zakirullah Aminy",
    title: "Full-stack developer",
    image: "https://avatars.githubusercontent.com/u/187499395?v=4",
    text: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
  },
];

const TestimonialCard = ({ image, author, title, text }) => (
  <div className="bg-white dark:text-white dark:bg-[#111928] w-full sm:w-[45%] lg:max-w-sm px-8 rounded-xl py-7 flex flex-col gap-5 shadow-md">
    <div className="flex gap-1">
      {[...Array(5)].map((_, idx) => (
        <img key={idx} src={star} alt="Star" className="w-4" />
      ))}
    </div>
    <p className="text-sm w-[93%] font-semibold text-gray-500 dark:text-gray-400">
      {text}
    </p>
    <div className="flex items-center gap-4">
      <div className="w-10  rounded-full  overflow-hidden">
        <img src={image} alt={author} className=" object-cover" />
      </div>
      <div className="cursor-pointer">
        <h1 className="text-sm font-semibold">{author}</h1>
        <p className="text-[12px] text-gray-500">{title}</p>
      </div>
    </div>
  </div>
);

function Testimonials() {
  return (
    <section className="py-28 bg-[#f9fafb] dark:bg-[#1f2a37]">
      <div className="flex flex-col items-center gap-4 text-center px-6">
        <p className="font-medium tracking-wide text-[#3758f9]">Testimonials</p>
        <h1 className="text-3xl lg:text-4xl font-bold dark:text-white">
          What our Clients Say
        </h1>
        <p className="text-sm sm:w-[480px] text-gray-700 dark:text-gray-400">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center px-10 mt-16">
        {testimonialsData.map((item) => (
          <TestimonialCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
