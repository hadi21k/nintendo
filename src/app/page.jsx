import BottomBar from "@/components/home/BottomBar";
import Disclaimer from "@/components/home/Disclaimer";
import Explore from "@/components/home/explore/Explore";
import Footer from "@/components/home/Footer";
import Games from "@/components/home/games/Games";
import Hero from "@/components/home/hero/Hero";
import Information from "@/components/home/information/Information";
import Links from "@/components/home/LinksFooter";
import PlayOnline from "@/components/home/play-online/PlayOnline";
import Support from "@/components/home/support/Support";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mt-32 flex flex-col space-y-14">
        <Explore />
        <Support />
        <Information />
        <PlayOnline />
        <Games />
        <Disclaimer />
        <div>
          <Links />
          <BottomBar />
          <Footer />
        </div>
      </div>
    </main>
  );
}
