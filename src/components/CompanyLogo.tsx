/* eslint-disable @next/next/no-img-element */
import { UWBlockWIcon } from "@/components/icons";

export type CompanyLogoId = "posh" | "uw";

/** Small brand mark rendered beside a company name in the Experience list. */
export default function CompanyLogo({ logo }: { logo: CompanyLogoId }) {
  if (logo === "uw") {
    return (
      <UWBlockWIcon
        aria-hidden
        className="inline-block h-4 w-auto text-[#4b2e83] dark:text-white"
      />
    );
  }
  return (
    <span aria-hidden>
      <img
        src="/images/logos/posh-black.png"
        alt=""
        className="inline-block h-4 w-auto dark:hidden"
      />
      <img
        src="/images/logos/posh-white.png"
        alt=""
        className="hidden h-4 w-auto dark:inline-block"
      />
    </span>
  );
}
