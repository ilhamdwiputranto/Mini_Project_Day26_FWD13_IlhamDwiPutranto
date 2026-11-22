function FeaturedCard({ image, title, description, buttonText }) {
  return (
    <section id="catalog" className="mb-[50px]">
      <h2 className="text-[1.3rem] font-bold mb-5 text-[#0f172a]">Featured Product</h2>
      <div className="flex flex-col md:flex-row gap-6 bg-[#0f172a] rounded-[16px] p-5 border border-[#1e293b] shadow-md">
        <img className="w-full md:w-[45%] h-[250px] object-cover rounded-[12px]" src={image} alt={title} />
        <div className="w-full md:w-[55%] flex flex-col justify-center items-start">
          <h3 className="text-[1.35rem] font-bold mb-3 text-white">{title}</h3>
          <p className="text-[0.9rem] text-[#94a3b8] mb-6">{description}</p>
          <a href="#trending" className="btn-primary !py-2 !px-5 !text-[0.85rem]">
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCard;
