const Catalog = () => {
    return (
        /* filters clothes, home goods, shoes, tchotchkes*/
       
        <div className="mt-10">
            <div className="flex item-center text-stoop-brown no-underline">
                <button className="mr-10  focus:text-stoop-green focus:underline focus:font-semibold hover:text-[#9BB595]">All</button>
                <button className="mr-10  focus:text-stoop-green focus:underline focus:font-semibold hover:text-[#9BB595]">Clothing</button>
                <button className="mr-10  focus:text-stoop-green focus:underline focus:font-semibold hover:text-[#9BB595]">Home Goods</button>
                <button className="mr-10  focus:text-stoop-green focus:underline focus:font-semibold hover:text-[#9BB595]">Shoes</button>
                <button className="mr-10  focus:text-stoop-green focus:underline focus:font-semibold hover:text-[#9BB595]">Tchotchkes</button>
                <text className="ml-auto text-black bg-slate-300 px-4 py-2 rounded-full">Filters</text>
            </div>

            <div className="flex grid-rows-4 gap-x-24 mt-10 justify-center">
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