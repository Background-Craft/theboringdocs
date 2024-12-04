import Link from "next/link";
import { ReactNode } from "react";

interface BGCButtonProps {
  href: string;
  text: string;
  icon?: ReactNode;
  external?: boolean;
}

export function BGCButton({
  href,
  text,
  icon,
  external = false,
}: BGCButtonProps) {
  return (
    <Link
      href={href}
      {...(external && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      className="px-4 py-2 rounded-md border border-primary bg-background text-primary text-sm hover:shadow-[4px_4px_0px_0px_hsl(var(--primary))] transition duration-200 flex items-center gap-2">
      {text}
      {icon}
    </Link>
  );
}
