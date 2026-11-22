function Footer() {
  return (
    <footer className="border-t border-[#1e293b] pt-10 pb-[30px] text-center text-[#94a3b8] text-[0.85rem] bg-[#0f172a]">
      <div className="container-main">
        <ul className="flex justify-center gap-6 sm:gap-10 mb-6 list-none flex-wrap">
          <li>
            <a href="#about" className="hover:text-white transition">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>
          <li>
            <a href="#terms" className="hover:text-white transition">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
          </li>
        </ul>

        <div className="flex justify-center gap-[15px] mb-5">
          <span className="w-8 h-8 rounded-full border border-[#334155] bg-[#1e293b] flex items-center justify-center hover:border-[#6366f1] hover:bg-[#6366f1] transition">
            <img src="https://cdn.simpleicons.org/x/94a3b8" alt="x" className="w-3.5 h-3.5" />
          </span>
          <span className="w-8 h-8 rounded-full border border-[#334155] bg-[#1e293b] flex items-center justify-center hover:border-[#6366f1] hover:bg-[#6366f1] transition">
            <img src="https://cdn.simpleicons.org/instagram/94a3b8" alt="instagram" className="w-3.5 h-3.5" />
          </span>
          <span className="w-8 h-8 rounded-full border border-[#334155] bg-[#1e293b] flex items-center justify-center hover:border-[#6366f1] hover:bg-[#6366f1] transition">
            <img src="https://cdn.simpleicons.org/facebook/94a3b8" alt="facebook" className="w-3.5 h-3.5" />
          </span>
        </div>

        <p className="text-[0.78rem] text-[#64748b]">&copy; 2026 DibiTech. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
