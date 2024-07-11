const Catalog = () => {
    return (
        /* one row */
        <div className="flex grid-rows-4 gap-x-16 mt-10 justify-center">
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
    );
}

export default Catalog;