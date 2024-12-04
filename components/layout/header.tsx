import Link from "next/link";
import LogoSquare from "@/components/logos/square";

export default function SiteHeader() {
  return (
    <header className="sticky top-4 z-50 px-4">
      <div className="mx-auto max-w-7xl flex items-center justify-between relative lg:bg-transparent lg:backdrop-blur-none bg-background/15 backdrop-blur-lg rounded px-4 py-2">
        <div className="w-[160px] sm:w-[200px] lg:px-2 lg:py-1">
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-4 font-light text-muted-foreground leading-snug group">
            <div className="relative">
              <LogoSquare
                height={36}
                width={36}
                className="text-primary sm:h-[42px] sm:w-[42px]"
              />
            </div>
            <div className="flex flex-col justify-center font-light text-lg text-muted-foreground leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span>The Boring</span>
              <span>Docs</span>
            </div>
          </Link>
        </div>

        <div className="w-[160px] sm:w-[200px] flex justify-end lg:px-2 lg:py-1">
          <Link
            href="https://backgroundcraft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium">
            Background Craft →
          </Link>
        </div>
      </div>
    </header>
  );
}