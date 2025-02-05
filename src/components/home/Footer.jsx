import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
  {
    title: "Contact us",
    href: "http://testtt.com",
  },
  {
    title: "Website Feedback",
    href: "http://testtt.com",
  },
  {
    title: "Terms of use",
    href: "http://testtt.com",
  },
];

const Footer = () => {
  return (
    <div className="w-full bg-black py-8 max-lg:h-36 h-20 text-white">
      <div className="lg:max-w-[1450px] flex max-lg:flex-col max-lg:space-y-4 lg:space-x-24 items-center justify-between w-full mx-auto xl:px-10 px-4">
        <p className="text-sm max-lg:text-xs flex-1 flex-shrink max-lg:text-center">
          © Nintendo. Games are property of their respective owners. Nintendo of
          America Inc. Headquarters are in Redmond, Washington, USA
        </p>
        <div className="flex space-x-2 items-center">
          <ul className="flex items-center space-x-6 text-sm max-lg:text-xs">
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <Link href="/" className="flex space-x-1 items-center">
            <Image
              src="/americaflag.jpg"
              alt="profile"
              width={45}
              height={25}
              className="rounded-lg"
            />
            <span className="hover:underline text-xs transition-all duration-300">
              English (United States)
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
