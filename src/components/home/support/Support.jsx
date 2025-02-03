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
      <div className="lg:max-w-[1250px] w-full mx-auto xl:px-14 px-4 grid sm:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-8 bg-white-gray pt-6 pb-10 px-8 rounded-xl">
          <h1 className="text-center font-medium">ESRB rating</h1>
          <div className="bg-white shadow-md py-4 px-5 rounded-xl">
            <Link href="/" className="flex cursor-pointer space-x-4">
              <Image
                src="https://nintendo-khodor.surge.sh/E.svg"
                alt="E"
                width={40}
                height={40}
              />
              <div className="max-w-sm text-gray-400">
                <h1 className="text-xs border-b py-1 border-black">
                  Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated
                  Gambling, Mild Language, Mild Blood
                </h1>
                <h1 className="text-xs py-1">Users Interact</h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-8 bg-white-gray pt-6 pb-10 px-8 rounded-xl">
          <h1 className="text-center font-medium">Supported play modes</h1>
          <div className="py-4 px-5 rounded-xl grid grid-cols-3 gap-6">
            {modes.map((mode) => (
              <div
                key={mode}
                className="bg-[#484848] grid place-items-center px-2 py-6 rounded-xl"
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
