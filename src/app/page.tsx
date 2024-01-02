import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description: "Get your products delivered to your address within a day.",
  },
  {
    name: "Guranteed Quality",
    Icon: CheckCircle,
    description:
      "Every product on our platform is verified by our team to ensure out highest quality. Not happy ? We also have 30 day money back Gruantee.",
  },
  {
    name: "For the planet",
    Icon: Leaf,
    description:
      "we've pledged 1% of the sales to the preservation and restoration of the nature and environment. ",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl ">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Your Marketplace for high Quality{" "}
            <span className="text-primary"> digital assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to Digital Assets. Every product in our platform is verified
            by our team to ensure our highest quality standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href={"/products"} className={buttonVariants()}>
              {" "}
              Browse Trending
            </Link>
            <Button variant={"ghost"}>Our Quality Products &rarr;</Button>
          </div>
        </div>

        {/* TODO: List Products */}
      </MaxWidthWrapper>

      <section className="border-t border-accent bg-accent">
        <MaxWidthWrapper className="py-20 ">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-md text-foreground">{perk.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{perk.description} </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
