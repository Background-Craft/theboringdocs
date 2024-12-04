import Link from "next/link";
import LogoSquare from "@/components/logos/square";
import { ExternalLink } from "lucide-react";
import { BGCButton } from "@/components/bgc/button";
import { LightSwitch } from "@/components/bgc/light-switch";

export default function SiteHeader() {
  return (
    <header className="top-4 z-50 px-4">
      <div className="mx-auto max-w-7xl flex items-center justify-between relative lg:bg-transparent lg:backdrop-blur-none bg-background/15 backdrop-blur-lg rounded px-4 py-2">
        <div className="w-[160px] sm:w-[200px] lg:px-2 lg:py-1">
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-4 font-light text-muted-foreground leading-snug">
            <div className="relative">
              <LogoSquare
                height={36}
                width={36}
                className="text-primary sm:h-[42px] sm:w-[42px]"
              />
            </div>
            <div className="flex flex-col justify-center font-light text-lg text-muted-foreground leading-tight transition-opacity duration-200">
              <span>The Boring</span>
              <span>Docs</span>
            </div>
          </Link>
        </div>

        <div className="flex items-center justify-end lg:px-2 lg:py-1">
          <LightSwitch />
          <BGCButton
            href="https://backgroundcraft.com"
            text="Background Craft"
            icon={<ExternalLink className="h-4 w-4 mb-1" />}
          />
        </div>
      </div>
    </header>
  );
}
