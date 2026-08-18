import type { ReactNode } from "react";

export default function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-16 first:mt-0">
      <h2 className="mb-6 text-sm font-semibold tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
        {title}
      </h2>
      {children}
    </section>
  );
}
