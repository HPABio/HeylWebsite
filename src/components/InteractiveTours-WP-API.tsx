import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const post1 = await fetch('http://wordpress-a80wooocckwk0kwg4ow0c4o4.82.29.180.126.sslip.io/wp-json/wp/v2/posts?slug=mandelbluete-meerspinne-und-monarchen');
const post2 = await fetch('http://wordpress-a80wooocckwk0kwg4ow0c4o4.82.29.180.126.sslip.io/wp-json/wp/v2/posts?slug=Von-Bacchus-bis-Christophorus');



const post1Json = await post1.json();
let rawHtml1 = post1Json[0].content.rendered;
// Split by "\n\n\n\n"
let parts = rawHtml1.split('\n\n\n\n');

const post2Json = await post2.json();
let rawHtml2 = post2Json[0].content.rendered;
// Split by "\n\n\n\n"
let parts2 = rawHtml2.split('\n\n\n\n');

// const slices = parts.match(/>.*?</gs) || [];
// const subtitle1 = slices[0]



/* const paragraphMatches1 = rawHtml1.match(/<p>.*?<\/p>/gs) || [];

const subtitle1 = paragraphMatches1[0].replace(/<[^>]*>?/g, '') || "";
const main1 = paragraphMatches1.slice(1, -1).join("").replace(/<[^>]*>?/g, '') || "";
const appendix1 = paragraphMatches1.at(-1).replace(/<[^>]*>?/g, '') || ""; */

const tours = [
  {
    id: "mandelbluete",
    title: `${post1Json[0].title.rendered}`,
    description:
      `${parts[0]}`,
    availability: "Frühling",
    images: {
      card: "/mj-almondFlowerV1.png",
      background: "/mj-almondFlower-mosaicGlass.png",
      objectPosition: "object-[50%_50%]",
      bgObjectPosition: "object-[50%_36%]",
    },
    longDescription: `
    ${parts.slice(1).join('\n\n\n\n')}
    `,
  },
  {
    id: "bacchus",
    title: `${post2Json[0].title.rendered}`,
    description:
    `${parts2[0]}`,
    availability: "Frühling - Herbst",
    images: {
      card: "/mj-Bachus-mosaicGlass.png",
      background: "/compressed-mj-wallWithGrapes.png",
      objectPosition: "object-[50%_20%]",
      bgObjectPosition: "object-[50%_50%]",
    },
    longDescription: `
    ${parts[1]}
    </br>
    ${parts2.slice(2, 8).join('\n\n\n\n')}
    </br>
    ${parts2.slice(8).join('\n\n\n\n')}
    `,
  },
  {
    id: "gluehwein",
    title: "Glühwein - Geheimnisvolles Gimmeldingen",
    description:
      "Wärmende Wintertour mit Glühwein, Geschichten und Pfälzer Herzlichkeit in der kalten Jahreszeit.",
    availability: "Winter",
    images: {
      card: "/mj-GlühweinV1.png",
      background: "/mj-teaCup.png",
      objectPosition: "object-[50%_35%]",
      bgObjectPosition: "object-center",
    },
    longDescription:
      "Wenn die Tage kürzer werden und die Landschaft in ein winterliches Kleid gehüllt ist, entfaltet die Pfalz einen ganz besonderen Charme. Bei unserer Glühwein-Tour wärmen wir uns mit hausgemachtem Glühwein, lauschen spannenden Geschichten am knisternden Feuer und genießen die gemütliche Atmosphäre. Ein unvergessliches Wintererlebnis, das Herz und Seele wärmt.",
  },
];

const InteractiveTours = () => {
  const [selectedTour, setSelectedTour] = useState(tours[0]);

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[5%]">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-x-8">
            {tours.map((tour) => (
              <motion.div
                key={tour.id}
                onClick={() => setSelectedTour(tour)}
                className={`cursor-pointer group relative overflow-hidden
                  rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                  selectedTour.id === tour.id
                    ? "outline-offset-[12px] ring-offset-0 ring-2 ring-soft-beige outline-[2px] outline-soft-beige/30 outline-none border-[2.5px] border-stone-100"
                    : "border-[2.5px] border-soft-beige/20"
                }`}
                whileHover={{ scale: 1.03 }}
              >
                <div className="relative w-full h-72 overflow-hidden rounded-2xl">
                  <img
                    src={tour.images.card}
                    alt={tour.title}
                    className={`w-full h-full ${tour.images.objectPosition} object-cover group-hover:scale-105 transition-transform duration-300 rounded-2xl overflow-hidden`}
                  />
                  <div className="absolute top-3 right-3 bg-stone-200/80 backdrop-blur-sm text-amber-900/90 font-semibold text-sm py-1 px-3 rounded-full shadow-sm">
                    {tour.availability}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold font-bonanova text-soft-sand">
                    {tour.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTour.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
              className="text-center mt-[12%]">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bonanova font-bold text-gray-900 drop-shadow-lg">
                {selectedTour.title}
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-xl md:text-2xl text-gray-800/90 font-body drop-shadow-sm"
              dangerouslySetInnerHTML={{
                __html: selectedTour.description,
              }}>
              </p>
            </motion.div>
          </AnimatePresence>


          <div className="h-full mt-6 md:mt-12 max-w-3xl mx-auto pb-44" >
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

              <div className="pt-24 flex justify-start pb-8">
                <a
                  href="/book-tour"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold text-lg rounded-full shadow-lg hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300"
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
                  Diese Tour buchen
                </a>
              </div>

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
