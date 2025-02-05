"use client";
import AnimatedButton from "@/components/ui/animated-button";
import Image from "next/image";
import Link from "next/link";

const PlayOnline = () => {
  return (
    <div className="w-full">
      <div className="md-container">
        <div className="bg-white-gray grid md:grid-cols-2 md:gap-8 rounded-xl">
          <div className="flex flex-col space-y-8 p-7 justify-between">
            <Image
              src="https://shadowindali.github.io/Nintendo/online.png"
              alt="online"
              width={100}
              height={100}
            />
            <p className="font-semibold md:text-lg lg:text-xl">
              Play online, access classic NES™ and Super NES™ games, and more
              with a Nintendo Switch Online membership.
            </p>

            <div>
              This game supports:{" "}
              <Link
                href="/"
                className="text-main mr-2 font-bold underline underline-offset-4"
              >
                Online Play
              </Link>
              <Link
                href="/"
                className="text-main font-bold underline underline-offset-4"
              >
                Online Play
              </Link>
            </div>
            <div className="flex">
              <AnimatedButton
                hoverClassName="bg-main rounded-xl"
                className="p-3 rounded-xl bg-main text-white hover:bg-main"
              >
                <h1 className="text-white flex items-center justify-center gap-2 z-10">
                  Learn more
                </h1>
              </AnimatedButton>
            </div>
          </div>
          <div className="grid place-items-center">
            <Image
              src="https://shadowindali.github.io/Nintendo/controllerhand.avif"
              alt="online"
              width={900}
              height={900}
              className="h-[75%] lg:h-full max-md:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayOnline;
