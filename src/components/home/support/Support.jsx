import UserInteract from "@/components/UserInteract";
import Image from "next/image";
import Link from "next/link";

const modes = [
  {
    title: "TV",
    image: "https://shadowindali.github.io/Nintendo/tv.png",
  },
  {
    title: "Tabletop",
    image: "https://shadowindali.github.io/Nintendo/tabletop.png",
  },
  {
    title: "Handheld",
    image: "https://shadowindali.github.io/Nintendo/handheld.png",
  },
];

const Support = () => {
  return (
    <div className="w-full">
      <div className="md-container grid md:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-8 bg-white-gray pt-6 pb-10 px-8 rounded-xl">
          <h1 className="text-center font-medium">ESRB rating</h1>
          <Link href="/" className="bg-white shadow-md py-4 px-5 rounded-xl">
            <UserInteract />
          </Link>
        </div>
        <div className="flex flex-col space-y-8 bg-white-gray pt-6 pb-10 px-8 rounded-xl">
          <h1 className="text-center font-semibold">Supported play modes</h1>
          <div className="py-4 px-5 rounded-xl grid grid-cols-3 gap-6">
            {modes.map((mode) => (
              <div key={mode.image}>
                <div className="bg-dark-gray grid h-20 place-items-center px-2 py-6 rounded-xl">
                  <Image
                    key={mode.image}
                    src={mode.image}
                    alt="mode"
                    width={50}
                    height={50}
                  />
                </div>
                <h1 className="text-center mt-2 font-semibold">{mode.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
