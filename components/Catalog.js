const Catalog = () => {
    return (
        /* filters clothes, home goods, shoes, tchotchkes*/
       
        <div className="mt-10">
            <div className="flex no-underline item-center text-stoop-brown md:flex-col">
                <button className="mr-10  focus:text-stoop-green focus:underline focus:font-semibold hover:text-[#9BB595]">All</button>
                <button className="mr-10  focus:text-stoop-green focus:underline focus:font-semibold hover:text-[#9BB595]">Clothing</button>
                <button className="mr-10  focus:text-stoop-green focus:underline focus:font-semibold hover:text-[#9BB595]">Home Goods</button>
                <button className="mr-10  focus:text-stoop-green focus:underline focus:font-semibold hover:text-[#9BB595]">Shoes</button>
                <button className="mr-10  focus:text-stoop-green focus:underline focus:font-semibold hover:text-[#9BB595]">Tchotchkes</button>
                <text className="px-4 py-2 ml-auto text-black rounded-full bg-slate-300">Filters</text>
            </div>

            <div className="flex justify-center grid-rows-4 mt-10 gap-x-24">
                <div className="catalog-boxes" onClick="">
                    <img></img>
                </div>

                <div className="catalog-boxes" onClick="">
                    <img></img>
                </div>

                <div className="catalog-boxes" onClick="">
                    <img></img>
                </div>

                <div className="catalog-boxes" onClick="">
                    <img></img>
                </div>

            </div>
        </div>
    );
}

export default Catalog;