"use client";

import { Link, usePathname } from "@/navigation";

import ReelsSVG from "./svg/ReelsSVG";

export default function ReelsButton() {
  const pathName = usePathname();

  return (
    <>
      <Link
        href="/feed/profile/reels"
        className={`w-1/3 flex justify-center items-center py-3 ${
          pathName.includes("reels")
            ? "border-b-2 md:border-b-4 border-current"
            : ""
        } `}>
        <ReelsSVG />
      </Link>
    </>
  );
}
