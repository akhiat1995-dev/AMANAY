export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-16 pb-12 border-t border-white/5">
      <div className="max-w-full mx-auto px-4 lg:px-10 xl:px-16">
        {/* Newsletter Section */}
        <div className="mb-12 p-8 bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent border border-[#D4AF37]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="serif-font text-xl text-white mb-2">Newsletter</h4>
              <p className="text-gray-400 text-sm">اشترك للحصول على عروض حصرية</p>
            </div>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="px-4 py-3 bg-black/50 border border-white/10 text-white text-sm placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none w-64"
              />
              <button className="px-6 py-3 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
                اشترك
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex flex-col items-start gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="serif-font text-xl tracking-widest text-white">AMANAY</span>
                <span className="h-4 w-[1px] bg-gray-600"></span>
                <span className="traditional-arabic text-xl text-white">أماناي</span>
              </div>
              <p className="text-[10px] tracking-[0.3em] text-gray-500 uppercase">Haute Parfumerie</p>
            </div>
            <p className="text-gray-500 text-[11px] leading-relaxed mb-6 max-w-[200px]">
              Inspirations iconiques, qualité premium, longue tenue.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all">
                <iconify-icon icon="mdi:instagram" className="text-lg"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all">
                <iconify-icon icon="mdi:facebook" className="text-lg"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all">
                <iconify-icon icon="mdi:whatsapp" className="text-lg"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all">
                <iconify-icon icon="mdi:tiktok" className="text-lg"></iconify-icon>
              </a>
            </div>
          </div>

          {/* Column 2: Nav */}
          <div className="col-span-1">
            <h5 className="text-white text-[11px] font-bold uppercase tracking-widest mb-8">Menu</h5>
            <ul className="space-y-4 text-[11px] text-gray-500 uppercase tracking-widest">
              <li><a href="#hero" className="hover:text-[#D4AF37] transition-colors">Accueil</a></li>
              <li><a href="#collections" className="hover:text-[#D4AF37] transition-colors">Collections</a></li>
              <li><a href="#bestsellers" className="hover:text-[#D4AF37] transition-colors">Boutique</a></li>
              <li><a href="#bestsellers" className="hover:text-[#D4AF37] transition-colors">Best-Sellers</a></li>
            </ul>
          </div>

          {/* Column 3: Info */}
          <div className="col-span-1">
            <h5 className="text-white text-[11px] font-bold uppercase tracking-widest mb-8">Informations</h5>
            <ul className="space-y-4 text-[11px] text-gray-500 uppercase tracking-widest">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Livraison</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Paiement</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="col-span-1">
            <h5 className="text-white text-[11px] font-bold uppercase tracking-widest mb-8">Contact</h5>
            <ul className="space-y-4 text-[11px] text-gray-500 uppercase tracking-widest">
              <li className="flex items-start gap-2">
                <iconify-icon icon="lucide:map-pin" className="text-sm text-[#D4AF37]"></iconify-icon>
                <span>Marrakech, Maroc</span>
              </li>
              <li className="flex items-start gap-2">
                <iconify-icon icon="lucide:phone" className="text-sm text-[#D4AF37]"></iconify-icon>
                <span>+212 600 000 000</span>
              </li>
              <li className="flex items-start gap-2">
                <iconify-icon icon="lucide:mail" className="text-sm text-[#D4AF37]"></iconify-icon>
                <span>contact@amanay.ma</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] text-gray-600 uppercase tracking-[0.3em]">
            © 2026 AMANAY PARFUMS — Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[9px] text-gray-600 uppercase tracking-[0.3em] arabic-font">صنع بشغف في المغرب</span>
            <span className="w-8 h-[1px] bg-gray-800"></span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg"
              className="h-3 w-auto opacity-40"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x12/1a1a1a/888?text='; }}
              alt="Maroc"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
