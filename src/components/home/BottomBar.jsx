import Image from "next/image";
import Link from "next/link";
const items = [
  {
    title: "About Nintendo",
    children: [
      { title: "Careers", link: "/company" },
      { title: "Corporate Social Responsibility", link: "/csr" },
    ],
  },
  {
    title: "Shop",
    children: [
      { title: "Games", link: "/games" },
      { title: "Hardware", link: "/hardware" },
      { title: "Merchandise", link: "/merchandise" },
      { title: "Sales & deals", link: "/sales-deals" },
      { title: "Exclusives", link: "/exclusives" },
      { title: "Online service", link: "/online-service" },
      { title: "Nintendo NY store", link: "/nintendo-ny-store" },
    ],
  },
  {
    //    Orders
    title: "Orders",
    children: [
      { title: "Order details", link: "/order-details" },
      { title: "Shipping info", link: "/shipping-info" },
      { title: "Returns & exchanges", link: "/returns-exchanges" },
      { title: "FAQ", link: "/faq" },
    ],
  },
  {
    title: "Support",
    children: [
      { title: "Nintendo Switch", link: "/nintendo-switch" },
      { title: "Nintendo Account", link: "/nintendo-account" },
      { title: "Other systems", link: "/other-systems" },
      { title: "Repairs", link: "/repairs" },
      {
        title: "Nintendo product recycling",
        link: "/nintendo-product-recycling",
      },
      { title: "Warranty", link: "/warranty" },
      {
        title: "Licensed product information",
        link: "/licensed-product-information",
      },
    ],
  },
  {
    title: "Parents",
    children: [
      { title: "Parental controls", link: "/parental-controls" },
      { title: "Safety", link: "/safety" },
    ],
  },
  {
    title: "Documents & policies",
    children: [
      {
        title: "Health & safety precautions",
        link: "/health-safety-precautions",
      },
      { title: "Wireless regulatory info", link: "/wireless-regulatory-info" },
      {
        title: "Supply chain transparency",
        link: "/supply-chain-transparency",
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
                    className="text-main block group relative font-medium"
                  >
                    <li>{child.title}</li>
                    <div className="absolute bg-main bottom-0 inset-x-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0.5" />
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
