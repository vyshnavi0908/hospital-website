import useEmblaCarousel from 'embla-carousel-react';
import { Star, Quote } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const reviews = [
    {
      name: "Janakiram Rama",
      text: "Nice facilities and 24/7 service and nice treatment.",
      rating: 5
    },
    {
      name: "Manikanta Satyla",
      text: "My wife has received the best support from doctors and nursing staff. The care here is exceptional.",
      rating: 5
    },
    {
      name: "Jyothi Garagapati",
      text: "I'm so grateful to have her as my doctor! The entire team made my recovery smooth and stress-free.",
      rating: 5
    }
  ];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#007BFF] text-sm font-bold uppercase tracking-wider block mb-2">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B]">
            Patient Experiences
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="bg-white border border-[#D9EAF7] p-8 md:p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow relative text-center">
                    <Quote className="absolute top-6 left-1/2 -translate-x-1/2 w-10 h-10 text-[#EAF6FF]" />
                    
                    <div className="flex justify-center gap-1 mb-6 mt-4">
                      {[...Array(review.rating)].map((_, idx) => (
                        <Star key={idx} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-lg md:text-xl italic text-gray-600 mb-8">
                      "{review.text}"
                    </p>
                    
                    <div>
                      <div className="font-bold text-[#1E293B]">{review.name}</div>
                      <div className="text-sm text-gray-500">Patient</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === selectedIndex ? "bg-[#007BFF] w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
