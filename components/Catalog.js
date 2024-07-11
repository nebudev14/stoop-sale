const Catalog = () => {
  return (
    /* one row */
    <div className="flex justify-center grid-rows-4 mt-10 gap-x-16">
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