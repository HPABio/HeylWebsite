'use client'

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const post1 = await fetch(
  "http://wordpress-a80wooocckwk0kwg4ow0c4o4.82.29.180.126.sslip.io/wp-json/wp/v2/posts?slug=mandelbluete-meerspinne-und-monarchen"
);
const post2 = await fetch(
  "http://wordpress-a80wooocckwk0kwg4ow0c4o4.82.29.180.126.sslip.io/wp-json/wp/v2/posts?slug=magische-momente-am-mussbach-nachhaltige-weinwanderung"
);
const post3 = await fetch(
  "http://wordpress-a80wooocckwk0kwg4ow0c4o4.82.29.180.126.sslip.io/wp-json/wp/v2/posts?slug=Von-Bacchus-bis-Christophorus"
);
const post4 = await fetch(
  "http://wordpress-a80wooocckwk0kwg4ow0c4o4.82.29.180.126.sslip.io/wp-json/wp/v2/posts?slug=gluehwein-geheimnisvolles-gimmeldingen"
);

const post1Json = await post1.json();
const post2Json = await post2.json();
const post3Json = await post3.json();
const post4Json = await post4.json();

let rawHtml1 = post1Json[0].content.rendered;
let rawHtml2 = post2Json[0].content.rendered;
let rawHtml3 = post3Json[0].content.rendered;
let rawHtml4 = post4Json[0].content.rendered;

// Split by "\n\n\n\n"
let parts = rawHtml1.split("\n\n\n\n");
let parts2 = rawHtml2.split("\n\n\n\n");
let parts3 = rawHtml3.split("\n\n\n\n");
let parts4 = rawHtml4.split("\n\n\n\n");

const tours = [
  {
    id: "mandelbluete",
    title: `${post1Json[0].title.rendered}`,
    description: `${parts[0]}`,
    availability: "Frühling",
    images: {
      card: "/mj-almondFlowerV1.png",
      background: "/mj-almondFlower-mosaicGlass.png",
      objectPosition: "object-[50%_50%]",
      bgObjectPosition: "object-[50%_36%]",
    },
    longDescription: `
    ${parts.slice(1).join("\n\n\n\n")}
    `,
  },
  {
    id: "mussbach",
    title: `${post2Json[0].title.rendered}`,
    description: `${parts2[0]}`,
    availability: "Sommer",
    images: {
      card: "/Wassermühle-im-Wald.png",
      background: "/compressed-mj-wallWithGrapes.png",
      objectPosition: "object-[50%_20%]",
      bgObjectPosition: "object-[50%_36%]",
    },
    longDescription: `
    ${parts2[1]}
    </br>
    ${parts2.slice(1).join("\n\n\n\n")}
    </br>
    ${parts2.slice(2).join("\n\n\n\n")}
    `,
  },
  {
    id: "bacchus",
    title: `${post3Json[0].title.rendered}`,
    description: `${parts3[0]}`,
    availability: "Frühling - Herbst",
    images: {
      card: "/mj-Bachus-mosaicGlass.png",
      background: "/compressed-mj-wallWithGrapes.png",
      objectPosition: "object-[50%_20%]",
      bgObjectPosition: "object-[50%_50%]",
    },
    longDescription: `
    ${parts3[1]}
    </br>
    ${parts3.slice(2, 8).join("\n\n\n\n")}
    </br>
    ${parts3.slice(8).join("\n\n\n\n")}
    `,
  },
  {
    id: "gluehwein",
    title: `${post4Json[0].title.rendered}`,
    description: `${parts4[0]}`,
    availability: "Winter",
    images: {
      card: "/mj-GlühweinV1.png",
      background: "/mj-teaCup.png",
      objectPosition: "object-[50%_35%]",
      bgObjectPosition: "object-center",
    },
    longDescription: ` ${parts4[1]}`,
  },
];

const InteractiveTours = () => {
  // Get tour ID from URL parameters directly in the component
  const getTourIdFromURL = () => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get("tour");
    }
    return null;
  };

  // Debug logging
  console.log("Tour ID from URL:", getTourIdFromURL());
  console.log(
    "Available tour IDs:",
    tours.map((t) => t.id)
  );

  // Find the initial tour based on URL parameter
  const urlTourId = getTourIdFromURL();
  const initialTour = urlTourId
    ? tours.find((tour) => tour.id === urlTourId) || tours[0]
    : tours[0];
  console.log("Selected initial tour:", initialTour.id);

  const [selectedTour, setSelectedTour] = useState(initialTour);

  // Update selected tour when URL changes
  useEffect(() => {
    const urlTourId = getTourIdFromURL();
    if (urlTourId) {
      const newTour = tours.find((tour) => tour.id === urlTourId);
      if (newTour) {
        console.log("Updating selected tour to:", newTour.id);
        setSelectedTour(newTour);
      }
    }
  }, []);

  return (
    <section className="min-h-screen bg-stone-100 text-text">
      <div className="relative w-full h-full bg-stone-100">
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

        <div className="absolute w-full h-[95vh] bg-gradient-to-b from-black via-black/30 to-transparent "></div>
        <div className="absolute w-full h-[55vh] bg-gradient-to-b from-black via-black/30 to-transparent "></div>
        <div className="absolute top-0 w-full h-[70vh] mt-[30vh] bg-gradient-to-t from-stone-100 via-stone-100/5 to-transparent"></div>
        <div className="absolute top-0 w-full h-[70vh] mt-[30vh] bg-gradient-to-t from-stone-100/90 via-stone-100/90 to-transparent"></div>

        <div className="relative w-full h-full flex flex-col justify-center z-20 ">
          <div className="relative z-20 w-full">
            <div className="max-w-[85%] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
              {/* Title and Description */}
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

              {/* Tours Grid - thumbnail selection */}
              <div
                className="grid gap-1 md:gap-2 lg:gap-4 2xl:gap-6 grid-cols-4 sm:grid-cols-4 my-12
                  mx-auto max-w-[750px] xl:max-w-[900px] 2xl:max-w-[1000px]"
              >
                {tours.map((tour) => (
                  <motion.div
                    key={tour.id}
                    onClick={() => setSelectedTour(tour)}
                    className={`cursor-pointer group relative overflow-hidden aspect-[9/16] md:aspect-[2/3]
                                  rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                                    selectedTour.id === tour.id
                                      ? "outline-offset-[12px] ring-offset-0 ring-2 ring-soft-beige outline-[2px] outline-soft-beige/30 outline-none border-[2.5px] border-stone-100 z-30"
                                      : "border-[2.5px] border-soft-beige/20 brightness-[0.6] saturate-[0.7]"
                                  }`}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-2xl">
                      <img
                        src={tour.images.card}
                        alt={tour.title}
                        className={`w-full h-full ${tour.images.objectPosition} object-cover group-hover:scale-105 transition-transform duration-300 rounded-2xl overflow-hidden`}
                      />
                      <div
                        className="absolute top-3 right-3 bg-stone-200/80 backdrop-blur-sm text-amber-900/90 font-semibold 
                                  text-[0.2rem] sm:text-[0.5rem] md:text-xs py-1 px-3 rounded-full shadow-sm"
                      >
                        {tour.availability}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <h3
                        className="absolute bottom-4 left-4 
                                   text-[0.5rem] sm:text-[0.65rem] sm:leading-tight md:text-sm lg:text-lg font-semibold font-bonanova text-soft-sand"
                      >
                        {tour.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center gap-4 max-w-3xl mx-auto pb-4 md:pb-8 -mt-4">
                      <a
                        href="https://eveeno.com/de/event-cal/34263?style=grid"
                        className="inline-flex items-center justify-center h-8 sm:h-10 md:h-12 w-24 sm:w-32 md:w-44 xl:w-56 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold text-[0.3rem] sm:text-[0.6rem] md:text-sm xl:text-lg rounded-full shadow-lg hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300"
                      >
                        <svg
                          className="mr-2 w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          ></path>
                        </svg>
                        TOUR BUCHEN
                      </a>
                      <a
                        href="/gruppen"
                        className="inline-flex items-center justify-center h-8 sm:h-10 md:h-12 w-32 sm:w-44 md:w-56 xl:w-64 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold text-[0.3rem] sm:text-[0.6rem] md:text-sm xl:text-lg rounded-full shadow-lg hover:from-orange-700 hover:to-amber-700 transform hover:scale-105 transition-all duration-300"
                      >
                        <svg
                          className="mr-2 w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          ></path>
                        </svg>
                        GRUPPENANGEBOTE
                      </a>
                    </div>


              {/* Detailed Description Section */}
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
                      className="mt-4 text-lg text-gray-600 font-body leading-relaxed"
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
      </div>
      
    </section>
  );
};

export default InteractiveTours;
