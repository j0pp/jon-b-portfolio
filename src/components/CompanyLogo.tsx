/* eslint-disable @next/next/no-img-element */
import { UWBlockWIcon } from "@/components/icons";

export type CompanyLogoId = "posh" | "uw";

/**
 * Company mark shown flat at the left of an Experience entry. The fixed
 * slot width keeps every entry's text column aligned.
 */
export default function CompanyLogo({ logo }: { logo: CompanyLogoId }) {
  return (
    <div aria-hidden className="w-12 flex-none pt-1">
      {logo === "uw" ? (
        <UWBlockWIcon className="h-6 w-auto text-[#4b2e83] dark:text-white" />
      ) : (
        <>
          <img
            src="/images/logos/posh-black.png"
            alt=""
            className="mt-1 w-11 dark:hidden"
          />
          <img
            src="/images/logos/posh-white.png"
            alt=""
            className="mt-1 hidden w-11 dark:block"
          />
        </>
      )}
    </div>
  );
}
