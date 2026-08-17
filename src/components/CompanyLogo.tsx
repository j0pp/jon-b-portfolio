/* eslint-disable @next/next/no-img-element */
import { UWBlockWIcon } from "@/components/icons";

export type CompanyLogoId = "posh" | "uw";

/**
 * LinkedIn/Spotlight-style logo chip shown at the left of an Experience
 * entry: a small rounded container with a subtle ring holding the mark.
 */
export default function CompanyLogo({ logo }: { logo: CompanyLogoId }) {
  return (
    <div
      aria-hidden
      className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white shadow-md ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
    >
      {logo === "uw" ? (
        <UWBlockWIcon className="h-5 w-auto text-[#4b2e83] dark:text-white" />
      ) : (
        <>
          <img
            src="/images/logos/posh-black.png"
            alt=""
            className="w-8 dark:hidden"
          />
          <img
            src="/images/logos/posh-white.png"
            alt=""
            className="hidden w-8 dark:block"
          />
        </>
      )}
    </div>
  );
}
