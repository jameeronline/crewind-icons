import { useState } from "react";
import { toast } from "sonner";
import { tv } from "tailwind-variants";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

import clsx from "clsx";

//import * as Icons from "../components/icons";
import * as Icons from "../components/icons";

const sizes = [
  { id: 0, name: "Select Size" },
  { id: 2, name: "24" },
  { id: 3, name: "32" },
  { id: 4, name: "48" },
  { id: 5, name: "64" },
  { id: 6, name: "72" },
];

const IconGrid = () => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedTheme, setSelectedTheme] = useState("");
  const [searchKey, setSearchKey] = useState("");

  const iconClasses = tv({
    base: "size-6",
    variants: {
      size: {
        24: "size-6",
        32: "size-8",
        48: "size-12",
        64: "size-16",
        6472: "size-20",
      },
      color: {
        individual: "text-emerald-700",
        business: "text-blue-700",
        government: "text-amber-700",
      },
    },
    defaultVariants: {
      size: 24,
      color: "individual",
    },
  });

  return (
    <>
      <div className="flex justify-between">
        <div className="relative my-6">
          <input
            id="id-b16"
            type="text"
            name="id-b16"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            placeholder="Search Icons"
            className="relative w-full h-10 px-4 pr-12 text-sm transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            role="graphics-symbol"
          >
            <title id="title-12">Search icons</title>
            <desc id="description-12">Icon description here</desc>
            <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
        <div className="flex gap-2">
          <div className="relative my-6 md:w-40">
            <label
              htmlFor="id-04"
              className="pointer-events-none text-sm text-slate-400 transition-all sr-only"
            >
              Select Theme
            </label>
            <select
              id="id-04"
              name="id-04"
              required
              className="relative w-full h-10 px-4 text-sm transition-all bg-white border rounded outline-none appearance-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-emerald-500 focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
            >
              <option value="">Select Theme</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
              <option value="government">Government</option>
            </select>
          </div>
          <div className="relative my-6 md:w-40">
            <label
              htmlFor="id-05"
              className="pointer-events-none text-sm text-slate-400 transition-all sr-only"
            >
              Select Size
            </label>
            <select
              id="id-05"
              name="id-05"
              required
              className="relative w-full h-10 px-4 text-sm transition-all bg-white border rounded outline-none appearance-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-emerald-500 focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="">Select Size</option>
              <option value="24">24</option>
              <option value="32">32</option>
              <option value="48">48</option>
              <option value="64">64</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-8 md:gap-8 lg:grid-cols-12">
        {Object.entries(Icons)
          .filter(([name]) =>
            name.toLowerCase().includes(searchKey.toLowerCase())
          )
          .map(([name, Icon]) => (
            <div key={name} className="col-span-2 lg:col-span-2">
              <div className="flex flex-col gap-8 items-center group border rounded-md p-6 hover:border-[#168e3b] hover:bg-green-50/50 transition-colors duration-300 relative">
                <Icon
                  className={iconClasses({
                    size: selectedSize,
                    color: selectedTheme,
                  })}
                />
                <p className="text-xs text-gray-500 inline-flex items-center flex-wrap">
                  <span className="font-mono">{name}</span>
                </p>

                <CopyToClipboard
                  text={`<${name} />`}
                  onCopy={() => toast.success(`${name} icon has been copied`)}
                >
                  <button className="text-gray-400 size-10 opacity-0 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 scale-90 group-hover:opacity-100 inline-flex items-center justify-center hover:text-gray-600 hover:scale-100 duration-300 transition-all bg-gray-100 rounded-full">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path>
                    </svg>
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default IconGrid;
