import { FancyScramble, Icon } from "@/components/bgc/fancy-scramble";
import { BGCButton } from "@/components/bgc/button";
import { FilePlus2 } from "lucide-react";

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
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative cursor-default [&>a]:cursor-pointer">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <FancyScramble text={title} />

      <h2 className="dark:text-white text-black mt-4 text-sm font-light">
        {description}
      </h2>
      <div className="mt-4">
        <BGCButton
          href={href}
          text={ctaText}
          icon={<FilePlus2 className="h-4 w-4" />}
        />
      </div>
    </div>
  );
}
