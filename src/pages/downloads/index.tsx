import type { NextPage } from "next";

import LeavesIcon from "@/assets/brand/leaves.svg";
import SoftwarePreview from "@/components/data/SoftwarePreview";
import SEO from "@/components/util/SEO";

const Downloads: NextPage = () => {
  return (
    <>
      <SEO
        title="Downloads"
        description="Find downloads for our software – including Nanaica."
        keywords={[
          "nanaicamc",
          "minecraft",
          "vanilla",
          "nanaica",
          "downloads",
        ]}
      />
      <header className="max-w-7xl flex flex-col items-center mx-auto px-4 pt-32 pb-16 lg:(pt-48 pb-26) gap-2">
        <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
          Downloads
        </h1>
        <p className="text-xl text-center mb-6">
          {"Select the software you want to download."}
        </p>
        <div className="grid md:grid-cols-3 lg:mt-6 gap-2 px-2 xl:gap-4">
          <SoftwarePreview
            id="nanaica"
            name="Nanaica"
            icon={LeavesIcon}
            description="Nanaica is a all in one Minecraft server implementation "
            download
          />
        </div>
      </header>
    </>
  );
};

export default Downloads;
