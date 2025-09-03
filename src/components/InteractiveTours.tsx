
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import BrigittaHeylPortrait from "@images/BrigittaHeylPortrait.png";


interface InteractiveToursProps {
  images: {
    MJAlmondFlowerV1: string;
    MJAlmondFlowerMosaicGlass: string;
    MJBachusMosaicGlass: string;
    MJGlühweinV1: string;
    MJWallWithGrapes: string;
    MJTeaCup: string;
    WassermühleImWald: string;
  };
}


const InteractiveTours = ({ images }: InteractiveToursProps) => {

  const tours = [
    {
      id: "mandelbluete",
      title: "Mandelblüte, Meerspinne und Monarchen",
      description:
        "Genieße während der Gimmeldinger Mandelblüte eine interaktive Weinerlebnistour mit unseren Mandelblütenhoheiten.",
      availability: "Frühling",
      images: {
        card: `${images.MJAlmondFlowerV1}`,
        background: `${images.MJAlmondFlowerMosaicGlass}`,
        objectPosition: "object-[50%_50%]",
        bgObjectPosition: "object-[50%_36%]",
      },
      longDescription: `
        <p class="mb-4">Erlebe mit Freunden, Kollegen und Familie eine unterhaltsame Weinerlebnistour durch die rosa blühenden Weinberge von Gimmeldingen. Geführt von einer zertifizierten Kultur- und Weinbotschafterin erwartet Dich eine spannende Mischung aus Natur, Genuss und kurzweiligen historischen Episoden - perfekt für alle Sinne! Das erwartet dich:</p>
        <ul class="list-disc pl-5 space-y-2 mb-4">
          <li>🌸 Genieße einen rosa Begrüßungs-Secco mit einem Pfälzer Snack und einer herrlichen Aussicht!</li>
          <li>🥾 Erkunde auf der 4 km langen Weinbergs-Wanderung die schönsten Plätze und Mandelbäume in Gimmeldingen</li>
          <li>🍷 Lass Dich unterwegs von weiteren 4 exzellenten Weinen lokaler Weingüter mit abgestimmten Mandel-Snacks verwöhnen</li>
          <li>✨ Genieße vor Ort einen besonderen Riesling aus der historischen Meerspinn-Lage</li>
          <li>📖 Erfahre, warum das Mandelblütenfest in Gimmeldingen stattfindet, was Mandeln mit der Meerspinne gemeinsam haben und warum die Bayern das Oktoberfest den Pfälzern verdanken</li>
          <li>🎁 Zum Abschluss wartet eine süße, mandelige Überraschung auf Dich</li>
        </ul>
        <p>Diese Tour ist mehr als nur eine Führung – sie verbindet, inspiriert und macht Spaß: Ob als Team-Aktivität oder gemütlicher Tag mit Deinen Liebsten – diese Tour verbindet Genuss mit Natur, lässt Geschichte erlebbar werden und zeigt Dir Gimmeldingen von seiner schönsten Seite.</p>
      `,
    },
    {
      id: "mussbach",
      title: "Magische Momente am Mussbach ▸ Nachhaltige Weinwanderung",
      description:
        "Auf unserer nachhaltigen Wein-Wanderung lauschen wir dem Mussbach, tauchen in seine Geschichten ein und genießen die erfrischende Kühle des Gimmeldinger Tales und seines geheimnisvollen Waldes.",
      availability: "Sommer",
      images: {
        card: `${images.WassermühleImWald}`,
        background: `${images.MJWallWithGrapes}`,
        objectPosition: "object-[50%_20%]",
        bgObjectPosition: "object-[50%_36%]",
      },
      longDescription: `
        <p class="mb-4">Wenn die Tage kürzer werden und die Landschaft in ein winterliches Kleid gehüllt ist, entfaltet die Pfalz einen ganz besonderen Charme. Bei unserer Glühwein-Tour wärmen wir uns mit hausgemachtem Glühwein, lauschen spannenden Geschichten am knisternden Feuer und genießen die gemütliche Atmosphäre. Ein unvergessliches Wintererlebnis, das Herz und Seele wärmt.</p>
        <p class="mb-4">Entdecke die versteckten Schätze des Gimmeldinger Tales und lass dich von der Magie des Waldes verzaubern. Diese Tour verbindet Nachhaltigkeit mit Genuss und bietet ein einzigartiges Naturerlebnis.</p>
      `,
    },
    {
      id: "bacchus",
      title: "Von Bacchus bis Christophorus",
      description:
        "Genieße die idyllischen Weinberge der Pfalz und besuche ausgewählte Weingüter im historischen Ortskern von Gimmeldingen.",
      availability: "Frühling - Herbst",
      images: {
        card: `${images.MJBachusMosaicGlass}`,
        background: `${images.MJWallWithGrapes}`,
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
      title: "Glühwein - Geheimnisvolles Gimmeldingen",
      description:
        "Wärmende Wintertour mit Glühwein, Geschichten und Pfälzer Herzlichkeit in der kalten Jahreszeit.",
      availability: "Winter",
      images: {
        card: `${images.MJGlühweinV1}`,
        background: `${images.MJTeaCup}`,
        objectPosition: "object-[50%_35%]",
        bgObjectPosition: "object-center",
      },
      longDescription: `
        <p class="mb-4">Wenn die Tage kürzer werden und die Landschaft in ein winterliches Kleid gehüllt ist, entfaltet die Pfalz einen ganz besonderen Charme. Bei unserer Glühwein-Tour wärmen wir uns mit hausgemachtem Glühwein, lauschen spannenden Geschichten am knisternden Feuer und genießen die gemütliche Atmosphäre.</p>
        <p class="mb-4">Entdecke die geheimnisvolle Seite Gimmeldingens bei Kerzenschein und lass dich von winterlichen Geschichten verzaubern. Ein unvergessliches Wintererlebnis, das Herz und Seele wärmt.</p>
        <ul class="list-disc pl-5 space-y-2 mb-4">
          <li>🔥 Gemütliche Atmosphäre am knisternden Feuer</li>
          <li>🍷 Hausgemachter Glühwein mit traditionellen Rezepten</li>
          <li>📖 Spannende Geschichten über Gimmeldingen im Winter</li>
          <li>❄️ Winterliche Wanderung durch verschneite Weinberge</li>
          <li>💝 Pfälzer Herzlichkeit und Gastfreundschaft</li>
        </ul>
      `,
    },
  ];

  const [selectedTour, setSelectedTour] = useState(tours[0]);

  return (
    <section className="min-h-screen bg-stone-100 text-text">
      <div className="relative w-full h-full bg-stone-100">
        <AnimatePresence>
          <motion.img
            key={selectedTour.id + "-bg"}
            src={`${selectedTour.images.background}`}
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
                        src={`${tour.images.card}`}
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

              {/* Action Buttons */}
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
      </div>
    </section>
  );
};

export default InteractiveTours;
