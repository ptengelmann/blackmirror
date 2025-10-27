"use client";

import Hero from "@/components/Hero";
import IconicReflections from "@/components/IconicReflections";
import ChooseYourPath from "@/components/ChooseYourPath";
import EpisodeCarousel from "@/components/EpisodeCarousel";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <IconicReflections />
      <ChooseYourPath />
      <EpisodeCarousel />
      <Newsletter />
    </>
  );
}
