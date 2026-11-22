import { useState } from "react";

function Header() {
  const [navActive, setNavActive] = useState(false);

  return (
    <header className="bg-[#0f172a] border-b border-[#1e293b] sticky top-0 z-50">
      <div className="container-main flex justify-between items-center h-[70px] relative">
        <a href="#home" className="flex items-center gap-[10px] font-bold text-[1.2rem]">
          <img src="images/logo.png" alt="DibiTech Logo" className="h-[32px] w-auto object-contain" />
          <span className="text-white tracking-[-0.5px]">DibiTech</span>
        </a>

        <button onClick={() => setNavActive(!navActive)} className="md:hidden text-white text-2xl bg-transparent border-none cursor-pointer">
          ☰
        </button>

        <ul
          className={`${
            navActive ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-start md:items-center gap-[15px] md:gap-[30px] list-none text-[0.9rem] absolute md:static top-[70px] left-0 w-full md:w-auto bg-[#0f172a] md:bg-transparent border-b md:border-none border-[#1e293b] p-5 md:p-0`}>
          <li className="w-full md:w-auto">
            <a href="#catalog" className="text-[#94a3b8] hover:text-white transition font-medium">
              Explore Catalog
            </a>
          </li>
          <li className="w-full md:w-auto">
            <a href="#categories" className="text-[#94a3b8] hover:text-white transition font-medium">
              Categories
            </a>
          </li>
          <li className="w-full md:w-auto">
            <a href="#trending" className="text-[#94a3b8] hover:text-white transition font-medium">
              Cart
            </a>
          </li>
          <li className="w-full md:w-auto">
            <a href="#login" className="btn-primary">
              Login
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
