import { UWBlockWIcon } from "@/components/icons";

export type CompanyLogoId = "tabs" | "posh" | "uw";

const wordmarks = {
  tabs: { light: "/images/logos/tabs-black.png", dark: "/images/logos/tabs-white.png", width: 316, height: 120 },
  posh: { light: "/images/logos/posh-black.png", dark: "/images/logos/posh-white.png", width: 418, height: 120 },
} as const;

export default function CompanyLogo({ logo }: { logo: CompanyLogoId }) {
  if (logo === "uw") {
    return (
      <div aria-hidden className="w-12 flex-none pt-1">
        <UWBlockWIcon className="h-6 w-auto text-[#4b2e83] dark:text-white" />
      </div>
    );
  }

  const { light, dark, width, height } = wordmarks[logo];
  return (
    <div aria-hidden className="w-12 flex-none pt-1">
      <img
        src={light}
        alt=""
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className="mt-1 h-auto w-11 dark:hidden"
      />
      <img
        src={dark}
        alt=""
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className="mt-1 hidden h-auto w-11 dark:block"
      />
    </div>
  );
}
