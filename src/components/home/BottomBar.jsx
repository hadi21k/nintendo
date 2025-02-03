import Image from "next/image";
import Link from "next/link";
const items = [
  {
    title: "About Nintendo",
    children: [
      { title: "Careers", link: "/" },
      { title: "Corporate Social Responsibility", link: "/" },
    ],
  },
  {
    title: "Shop",
    children: [
      { title: "Games", link: "/" },
      { title: "Hardware", link: "/" },
      { title: "Merchandise", link: "/" },
      { title: "Sales & deals", link: "/" },
      { title: "Exclusives", link: "/" },
      { title: "Online service", link: "/" },
      { title: "Nintendo NY store", link: "/" },
    ],
  },
  {
    //    Orders
    title: "Orders",
    children: [
      { title: "Order details", link: "/" },
      { title: "Shipping info", link: "/" },
      { title: "Returns & exchanges", link: "/" },
      { title: "FAQ", link: "/faq" },
    ],
  },
  {
    title: "Support",
    children: [
      { title: "Nintendo Switch", link: "/" },
      { title: "Nintendo Account", link: "/" },
      { title: "Other systems", link: "/" },
      { title: "Repairs", link: "/" },
      {
        title: "Nintendo product recycling",
        link: "/",
      },
      { title: "Warranty", link: "/" },
      {
        title: "Licensed product information",
        link: "/",
      },
    ],
  },
  {
    title: "Parents",
    children: [
      { title: "Parental controls", link: "/" },
      { title: "Safety", link: "/" },
    ],
  },
  {
    title: "Documents & policies",
    children: [
      {
        title: "Health & safety precautions",
        link: "/",
      },
      { title: "Wireless regulatory info", link: "/" },
      {
        title: "Supply chain transparency",
        link: "/",
      },
    ],
  },
];

const BottomBar = () => {
  return (
    <div className="w-full bg-white py-10">
      <div className="flex-col lg:max-w-[1500px] gap-y-10 flex justify-between w-full mx-auto xl:px-14 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
          {items.map((item, index) => (
            <div key={index} className="border-l px-4">
              <h1 className="text-lg font-medium">{item.title}</h1>
              <ul className="mt-2 flex flex-col gap-2 items-start">
                {item.children.map((child, index) => (
                  <Link
                    key={index}
                    href={child.link}
                    className="text-main block group relative font-medium hover:underline"
                  >
                    <li>{child.title}</li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-center md:justify-end">
          <Image
            src="https://shadowindali.github.io/Nintendo/certificate.png"
            width={100}
            height={100}
            alt="Nintendo certificate"
          />
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
