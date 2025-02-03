"use client";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import AnimatedButton from "@/components/ui/animated-button";
import Link from "next/link";

const Explore = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="w-full">
      <div className="lg:max-w-[1250px] w-full mx-auto xl:px-14 px-4">
        <div className="flex max-md:flex-col max-md:space-y-8 md:space-x-8 justify-between">
          <div className="flex flex-col space-y-6">
            <h1 className="md:text-3xl font-medium text-lg">
              You're moving to the valley...
            </h1>
            <p className="text-gray-500 text-sm tracking-wide">
              You’ve inherited your grandfather’s old farm plot in Stardew
              Valley. Armed with hand-me-down tools and a few coins, you set out
              to begin your new life. Can you learn to live off the land and
              turn these overgrown fields into a thriving home? It won’t be
              easy. Ever since Joja Corporation came to town, the old ways of
              life have all but disappeared. The community center, once the
              town’s most vibrant hub of activity, now lies in shambles. But the
              valley seems full of opportunity. With a little dedication, you
              might just be the one to restore Stardew Valley to greatness!
            </p>
            <p className="text-gray-500 text-sm">
              Now with Multiplayer! Invite 1-3 players to join you in the
              valley! Players ca
              {showMore
                ? "n work together to build a thriving farm, share resources, and build relationships with townspeople or each other. As more hands are better than one, players have the option to scale profit margin on produce sold for a more challenging experience."
                : "..."}
            </p>

            <div
              onClick={() => setShowMore(!showMore)}
              className="flex items-center w-32 text-main font-bold cursor-pointer"
            >
              {showMore ? <Plus /> : <Minus />}
              {showMore ? "Show Less" : "Show More"}
            </div>
            <p className="text-gray-500 text-xs">
              Software description provided by the publisher.
            </p>
            <div className="flex justify-start">
              <AnimatedButton
                hoverClassName="bg-main rounded-xl"
                className="py-3 px-5 rounded-xl bg-main text-white hover:bg-main"
              >
                <Link
                  className="text-white text-base flex items-center justify-center gap-2 z-10"
                  href="/"
                >
                  Explore this game's official website
                </Link>
              </AnimatedButton>
            </div>
          </div>
          <Image
            src="https://shadowindali.github.io/Nintendo/main1.avif"
            width={450}
            height={450}
            alt="game"
            className="md:w-1/2 w-full h-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
