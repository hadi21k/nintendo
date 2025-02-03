import Image from "next/image";
import {
  Check,
  Cloud,
  ExternalLink,
  Gift,
  Newspaper,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const buttons = [
  {
    title: "My Ninetendo",
    url: "/",
    icon: <Cloud className="text-main" />,
  },
  {
    title: "Redeem code",
    url: "/",
    icon: <Gift className="text-main" />,
  },
  {
    title: "Account settings",
    url: "/",
    icon: <Settings className="text-main" />,
  },
];

const LoginDetails = () => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-7">
        <Image
          src="/login-bg.png"
          alt="Nintendo Logo"
          width={300}
          height={300}
          className="w-full h-full object-center"
        />
        <h1 className="text-xl">With a free account, you can</h1>

        <ul className="flex flex-col space-y-4">
          <li className="flex gap-x-2 items-center">
            <Check className="w-4 h-4" />
            Shop online
          </li>

          <li className="flex gap-x-2 items-center">
            <Check className="w-4 h-4" />
            Earn My Nintendo points
          </li>

          <li className="flex gap-x-2 items-center">
            <Check className="w-4 h-4" />
            Save a Wish List
          </li>
        </ul>
      </div>

      <div className="flex flex-col space-y-4">
        <Button
          className="ring-0 rounded-xl bg-main hover:bg-main/80 p-6 text-lg"
          onClick={() => setLoginSignUpMenuIsOpen(false)}
        >
          Log in
        </Button>
        <Button
          className="ring-0 border border-main rounded-xl bg-white text-main hover:bg-main/20 p-6 text-lg"
          onClick={() => setLoginSignUpMenuIsOpen(false)}
        >
          Sign up
        </Button>
      </div>

      <Button className="bg-white hover:bg-white group rounded-xl flex justify-start text-black text-right px-10 py-6 shadow-sm">
        <Newspaper className="text-main" />
        <span className="group-hover:text-main">Order status</span>
      </Button>

      <div className="flex flex-col">
        {buttons.map((button, index) => (
          <Button
            key={index}
            className={`bg-white rounded-none hover:bg-white group flex justify-between text-black text-right px-10 py-6 shadow-sm ${
              index === buttons.length - 1
                ? "rounded-b-xl border"
                : index === 0
                ? "rounded-t-xl border"
                : "rounded-none border-x"
            }`}
          >
            <div className="flex items-center gap-x-2">
              {button.icon}
              <span className="group-hover:text-main">{button.title}</span>
            </div>
            <ExternalLink className="group-hover:text-main" />
          </Button>
        ))}
      </div>
    </>
  );
};

export default LoginDetails;
