import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Tour {
  id: string;
  title: string;
  description: string;
  availability: string;
  images: {
    card: string;
    background: string;
    objectPosition: string;
    bgObjectPosition: string;
  };
  longDescription: string;
}

interface InteractiveToursClientProps {
  tours: string; // JSON string passed from Astro
}

const InteractiveToursClient = ({ tours }: InteractiveToursClientProps) => {
  const toursData: Tour[] = JSON.parse(tours);

  // Get tour ID from URL parameters
  const getTourIdFromURL = () => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get("tour");
    }
    return null;
  };

  // Find the initial tour based on URL parameter
  const urlTourId = getTourIdFromURL();
  const initialTour = urlTourId
    ? toursData.find((tour) => tour.id === urlTourId) || toursData[0]
    : toursData[0];

  const [selectedTour, setSelectedTour] = useState(initialTour);

  // Update selected tour when URL changes
  useEffect(() => {
    const urlTourId = getTourIdFromURL();
    if (urlTourId) {
      const newTour = toursData.find((tour) => tour.id === urlTourId);
      if (newTour) {
        setSelectedTour(newTour);
      }
    }
  }, [toursData]);

  // Add click handlers to tour thumbnails
  useEffect(() => {
    const thumbnails = document.querySelectorAll(".tour-thumbnail");
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", () => {
        const tourId = thumbnail.getAttribute("data-tour-id");
        if (tourId) {
          const newTour = toursData.find((tour) => tour.id === tourId);
          if (newTour) {
            setSelectedTour(newTour);

            // Update URL without page reload
            const url = new URL(window.location.href);
            url.searchParams.set("tour", tourId);
            window.history.pushState({}, "", url);
          }
        }
      });
    });

    // Cleanup
    return () => {
      thumbnails.forEach((thumbnail) => {
        thumbnail.removeEventListener("click", () => {});
      });
    };
  }, [toursData]);

  // Update thumbnail selection state
  useEffect(() => {
    const thumbnails = document.querySelectorAll(".tour-thumbnail");
    thumbnails.forEach((thumbnail) => {
      const tourId = thumbnail.getAttribute("data-tour-id");
      if (tourId === selectedTour.id) {
        thumbnail.classList.remove(
          "brightness-[0.6]",
          "saturate-[0.7]",
          "border-soft-beige/20"
        );
        thumbnail.classList.add(
          "outline-offset-[12px]",
          "ring-offset-0",
          "ring-2",
          "ring-soft-beige",
          "outline-[2px]",
          "outline-soft-beige/30",
          "outline-none",
          "border-[2.5px]",
          "border-stone-100",
          "z-30"
        );
      } else {
        thumbnail.classList.remove(
          "outline-offset-[12px]",
          "ring-offset-0",
          "ring-2",
          "ring-soft-beige",
          "outline-[2px]",
          "outline-soft-beige/30",
          "outline-none",
          "border-[2.5px]",
          "border-stone-100",
          "z-30"
        );
        thumbnail.classList.add(
          "brightness-[0.6]",
          "saturate-[0.7]",
          "border-soft-beige/20"
        );
      }
    });
  }, [selectedTour.id]);

  return (
    <>
      {/* Background Image with Framer Motion */}
      <AnimatePresence>
        <motion.img
          key={selectedTour.id + "-bg"}
          src={selectedTour.images.background}
          alt={`${selectedTour.title} background`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75, transition: { duration: 0.8 } }}
          exit={{ opacity: 0 }}
          className={`absolute inset-0 w-full h-[95vh] ${selectedTour.images.bgObjectPosition} object-cover saturate-[1]`}
        />
      </AnimatePresence>

      {/* Gradients */}
      <div className="absolute w-full h-[95vh] bg-gradient-to-b from-black via-black/30 to-transparent"></div>
      <div className="absolute w-full h-[55vh] bg-gradient-to-b from-black via-black/30 to-transparent"></div>
      <div className="absolute top-0 w-full h-[70vh] mt-[30vh] bg-gradient-to-t from-stone-100 via-stone-100/5 to-transparent"></div>
      <div className="absolute top-0 w-full h-[70vh] mt-[30vh] bg-gradient-to-t from-stone-100/90 via-stone-100/90 to-transparent"></div>

      {/* Title and Description with Framer Motion */}
      <div className="relative w-full h-full flex flex-col justify-center z-20">
        <div className="relative z-20 w-full">
          <div className="max-w-[85%] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTour.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                className="text-center pt-[3vh] lg:pt-[5vh] xl:pt-[7vh]"
              >
                <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-7xl font-bonanova font-bold text-gray-200 drop-shadow-lg">
                  {selectedTour.title}
                </h1>
                <p
                  className="mt-4 max-w-md xl:max-w-2xl mx-auto text-xl sm:text-xs md:text-base xl:text-lg md:leading-none lg:leading-tight xl:leading-none 2xl:leading-none 2xl:text-2xl xl:mb-14 text-gray-100 font-body drop-shadow-sm"
                  dangerouslySetInnerHTML={{
                    __html: selectedTour.description,
                  }}
                ></p>
              </motion.div>
            </AnimatePresence>

            {/* Detailed Description with Framer Motion */}
            <div className="h-full mt-6 md:mt-12 max-w-3xl mx-auto pb-44">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTour.id + "-desc"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                >
                  <h2 className="text-3xl font-bold font-bonanova text-gray-900">
                    Über diese Tour
                  </h2>
                  <div
                    className="mt-4 text-xs sm:text-sm md:text-lg text-gray-600 font-body leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: selectedTour.longDescription,
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InteractiveToursClient;
