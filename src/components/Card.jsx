function Card({ image, title, description, price }) {
  return (
    <article className="flex flex-col justify-between rounded-[12px] bg-white border border-[#e2e8f0] p-[10px] transition duration-200 hover:cursor-pointer hover:border-[#cbd5e1] hover:-translate-y-1 hover:shadow-lg">
      <div>
        <img className="w-full aspect-square rounded-[8px] mb-[12px] object-cover block" src={image} alt={title} />
        <h3 className="text-[0.95rem] font-semibold mb-1 px-1 text-[#0f172a]">{title}</h3>
        <p className="text-[0.78rem] text-[#64748b] leading-[1.4] px-1 mb-[5px]">{description}</p>
      </div>

      {price && (
        <div className="flex items-center justify-between px-1 pt-2 mt-2 border-t border-[#e2e8f0]">
          <span className="text-xs font-bold text-[#4f46e5]">{price}</span>
          <span className="text-xs font-semibold text-[#6366f1]">Detail →</span>
        </div>
      )}
    </article>
  );
}

export default Card;
