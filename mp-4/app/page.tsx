'use client'
import { useState } from "react";
import SearchBar from "../components/Search-bar";
import { Icon } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [icons, setIcons] = useState<Icon[]>([]);

  function handleSetData(val: Icon[]) {
    setIcons(val);
  }

  return (
    <>
      <SearchBar setContent={handleSetData}></SearchBar>
      <div>
        <ul className="flex flex-row flex-wrap justify-around">
          {
            icons.map((icon) => 
              <Link key={icon.icon_id} href={`/${icon.icon_id}`} className="w-1/8 m-4">
                <li>
                  <Image 
                    src={icon.raster_sizes[icon.raster_sizes.length - 1].formats[icon.raster_sizes[icon.raster_sizes.length - 1].formats.length - 1].preview_url} 
                    alt="an icon"
                    width={icon.raster_sizes[icon.raster_sizes.length - 1].size_width}
                    height={icon.raster_sizes[icon.raster_sizes.length - 1].size_height}
                  />
                </li>
              </Link>
          )}
        </ul>
      </div>
    </>
  );
}
