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
    
    // Auto scroll
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-[#E8F6FF] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">What Our Patients Say</h2>
          <p className="text-lg text-muted-foreground">
            Real stories of healing and care from the people who matter most.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 pl-4 md:pl-6 pr-4 md:pr-6">
                  <div className="bg-white/80 backdrop-blur-xl border border-white p-8 md:p-12 rounded-3xl shadow-xl relative">
                    <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10 rotate-180" />
                    
                    <div className="flex gap-1 mb-6">
                      {[...Array(review.rating)].map((_, idx) => (
                        <Star key={idx} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-8 relative z-10">
                      "{review.text}"
                    </p>
                    
                    <div className="flex items-center gap-4 border-t border-border/50 pt-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-foreground text-lg">{review.name}</div>
                        <div className="text-sm text-muted-foreground font-medium">Patient</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === selectedIndex ? "bg-primary w-8" : "bg-primary/20 hover:bg-primary/50"
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
