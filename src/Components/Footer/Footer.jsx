import React from "react";
import play from "../../assets/img/logo/logo-white.svg";
import footer1 from "../../assets/img/blog/blog-footer-01.jpg";
import footer2 from "../../assets/img/blog/blog-footer-02.jpg";
import footer3 from "../../assets/img/footer/shape-1.svg";
import footer4 from "../../assets/img/footer/shape-3.svg";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

// Footer Link Section Component
const FooterSection = ({ title, links }) => (
  <div className="w-full sm:w-1/2 lg:w-[23%] mb-8 sm:mb-0">
    <h3 className="text-white font-semibold text-lg mb-4">{title}</h3>
    <ul className="text-gray-300 flex flex-col gap-3">
      {links.map((link) => (
        <li key={link} className="cursor-pointer text-sm hover:text-[#3758f9]">
          {link}
        </li>
      ))}
    </ul>
  </div>
);

// Latest Blog Item Component
const FooterBlog = ({ image, title, date }) => (
  <div className="flex gap-4 items-center">
    <img src={image} alt={title} className="w-12 h-12 rounded-md" />
    <div>
      <h5 className="text-sm text-white mb-1">{title}</h5>
      <span className="text-xs text-gray-400">{date}</span>
    </div>
  </div>
);

// Footer Bottom Component
const FooterBottom = () => (
  <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6">
    <p className="text-gray-300 text-sm text-center">
      © 2025 Made by <a className="text-blue-500" href="https://www.linkedin.com/in/hamid-karimi-0479a72b2" target="_blank">Hamid Karimi</a>. All Rights Reserved.
    </p>
    <ul className="flex items-center gap-6 text-gray-300 text-sm">
      <li className="hover:text-[#3758f9] cursor-pointer">Privacy Policy</li>
      <li className="hover:text-[#3758f9] cursor-pointer">Terms of Use</li>
    </ul>
  </div>
);

const Footer = () => {
  const aboutLinks = ["Home", "Features", "About", "Testimonial"];
  const featureLinks = ["How it works", "Privacy policy", "Terms of use", "Refund policy"];
  const productLinks = ["Database", "Security", "Pricing", "Support"];

  return (
    <footer className="relative bg-[#0F172A] pt-20 z-10">
      <img src={footer3} alt="Background Shape" className="absolute top-0 left-0" />
      <img src={footer4} alt="Background Shape" className="absolute bottom-0 right-0" />
      <div className="container mx-auto px-6 sm:px-12">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="w-full sm:w-1/2 lg:w-[30%]">
            <img src={play} alt="Company Logo" className="mb-6" />
            <p className="text-gray-300 text-sm mb-4">
              Our mission is to provide quality information and digital products for all.
            </p>
            <div className="flex gap-4 text-white text-lg absolute">
              <a href="https://www.facebook.com/people/Hamid-Karimi/100090254793971/?mibextid=ZbWKwL" target="_blank">
                <FaFacebookF aria-label="Facebook" className="hover:text-[#3758f9] cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/hamid-karimi-0479a72b2" target="_blank">
              <FaInstagram aria-label="Instagram" className="hover:text-[#E1306C] cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/hamid-karimi-0479a72b2" target="_blank">
              <FaLinkedin aria-label="LinkedIn" className="hover:text-[#0A66C2] cursor-pointer" />
              </a>
              <a href="https://github.com/hamidukarimi" target="_blank">
              <FaGithub aria-label="Twitter" className="hover:text-black cursor-pointer" />
              </a>
            </div>
          </div>

          <FooterSection title="About Us" links={aboutLinks} />
          <FooterSection title="Features" links={featureLinks} />
          <FooterSection title="Our Products" links={productLinks} />

          <div className="w-full sm:w-1/2 lg:w-[30%]">
            <h3 className="text-white font-semibold text-lg mb-4">Latest Blog</h3>
            <div className="flex flex-col gap-6">
              <FooterBlog
                image={footer1}
                title="Tips for better productivity"
                date="July 20, 2025"
              />
              <FooterBlog
                image={footer2}
                title="How to stay focused"
                date="July 18, 2025"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12" />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
