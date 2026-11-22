import Card from "./Card";

function ProductSection({ id, title, items, columns = 4, largeSpacing = false }) {
  const gridCols = columns === 5 ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5";

  return (
    <section id={id} className={largeSpacing ? "mb-[70px]" : "mb-[50px]"}>
      <h2 className="text-[1.3rem] font-bold mb-5 text-[#0f172a]">{title}</h2>
      <div className={`grid ${gridCols}`}>
        {items.map((item) => (
          <Card key={item.id} image={item.image} title={item.title} description={item.description} price={item.price} />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
