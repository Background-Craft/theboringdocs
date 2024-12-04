import { FancyScramble, Icon } from "@/components/bgc/fancy-scramble";
import Link from "next/link";

interface FeatureCardProps {
  title: string;
  description: string;
  ctaText: string;
  href: string;
}

export function FeatureCard({
  title,
  description,
  ctaText,
  href,
}: FeatureCardProps) {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] cursor-default [&>a]:cursor-pointer">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <FancyScramble text={title} />

      <h2 className="dark:text-white text-black mt-4 text-sm font-light">
        {description}
      </h2>
      <Link
        href={href}
        className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
        {ctaText}
      </Link>
    </div>
  );
}
