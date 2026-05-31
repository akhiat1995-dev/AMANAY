export default function OurStory() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 border-t border-l border-[#D4AF37]/40"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b border-r border-[#D4AF37]/20"></div>
          <img
            src="/ELEGANCE.png"
            className="relative z-10 w-full aspect-[4/5] object-cover brightness-150 contrast-125 opacity-100 hover:brightness-[1.75] hover:contrast-150 transition-all duration-500"
            alt="Notre Histoire"
          />
          <div className="absolute -bottom-6 -right-6 z-20 w-48 h-64 bg-[#111111] p-2 group">
            <img
              src="/SMALLIMAGE.png"
              className="w-full h-full object-cover brightness-90 group-hover:brightness-110 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-500"
              alt="Parfum"
            />
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-[1px] bg-[#D4AF37]/60"></div>
              <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] font-semibold uppercase">Notre Héritage</span>
              <div className="w-8 h-[1px] bg-[#D4AF37]/60"></div>
            </div>
            <h2 className="serif-font text-3xl lg:text-4xl text-white tracking-[0.15em] font-light">
              <span className="text-[#D4AF37]">L ' É L É G A N C E</span>{" "}
              <span className="text-white">S I G N A T U R E</span>
            </h2>
            <p className="arabic-font text-lg text-gray-400 mt-2">إرث من الأناقة</p>
          </div>
          <p className="text-gray-400 text-lg font-light leading-loose">
            Chez AMANAY, nous croyons que chacun mérite de porter des fragrances inspirées des plus grands parfums avec une excellente qualité et un prix accessible.
          </p>
          <p className="arabic-font text-3xl text-[#D4AF37] font-light leading-relaxed text-right lg:text-left">
            عطور أنيقة بجودة عالية وسعر مناسب للجميع
          </p>
          <div className="pt-4">
            <a href="#" className="group flex items-center gap-4 text-white text-[10px] tracking-widest uppercase font-bold">
              En savoir plus sur nous
              <div className="w-12 h-[1px] bg-white group-hover:w-24 transition-all duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}