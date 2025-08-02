import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const post1 = await fetch('http://wordpress-a80wooocckwk0kwg4ow0c4o4.82.29.180.126.sslip.io/wp-json/wp/v2/posts?slug=ergruenden-sie');
const post2 = await fetch('http://wordpress-a80wooocckwk0kwg4ow0c4o4.82.29.180.126.sslip.io/wp-json/wp/v2/posts?slug=geniessen-sie');

const post2Json = await post2.json();


const post1Json = await post1.json();
let rawHtml1 = post1Json[0].content.rendered;
// Split by "\n\n\n\n"
let parts = rawHtml1.split('\n\n\n\n');

const slices = parts.match(/>.*?</gs) || [];
const subtitle1 = slices[1]





const paragraphMatches1 = rawHtml1.match(/>.*?</gs) || [];
const subtitleMatches1 = rawHtml1.match(/<h2>.*?<\/h2>/gs) || [];

// const subtitle1 = subtitleMatches1[0].replace(/<[^>]*>?/g, '') || "";
const main1 = paragraphMatches1.slice(1, -1).join("").replace(/<[^>]*>?/g, '') || "";
const appendix1 = paragraphMatches1.at(-1).replace(/<[^>]*>?/g, '') || "";

const tours = [
  {
    id: "mandelbluete",
    title: `${post1Json[0].title.rendered}`,
    description:
    ``,
    availability: "Frühling",
    images: {
      card: "/mj-almondFlowerV1.png",
      background: "/mj-almondFlower-mosaicGlass.png",
      objectPosition: "object-[50%_50%]",
      bgObjectPosition: "object-[50%_36%]",
    },
    longDescription: `

    `,
  },
  {
    id: "bacchus",
    title:
      "Von Bacchus bis Christophorus",
    description:
      "Genieße die idyllischen Weinberge der Pfalz und besuche ausgewählte Weingüter im historischen Ortskern von Gimmeldingen.",
    availability: "Frühling - Herbst",
    images: {
      card: "/mj-Bachus-mosaicGlass.png",
      background: "/compressed-mj-wallWithGrapes.png",
      objectPosition: "object-[50%_20%]",
      bgObjectPosition: "object-[50%_50%]",
    },
    longDescription: `
      <p class="mb-4">Ein kulinarisches Gruppenerlebnis, das Gimmeldingen und die Pfalz lebendig macht – interaktiv, spannend und unterhaltsam.</p>
      <p class="mb-4 text-center font-semibold text-accent2-brick">🌿 Weinberge/historischer Ortskern •  🍷 5 Weine/5 Häppchen  • 🤝 Teamevent/Zeitreise • ⏱️ 4 Stunden/4 km</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li>🌿 Weinbergwanderung mit großartigen Ausblicken und spannenden Einblicken in den Weinbau.</li>
        <li>🍷 Exquisite Weine von 5 lokalen Winzern und perfekt dazu abgestimmte Leckerbissen.</li>
        <li>🏘️ Spaziergang durch die charmanten Gassen von Gimmeldingen zu 3 historischen Weingütern mit Weinverkostungen.</li>
        <li>🕰️ Interaktive Zeitreise durch die pfälzische Weingeschichte - jeder Teilnehmer wird dabei Teil der Geschichte !</li>
        <li>🤝 Ideal als Teamevent oder entspannter Ausflug mit Freunden & Familie.</li>
      </ul>
      <h4 class="text-xl font-bold font-bonanova text-gray-800 mt-6 mb-2">So läuft die Tour ab:</h4>
      <p class="mb-2">Zum Auftakt genießen wir einen Begrüßungs-Riesling und köstliche Mini-Saumagenburger in einem historischen Weingut. Danach wandern wir entspannt durch sanfte Weinberge, genießen weite Ausblicke und verkosten unterwegs zwei erlesene Weine – perfekt ergänzt durch kulinarische Köstlichkeiten.</p>
      <p class="mb-2">Mitten in den Reben erfahren wir Spannendes über Bio-Weinbau und Qualitätsweine – anschaulich, unterhaltsam und direkt vor Ort erklärt. In mehreren kleinen Episoden tauchen wir dabei in die pfälzische Weingeschichte ein: Als römischer Legionär, Karl der Große, barocke Hofdame oder Napoleon  wird jeder Teilnehmer ein Teil der pfälzischen Geschichte, wobei Krone oder Napoleonshut für lockere Stimmung, gemeinsames Lachen und viel Spaß sorgen.</p>
      <p>Im zweiten Teil der Tour erkunden wir den historischen Ortskern, verkosten zwei weitere Weine in renommierten Familienweingütern in die wir ganz persönliche Einblicke erhalten. Zum Abschluss suchen wir noch Christophorus – und Du darfst Dich auf eine kleine Überraschung freuen!</p>
    `,
  },
  {
    id: "gluehwein",
    title: "Glühwein & Winterzauber",
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
    <section className="min-h-screen bg-white text-text mt-[0px] relative">
      <div className="relative w-full h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-green-500">
          

      <div className="w-full h-[35vh]">
        <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence>
          <motion.img
            key={selectedTour.id + "-bg"}
            src={selectedTour.images.background}
            alt={`${selectedTour.title} background`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75, transition: { duration: 0.8 } }}
            exit={{ opacity: 0 }}
            className={`absolute inset-0 w-full h-full ${selectedTour.images.bgObjectPosition} object-cover saturate-[1]`}
          />
        </AnimatePresence>
        </div>
      </div>

      <div className="absolute w-full h-full top-0 left-0 "></div>
          {/* TITLE AND DESCRIPTION */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTour.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
              className="text-center relative"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bonanova font-bold text-gray-900 drop-shadow-lg">
                {selectedTour.title}
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 font-body drop-shadow-sm">
                {selectedTour.description}
              </p>
            </motion.div>
          </AnimatePresence>


          <div className="absolute inset-0 top-0 left-0 w-full h-full flex items-start justify-center">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-x-8  min-w-[500px] w-2/3  ">
            {tours.map((tour) => (
              <motion.div
                key={tour.id}
                onClick={() => setSelectedTour(tour)}
                className={`cursor-pointer group relative bg-red-300 overflow-hidden
                  rounded-b-2xl  shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                  selectedTour.id === tour.id
                    ? "ring-4 ring-accent1 ring-offset-4 "
                    : ""
                }`}
                whileHover={{ scale: 1.03 }}
              >
                <div className="relative w-full h-72 overflow-hidden rounded-b-2xl ">
                  <img
                    src={tour.images.card}
                    alt={tour.title}
                    className={`w-full h-full ${tour.images.objectPosition} object-cover group-hover:scale-105 transition-transform duration-300 rounded-b-2xl overflow-hidden`}
                  />
                  <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-accent2-brick font-semibold text-sm py-1 px-3 rounded-full shadow-sm">
                    {tour.availability}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold font-bonanova text-white">
                    {tour.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          </div>





          <div className="mt-16 md:mt-24 max-w-3xl mx-auto bg-red-500">
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

      
    </section>
  );
};

export default InteractiveTours;
