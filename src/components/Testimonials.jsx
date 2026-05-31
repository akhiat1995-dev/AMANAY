import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'سعيد م.',
    location: 'فاس',
    rating: 5,
    text: 'واحد الريحة ما يمكنش شحال كتبقى شادة! أماناي صراحة اسم على مسمى، ريحة فيها الهمة والنخوة ديال الصح. فينما كنرشه كاع الناس كيسولوني عليه. برافو برافو!',
  },
  {
    id: 2,
    name: 'نورة ل.',
    location: 'طنجة',
    rating: 5,
    text: 'صراحة، من القرعة والديزاين تال الريحة لداخل، كلشي توب! فخر كبير نشوفو ماركة مغربية بهاد الفخامة والجودة العالمية. برافو أماناي',
  },
  {
    id: 3,
    name: 'Hicham E.',
    location: 'Tanger',
    rating: 5,
    text: 'T-tawsil sari3 w l-luxe bayen mn l-emballage w l-qer3a. 3ad zid r-riha l-dakhel kat-ddik l-3alam akhor dyal l-fakhama. Machrou3 kay-chref l-mgharba, tbareklah 3likom',
  },
  {
    id: 4,
    name: 'مريم أ.',
    location: 'الرباط',
    rating: 5,
    text: 'بصراحة ما توقعتش الجودة هادي كلها. الزجاجة فخمة والريحة عندها ثبات رهيب. عندي أماناي من شهر كامل والريحة باقي فيها. أنصح الكل يجرب.',
  },
  {
    id: 5,
    name: 'Yassine B.',
    location: 'Casablanca',
    rating: 4,
    text: 'J\'ai testé plusieurs parfums et celui-ci est clairement au-dessus du lot. Le packaging est soigné, la tenue est excellente. Rapport qualité-prix imbattable. Je recommande à 100%.',
  },
  {
    id: 6,
    name: 'خولة ر.',
    location: 'مراكش',
    rating: 5,
    text: 'هديت لأختي زجاجة أماناي ومن النهار الأول تعلقات بيه. الريحة راقية ومناسبة لكل المناسبات. التوصيل كان سريع والمنتج مغلف باحترافية.',
  },
  {
    id: 7,
    name: 'Karim F.',
    location: 'Rabat',
    rating: 5,
    text: 'Franchement, je suis client régulier maintenant. La fragrance est unique, elle dure toute la journée. Les compliments que je reçois sont incroyables. Merci AMANAY !',
  },
  {
    id: 8,
    name: 'فاطمة ز.',
    location: 'أكادير',
    rating: 5,
    text: 'من أحسن العطور اللي جربتها في حياتي. الريحة فيها أصالة وعصرية في نفس الوقت. زملائي في العمل كامل يسألوني على اسم العطر. أماناي أحسن اختيار.',
  },
  {
    id: 9,
    name: 'Omar S.',
    location: 'Marrakech',
    rating: 4,
    text: 'Très belle découverte ! Le parfum a une excellente tenue et le service client est réactif. La livraison a été rapide et soignée. Je vais certainement repasser commande.',
  },
  {
    id: 10,
    name: 'سلمى د.',
    location: 'الدار البيضاء',
    rating: 5,
    text: 'صراحة شي حاجة خارقة. كل مرة كنحط أماناي كنحس بروح جدديدة. الريحة عندها حضور قوي وما تغيبهاش. من اللحظة اللي جربتيه مابقيتش كنستعمل غيره.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const totalSlides = Math.max(1, testimonials.length - itemsPerView + 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="py-14 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-[1px] bg-[#D4AF37]/60"></div>
            <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] font-semibold uppercase">Avis Clients</span>
            <div className="w-8 h-[1px] bg-[#D4AF37]/60"></div>
          </div>
          <h2 className="serif-font text-3xl lg:text-4xl text-white tracking-[0.15em] font-light">
            <span className="text-[#D4AF37]">T E M O I G N A G E S</span>
          </h2>
          <p className="arabic-font text-lg text-gray-400 mt-2">شهادات العملاء</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Prev button */}
          {totalSlides > 1 && (
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex w-10 h-10 items-center justify-center rounded-full border border-white/10 bg-black/70 backdrop-blur-md hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 group"
            >
              <iconify-icon icon="lucide:chevron-left" className="text-white/80 group-hover:text-black text-lg transition-colors"></iconify-icon>
            </button>
          )}

          <div className="overflow-hidden mx-0 md:mx-14">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="group relative h-full p-6 border border-white/10 bg-gradient-to-b from-white/5 to-transparent hover:border-[#D4AF37]/30 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-4">
                      <iconify-icon icon="lucide:quote" className="text-[#D4AF37] text-sm"></iconify-icon>
                    </div>

                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <iconify-icon
                          key={i}
                          icon="lucide:star"
                          className={`text-sm animate-[starPop_0.4s_ease-out_forwards] ${
                            i < testimonial.rating ? 'text-[#D4AF37]' : 'text-gray-600'
                          }`}
                          style={{
                            animationDelay: `${0.3 + i * 0.15}s`,
                            opacity: 0,
                            transform: 'scale(0)',
                          }}
                        ></iconify-icon>
                      ))}
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4 arabic-font min-h-[100px]">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    <div className="flex items-center justify-between border-t border-white/10 pt-3 mt-auto">
                      <p className="text-white text-xs font-bold tracking-wider">{testimonial.name}</p>
                      <p className="text-[#D4AF37] text-[10px]">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          {totalSlides > 1 && (
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % totalSlides)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex w-10 h-10 items-center justify-center rounded-full border border-white/10 bg-black/70 backdrop-blur-md hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 group"
            >
              <iconify-icon icon="lucide:chevron-right" className="text-white/80 group-hover:text-black text-lg transition-colors"></iconify-icon>
            </button>
          )}
        </div>

        {/* Dots */}
        {totalSlides > 1 && (
          <div className="flex items-center justify-center gap-3 mt-8">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-500 ${
                  current === i
                    ? 'bg-[#D4AF37] w-8 h-2'
                    : 'bg-white/20 hover:bg-white/40 w-2 h-2'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
