import { useRouter } from "next/router"
import { useState } from "react";
import { Category } from "@prisma/client";
import Image from "next/image";

const Catalog = ({ items }) => {
  const router = useRouter();
  const [filter, setFilter] = useState("");

  return (
    /* filters clothes, home goods, shoes, tchotchkes*/

    <div className="mt-10">
      <div className="flex no-underline item-center text-stoop-brown md:flex-col px-[6rem]">
        <button onClick={() => setFilter("")} className="mr-10  focus:text-stoop-green focus:underline focus:font-semibold hover:text-[#9BB595]">ALL</button>
        {Object.keys(Category).map((category, i) => (
          <button onClick={() => setFilter(category)} key={i} className="mr-10  focus:text-stoop-green focus:underline focus:font-semibold hover:text-[#9BB595]">{category}</button>
        ))}

      </div>

      <div className="flex justify-center grid-rows-4 mt-10 gap-x-24">
        {items.map((item, i) => (
          <div className="catalog-boxes" onClick="">
            <img src={`https://stoop.nyc3.digitaloceanspaces.com/${item.name}/${0}`}

              className="object-fill " />
          </div>
        ))}
       <div className="catalog-boxes" onClick="" />
      </div>
    </div>
  );
}

export default Catalog;