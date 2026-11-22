function Hero({ title, description }) {
  return (
    <section
      id="home"
      className="mt-[30px] mb-[50px] rounded-[16px] overflow-hidden relative h-[380px] flex flex-col justify-center items-center text-center px-5 shadow-xl"
      style={{
        background: 'linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.9)), url("images/background-hero.jpg") center/cover no-repeat',
      }}>
      <h1 className="text-2xl sm:text-[2.5rem] font-extrabold mb-[15px] text-white tracking-[-0.5px] leading-tight">{title}</h1>
      <p className="max-w-[650px] text-[#cbd5e1] text-sm sm:text-base">{description}</p>
    </section>
  );
}

export default Hero;
