import React from "react";
import { BeakerIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="font-sans">
      <section className="py-10">
        <section className="pt-12">
          <div className="container max-w-7xl">
            <div className="mx-auto flex max-w-4xl flex-col items-center">
              <div className="z-10 flex flex-col items-center gap-6 text-center">
                <div>
                  <h1 className="mb-4 text-pretty text-2xl font-bold lg:text-4xl">
                    The ultimate{" "}
                    <span className="font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                      icon library
                    </span>{" "}
                    for modern web development
                  </h1>
                  <p className="text-zinc-600 lg:text-lg">
                    Explore a comprehensive, versatile, and high-quality
                    collection of icons designed to elevate your modern web
                    development projects.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <button className="inline-flex gap-2 items-center group justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-zinc-900/90 h-10 px-4 py-2">
                    Explore Icons
                    <ArrowRightIcon className="size-4 text-white relative left-0 transition-all duration-300 group-hover:left-1" />
                  </button>
                  <a className="text-sm text-zinc-600" href="#">
                    How to use
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Header;
