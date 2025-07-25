import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import dots from "../../assets/img/team/dotted-shape.svg";
import shape from "../../assets/img/team/shape-2.svg";
import { teamRef } from "../Navbar/Navbar";

const teamMembers = [
  {
    id: 1,
    name: "Hamid Karimi",
    role: "Full-stack developer",
    image: "./hamid-karimi-web.png",
  },
  {
    id: 2,
    name: "Sayed Naeam Hashemi",
    role: "UI/UX Designer",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGl5-j9XQvFBw/profile-displayphoto-shrink_200_200/B56ZYlgrX0GoAc-/0/1744386050475?e=2147483647&v=beta&t=eoKINQppuBcVPY6umIM1erSfjnfcListWoV37-ztqF8",
  },
  {
    id: 3,
    name: "Zakirullah Aminy",
    role: "Frontend Developer",
    image: "https://avatars.githubusercontent.com/u/187499395?v=4",
  },
  {
    id: 4,
    name: "Abdul Tawab",
    role: "Project Manager",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHFvW6q-d2U_A/profile-displayphoto-shrink_200_200/B56ZaW00AbGUAY-/0/1746287150561?e=2147483647&v=beta&t=jwijnuSTIczJwiB0msMd8m4CkHHMfrmb9j9GeLvLEIo",
  },
];

function Team() {
  return (
    <div ref={teamRef} className="relative py-28 bg-[#f9fafb] dark:bg-[#1f2a37]">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 text-center px-6">
        <p className="font-medium tracking-wide text-[#3758f9]">
          Our Team Members
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold dark:text-white">
          Our Creative Team
        </h1>
        <p className="text-sm max-w-xl text-gray-700 dark:text-gray-400">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>

      {/* Team Cards */}
      <div className="px-10 mt-16 flex flex-wrap gap-7 justify-center items-center">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group relative z-10 w-[90%] sm:w-[45%] md:w-[22%] lg:w-[23%] bg-white dark:bg-[#111928] shadow-md rounded-xl py-10 px-6 flex flex-col items-center text-center gap-4 transition-transform hover:-translate-y-1"
          >
            <div className="relative z-20">
              <div className="w-24 h-24 bg-red-200 rounded-full overflow-hidden">
                <img
                src={member.image}
                className="w-24 z-10"
                alt={`${member.name}'s profile`}
              />
              </div>
              <img
                src={dots}
                className="absolute hidden group-hover:block duration-500 -top-1 -right-1 -z-10"
                alt=""
              />
              <img
                src={shape}
                className="absolute hidden group-hover:block duration-500 -bottom-1 -left-1 -z-10"
                alt=""
              />
            </div>
            <div>
              <h2 className="font-semibold text-md dark:text-white">
                {member.name}
              </h2>
              <p className="text-[13px] mt-1 text-gray-600 dark:text-gray-400">
                {member.role}
              </p>
            </div>
            <div className="flex gap-4 text-gray-400">
              <FaFacebookF
                className="cursor-pointer hover:text-[#3758f9]"
                aria-label="Facebook"
              />
              <FaTwitter
                className="cursor-pointer hover:text-[#3758f9]"
                aria-label="Twitter"
              />
              <FaInstagram
                className="cursor-pointer hover:text-[#3758f9]"
                aria-label="Instagram"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
