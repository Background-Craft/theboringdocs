import Link from "next/link";
import { FeatureCard } from "./_components/feature-card";
import { FEATURES } from "@/lib/content/features";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="space-y-6 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter glitch-text z-10 animate-glitch p-6 md:p-12 md:text-8xl">
          Legal Docs That Don&apos;t Suck™
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          Because launching your website shouldn&apos;t require a law degree. Or
          dealing with lawyers. Or reading 47 pages of legal jargon that makes
          your brain melt.
        </p>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col md:flex-row justify-center gap-6 flex-wrap">
        {FEATURES.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            ctaText={feature.ctaText}
            href={feature.href}
          />
        ))}
      </section>

      {/* Disclaimer Section */}
      <section className="text-center max-w-2xl mx-auto border border-muted rounded-lg p-6 bg-muted/50">
        <p className="text-sm text-muted-foreground">
          <span className="block text-lg font-mono font-semibold mb-2">
            The Fine Print
          </span>
          Look, we&apos;re not lawyers. We just play them on the internet. But
          if you&apos;re a{" "}
          <Link
            href="https://backgroundcraft.com"
            className="text-muted-foreground hover:text-primary underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer">
            Background Craft
          </Link>{" "}
          client, we&apos;ll handle all this boring stuff for you. *wink*
        </p>
      </section>
    </>
  );
}
