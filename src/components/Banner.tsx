import { Banner, BannerCollapseButton, Button } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { Link } from "react-router";
import { LogoComponent } from "./LogoComponent";

export default function BannerComponent() {
  return (
    <Banner>
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between rounded-lg bg-linear-to-r from-vibrant-start to-vibrant-end border border-gray-100 p-4 shadow-sm md:flex-row lg:max-w-7xl dark:border-gray-600 dark:bg-gray-800">
        <div className="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
          <Link to="/">
            <LogoComponent className="size-8" />
          </Link>
          <span className="self-center whitespace-nowrap text-lg font-semibold md:pr-6 dark:text-white">
            Flash Sales
          </span>
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-800">
            This is the banner component where we can attach the banners
          </p>
        </div>
        <div className="flex gap-8 shrink-0 items-center">
          <Button href="#" className="bg-primary">
            Go to Sales
          </Button>
          <BannerCollapseButton
            color="gray"
            className="border-0 bg-transparent hover:bg-transparent"
          >
            <HiX className="h-4 w-4 cursor-pointer"/>
          </BannerCollapseButton>
        </div>
      </div>
    </Banner>
  );
}
