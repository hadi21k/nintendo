import UserInteract from "@/components/UserInteract";
import Image from "next/image";
import Link from "next/link";

const modes = [
  "https://shadowindali.github.io/Nintendo/tv.png",
  "https://shadowindali.github.io/Nintendo/tabletop.png",
  "https://shadowindali.github.io/Nintendo/handheld.png",
];

const Support = () => {
  return (
    <div className="w-full">
      <div className="md-container grid sm:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-8 bg-white-gray pt-6 pb-10 px-8 rounded-xl">
          <h1 className="text-center font-medium">ESRB rating</h1>
          <Link href="/" className="bg-white shadow-md py-4 px-5 rounded-xl">
            <UserInteract />
          </Link>
        </div>
        <div className="flex flex-col space-y-8 bg-white-gray pt-6 pb-10 px-8 rounded-xl">
          <h1 className="text-center font-medium">Supported play modes</h1>
          <div className="py-4 px-5 rounded-xl grid grid-cols-3 gap-6">
            {modes.map((mode) => (
              <div
                key={mode}
                className="bg-dark-gray grid place-items-center px-2 py-6 rounded-xl"
              >
                <Image
                  key={mode}
                  src={mode}
                  alt="mode"
                  width={50}
                  height={50}
                  className="max-w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
