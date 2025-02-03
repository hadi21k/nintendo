import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black py-4 min-h-20 flex items-center text-white">
      <div className="lg:max-w-[1450px] flex max-md:flex-col max-md:space-y-4 items-center justify-between w-full mx-auto xl:px-14 px-4">
        <p className="text-sm max-md:text-xs max-md:text-center">
          © Nintendo. Games are property of their respective owners. Nintendo of
          America Inc. Headquarters are in Redmond, Washington, USA
        </p>
        <div className="flex space-x-4 items-center">
          <ul className="flex items-center space-x-2 text-sm max-md:text-xs">
            <Link href="http://testtt.com">
              <li>Contact us</li>
            </Link>
            <Link href="http://testtt.com">
              <li>Website Feedback</li>
            </Link>
            <Link href="http://testtt.com">
              <li>Terms of use</li>
            </Link>
          </ul>
          <Link href="/" className="flex space-x-2">
            <Image
              src="/americaflag.jpg"
              alt="profile"
              width={20}
              height={20}
            />
            <span className="hover:underline text-xs transition-all duration-300">English (United States)</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
