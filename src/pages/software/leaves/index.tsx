import Image from "next/image";
import type { ReactElement } from "react";

import LeavesIcon from "@/assets/brand/leaves.svg";
import BoltIcon from "@/assets/icons/heroicons/bolt.svg";
import ChatBubbleLeftRightIcon from "@/assets/icons/heroicons/chat-bubble-left-right.svg";
import CodeBracketIcon from "@/assets/icons/heroicons/code-bracket.svg";
import CommunityImage from "@/assets/images/community.png";
import HomeImage from "@/assets/images/home.png";
import FeatureCard from "@/components/data/FeatureCard";
import Button from "@/components/input/Button";
import SoftwareHeader from "@/components/layout/SoftwareHeader";
import SEO from "@/components/util/SEO";
import type { ProjectProps } from "@/lib/context/downloads";
import { getProjectProps } from "@/lib/context/downloads";

const LeavesHome = ({ project }: ProjectProps): ReactElement => {
  return (
    <>
      <SEO
        title="Nanaica"
        description="Nanaica is a all in one Minecraft server implementation."
        keywords={[
          "nanaicamc",
          "nanaica",
          "server",
          "minecraft",
          "vanilla",
          "paper",
          "fork",
        ]}
      />
      <SoftwareHeader
        id="nanaica"
        name="Nanaica"
        versionGroup={project.latestVersionGroup}
        icon={LeavesIcon}
        header={
          <>
            Performance Matters
            <br />
            <span className="text-green-500">Minecraft server</span>
          </>
        }
        description="Nanaica is a all in one Minecraft server implementation."
      />
      <section
        id="why"
        className="w-full pt-10 pb-5 bg-green-100 dark:bg-background-dark-80"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-semibold text-xl md:text-2xl px-6 lg:px-4">
            Why Leaves?
          </h2>
          <div className="grid md:grid-cols-3 mt-6 gap-2 px-2 xl:gap-4">
            <FeatureCard
              icon={BoltIcon}
              label="It's stupidly fast"
              description="Nanaica contains numerous improvements and optimizations resulting in a significant increase in performance. This includes asynchronous chunk loading, as well as major optimizations to the light engine, hoppers, entities, and more."
            />
            <FeatureCard
              icon={ChatBubbleLeftRightIcon}
              label="An active and growing community"
              description="Nanaica has an active and growing community of server administrators and developers. If you encounter any problems, you can come talk with us on Discord and get real time support."
            />
            <FeatureCard
              icon={CodeBracketIcon}
              label="An expanded API"
              description="Nanaica extends and improves the Bukkit and Paper APIs so that you and your developers have more features and functionality at your fingertips."
            />
          </div>
        </div>
      </section>
      <section
        id="facts"
        className="flex flex-col max-w-7xl mx-auto px-4 py-8 gap-8 md:(gap-12 py-16)"
      >
        <div className="flex flex-col gap-6 md:(flex-row-reverse gap-8) xl:gap-24 items-center">
          <div className="w-full flex-1 rounded-xl bg-gray-900 aspect-video relative overflow-clip">
            <Image
              alt=""
              src={HomeImage}
              objectFit="cover"
              layout="fill"
              placeholder="blur"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-2xl md:text-4xl break-all">
              Getting Started
            </h2>
            <p className="md:(mt-6 text-xl) text-gray-900 dark:text-gray-100 mt-3">
              To get started with Leaves, you will need to download and install
              the latest version of the server software. Once you&apos;re ready,
              take a look at our extensive documentation.
            </p>
            <div className="flex flex-row gap-4 mt-8">
              <Button variant="filled" href="/downloads/leaves" dense>
                Downloads
              </Button>
              <Button
                variant="outlined"
                href="https://docs.nanaicamc.tk"
                external
                dense
              >
                Documentation
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:(flex-row gap-8) xl:gap-24 items-center">
          <div className="w-full flex-1 rounded-xl aspect-video relative overflow-clip">
            <Image
              alt=""
              src={CommunityImage}
              objectFit="cover"
              layout="fill"
              placeholder="blur"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-2xl md:text-4xl">
              Together with a community of server owners
            </h2>
            <p className="md:(mt-6 text-xl) text-gray-900 dark:text-gray-100 mt-3">
              Whether you need help with your server settings, server lag, or
              need a guide for formatting your chat, our knowledgeable staff and
              friendly community are always around to lend a hand.
            </p>
            <div className="flex flex-row gap-4 mt-8">
              <Button
                variant="filled"
                href="https://dsc.gg/nanaicamc"
                external
                dense
              >
                Join Our Discord
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

LeavesHome.softwareProps = {
  github: "https://github.com/Nanaica/NanaicaMC",
};

export default LeavesHome;

export const getStaticProps = getProjectProps("leaves");
