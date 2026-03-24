import { useEffect, useState } from "react";

type SliderItem = {
  id: string;
  imageUrl: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
};

type SliderProps = {
  slides: SliderItem[];
  autoPlay?: boolean;
  interval?: number;
};

export const Slider = ({ slides, autoPlay = true, interval = 5000 }: SliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length]);

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full h-[calc(100vh-6rem)]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100 z-20" : "opacity-0 z-10 pointer-events-none"
            }`}
          >
            <img src={slide.imageUrl} className="w-full h-full object-cover" alt={slide.title} />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
              <div className="max-w-2xl text-center text-white">
                <h2 className="text-3xl font-bold md:text-5xl">{slide.title}</h2>
                <p className="mt-3 text-base md:text-xl">{slide.subtitle}</p>
                {slide.ctaText && slide.ctaLink && (
                  <a href={slide.ctaLink} className="btn btn-primary mt-5">
                    {slide.ctaText}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => goTo((activeIndex - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => goTo((activeIndex + 1) % slides.length)}
        className="absolute right-4 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};
