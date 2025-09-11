import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrigittaHeylPortrait from "@images/BrigittaHeylPortrait.png";
import HWELogoV2NoText from "@images/HWE-LogoV2-noText.svg";
import GimmeldingenMap from "@images/GimmeldingenMap.jpg";
import GetInTouch from "./GetInTouch";


interface Props {
  images: {
    MJAlmondFlowerV1: ImageMetadata;
    MJAlmondFlowerMosaicGlass: ImageMetadata;
    MJBachusMosaicGlass: ImageMetadata;
    MJGlühweinV1: ImageMetadata;
    MJWallWithGrapes: ImageMetadata;
    MJGlühweinV2: ImageMetadata;
    WassermühleImWald: ImageMetadata;
  };
  backgroundImage: ImageMetadata;
  className: string;
}

const InteractiveTours = ({ images, backgroundImage, className }: Props) => {
  const tours = [
    {
      id: "mandelbluete",
      info: "Genuss, Geschichte und Natur",
      title: "Mandelblüte, Meerspinne und Monarchen",
      subtitle:
        "Erleben Sie die Pfälzer Mandelblüte auf einer einzigartigen Route.",
      availability: "Frühling",
      images: {
        card: images.MJAlmondFlowerMosaicGlass.src,
        background: backgroundImage.src,
        objectPosition: "object-[50%_20%]",
        bgObjectPosition: "object-contain",
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
      info: "Wasser, Wald und Wein - eine Weinwanderung",
      title: "Magischer Mussbach",
      subtitle:
        "Lauschen Sie dem Mussbach - den Geschichten des Gimmeldinger Tales und seines geheimnisvollen Waldes.",
      availability: "Sommer",
      images: {
        card: images.WassermühleImWald.src,
        background: backgroundImage.src,
        objectPosition: "object-[50%_20%]",
        bgObjectPosition: "object-[50%_36%]",
      },
      longDescription: `
        <p class="mb-4">🌊 Wasser & Wald • 🍷 5 Weine/ regionale Snacks • 🌱 Nachhaltigkeit & Baumpflanzung • ⏱️ 6 Stunden/4, 8 oder 12 km</p>
        <p class="mb-4">Wenn die Sonne hoch steht und das Gimmeldinger Tal in sommerlicher Kühle erstrahlt, beginnt ein nachhaltiges Erlebnis der besonderen Art. Auf unserer interaktiven Weinwanderung entdecken wir die Magie des Mussbachs, erfahren spannende Geschichten über Mühlen, Wasser und Holz und genießen fünf erlesene Weine mit passenden Snacks – inmitten eines grünen, erfrischenden Naturparadieses. Ideal für Teams oder Genießer, die Natur, Nachhaltigkeit und Geschichte verbinden möchten.</p>
        <ul class="list-disc pl-5 space-y-2 mb-4">
          <li>🌊 Erfrischender Auftakt: Genieße einen prickelnden Begrüßungswein an einem schattigen Platz  in einem Mussbacher Weingut</li>
          <li>🥾 Sommerliche Wanderlust: Entdecke den Mussbach über Lobloch entlang des erfrischenden Bachlaufes bis ins Gimmeldinger Tal auf schattigen Pfaden, durch Wälder und zu historischen Mühlen</li>
          <li>🍷 Weingenuss der Extraklasse: Lass Dich unterwegs von fünf regionalen Weinen mit saisonalen Snacks verwöhnen – jedes Glas erzählt von nachhaltiger Weinbaukunst in der Pfalz.</li>
          <li>🕰️ Geschichten, die begeistern: Lebendige Erzählungen über Wasser, Holz, Treideln am Speyerbach, Eselsmühlen, Kunsthandwerk und Wappenschmieden – lebendige Geschichte zum Mitmachen.</li>
          <li>🌱 Zum Abschluss: Jeder Teilnehmer pflanzt über Click-A-Tree einen Baum und erhält ein persönliches Zertifikat – so hinterlassen wir gemeinsam einen grünen Fußabdruck in der Pfalz.</li>
        </ul>
        <p>Diese Tour ist mehr als nur eine Wanderung: Sie verbindet Erfrischung, Genuss, Geschichte und Nachhaltigkeit, lässt die Magie des Mussbachs spürbar werden und macht Natur und Kultur hautnah erlebbar. Ideal für Teams, Familien oder Freunde, die den Sommer in der Pfalz bewusst genießen wollen.</p>
      `,
    },
    {
      id: "bacchus",
      info: "Für Genießer und Entdecker",
      title: "Von Bacchus bis Christophorus",
      subtitle:
        "Weinberge, Geschichte und Kultur - eine Tour auf den Spuren der Weinkultur und regionaler Legenden.",
      availability: "Frühling - Herbst",
      images: {
        card: images.MJBachusMosaicGlass.src,
        background: backgroundImage.src,
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
      info: "Wärmende Wintertour mit Glühwein",
      title: "Geheimnisvolles Gimmeldingen",
      subtitle:
        "Genießen Sie Natur, Geschichten und Pfälzer Herzlichkeit in der kalten Jahreszeit.",
      availability: "Winter",
      images: {
        card: images.MJGlühweinV1.src,
        background: backgroundImage.src,
        objectPosition: "object-[50%_28%]",
        bgObjectPosition: "object-center",
      },
      longDescription: `
        <p class="mb-4">🌟 Winterzauber  • 🧣 5 Glühweine &Co+Snacks  • 🧙‍♂️ Teamevent+Zeitreise • ⏱️ 4 Stunden/4 km</p>
        <p class="mb-4">Erlebe Gimmeldingen im Lichterglanz: Diese Tour führt dich durch geheimnisvolle Gassen und Keller des malerischen Weinorts sowie entlang des plätschernden Mussbaches – begleitet von einem wärmenden 5-teiligen Foodpairing mit Secco, 3 Glühweinen und einer pfälzischen Kostbarkeit. Bei jeder Station entfalten sich die Geheimnisse von Gimmeldingen mit spannenden Anekdoten und Hintergrundwissen, lebendig erzählt von einer zertifizierten Kultur- und Weinbotschafterin.</p>
        <ul class="list-disc space-y-2 mb-4">
          <li>🔥 Gemütliche Atmosphäre am knisternden Feuer</li>
          <li>🍷 Hausgemachter Glühwein mit traditionellen Rezepten</li>
          <li>📖 Spannende Geschichten über Gimmeldingen im Winter</li>
          <li>❄️ Winterliche Wanderung durch verschneite Weinberge</li>
          <li>💝 Pfälzer Herzlichkeit und Gastfreundschaft</li>
        </ul>
        <p class="mb-4">Das erwartet dich: Zum Auftakt wirst du mit einem prickelnden Secco und einem pfälzischen Snack in einem historischen Weinkeller willkommen geheißen. Von dort aus führt dich ein entspannter Spaziergang über rund 4 Kilometer durch romantische Gassen und versteckte Winkel des malerischen Weinorts Gimmeldingen. Die winterliche Stimmung entlang des plätschernden Mußbachs verleiht der Tour dabei eine ganz besondere Atmosphäre. Unterwegs erwarten dich weitere vier liebevoll gestaltete Stationen in historischen Gebäuden – jede einzelne ein Genussmoment mit wärmendem Glühwein und passenden Häppchen bzw einer Pfälzer Köstlichkeit. Und das Besondere: Du wirst selbst Teil der Geschichte – schlüpfst in die Rolle des Bischofs von Speyer, des Belzenickels, Adligen und Müllern, spürst die Magie des Mußbachs, erfährst von skurrilen Begebenheiten, alten Weihnachtsbräuchen und lüftest so die Geheimnisse, die sich hinter den historischen Mauern Gimmeldingens verbergen.</p>
        <p class="mb-4">Diese Tour verbindet Genuss, Natur und Kultur auf einzigartige Weise. Ob als weihnachtliche Team-Aktivität, Betriebsausflug oder romantischer Nachmittag mit Freunden – schaffe Dir unvergessliche Erinnerungen in der Winterzeit.</p>
      `,
    },
  ];

  const [selectedTour, setSelectedTour] = useState(tours[0]);

  return (
    <section
      className={`min-h-screen text-text bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 ${className}`}
    >
      {/* Enhanced Header Section */}
      <div className="relative w-full h-[70vh] min-h-[600px] max-h-[800px] overflow-hidden">
        <motion.div
          key={selectedTour.id + "-hero"}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 1.2, ease: "easeOut" },
          }}
          className="absolute inset-0"
        >
          <img
            src={selectedTour.images.background}
            alt="Tour Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30" />
        </motion.div>

        {/* Navigation Buttons */}
        <div className="absolute inset-y-0 left-0 z-20 flex items-center">
          <motion.button
            onClick={() => {
              const currentIndex = tours.findIndex(
                (tour) => tour.id === selectedTour.id
              );
              const prevIndex =
                currentIndex === 0 ? tours.length - 1 : currentIndex - 1;
              setSelectedTour(tours[prevIndex]);
            }}
            className="ml-6 p-4 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 1.2 } }}
          >
            <svg
              className="w-6 h-6 text-white group-hover:text-accent1 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>
        </div>

        <div className="absolute inset-y-0 right-0 z-20 flex items-center">
          <motion.button
            onClick={() => {
              const currentIndex = tours.findIndex(
                (tour) => tour.id === selectedTour.id
              );
              const nextIndex =
                currentIndex === tours.length - 1 ? 0 : currentIndex + 1;
              setSelectedTour(tours[nextIndex]);
            }}
            className="mr-6 p-4 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 1.2 } }}
          >
            <svg
              className="w-6 h-6 text-white group-hover:text-accent1 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTour.id + "-content"}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
              }}
              exit={{
                opacity: 0,
                y: -40,
                scale: 0.95,
                transition: { duration: 0.4 },
              }}
              className="max-w-5xl mx-auto"
            >
              {/* Seasonal Badge */}
              <motion.div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent1/25 to-accent1/15 backdrop-blur-md rounded-full mb-6 border border-accent1/30">
                <div className="w-2 h-2 bg-accent1 rounded-full animate-pulse" />
                <span className="text-accent1 font-bold text-sm uppercase tracking-wider">
                  {selectedTour.availability} • {selectedTour.info}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.7 },
                }}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-bonanova text-white mb-8 leading-[0.9] drop-shadow-2xl"
              >
                {selectedTour.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.9 },
                }}
                className="text-xl md:text-2xl lg:text-3xl text-stone-100 font-playfair leading-relaxed max-w-4xl mx-auto drop-shadow-lg"
                dangerouslySetInnerHTML={{ __html: selectedTour.subtitle }}
              />

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 1.1 },
                }}
                className="flex flex-wrap justify-center gap-6 mt-8"
              >
                <div className="flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full  hover:brightness-[13] hover:shawdow-[52px] shadow-yellow-100 transition-all duration-500">
                  {/* <span className="text-2xl">🌸</span> */}
                  <span className="text-white font-semibold hover:text-black hover:font-black hover:uppercase transition-all duration-300">
                    Frühling
                  </span>
                </div>
                <div className="flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full  hover:brightness-[13] hover:shawdow-[12px] shadow-yellow-100 transition-all duration-500">
                  {/* <span className="text-2xl">🌿</span> */}
                  <span className="text-white font-semibold hover:text-black hover:font-black hover:uppercase transition-all duration-300">
                    Sommer
                  </span>
                </div>
                <div className="flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full  hover:brightness-[13] hover:shawdow-[12px] shadow-yellow-100 transition-all duration-500">
                  {/* <span className="text-2xl">🍂</span> */}
                  <span className="text-white font-semibold hover:text-black hover:font-black hover:uppercase transition-all duration-300">
                    Herbst
                  </span>
                </div>
                <div className="flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full  hover:brightness-[13] hover:shawdow-[12px] shadow-yellow-100 transition-all duration-500">
                  {/* <span className="text-2xl">❄️</span> */}
                  <span className="text-white font-semibold hover:text-black hover:font-black hover:uppercase transition-all duration-300">
                    Winter
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 1.5 },
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content Section */}
      <div className="w-full h-full relative flex flex-row items-center justify-center  py-4">
        {/* Enhanced Tour Selection Sidebar */}
        <div className="">
          <div className="sticky top-8">
            <div className="flex flex-row items-center justify-center gap-4 w-1/2 mx-auto">
              {tours.map((tour, index) => {
                const getSeasonalColor = (season: string) => {
                  switch (season.toLowerCase()) {
                    case "frühling":
                      return "from-pink-500/20 to-rose-400/20 border-pink-300/30";
                    case "sommer":
                      return "from-green-500/20 to-emerald-400/20 border-green-300/30";
                    case "frühling - herbst":
                      return "from-amber-500/20 to-orange-400/20 border-amber-300/30";
                    case "winter":
                      return "from-blue-500/20 to-indigo-400/20 border-blue-300/30";
                    default:
                      return "from-accent1/20 to-accent1/10 border-accent1/30";
                  }
                };

                return (
                  <motion.div
                    key={tour.id}
                    onClick={() => setSelectedTour(tour)}
                    className={`cursor-pointer group relative overflow-hidden w-full h-full rounded-3xl transition-all duration-500 ${
                      selectedTour.id === tour.id
                        ? "ring-2 ring-accent1 shadow-2xl scale-[1.03] bg-white"
                        : "hover:shadow-xl hover:scale-[1.02] bg-white/50 backdrop-blur-sm"
                    }`}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: index * 0.1 },
                    }}
                  >
                    <div className="aspect-[4/3] relative">
                      <img
                        src={tour.images.card}
                        alt={tour.title}
                        className={`w-full h-full object-cover transition-all duration-500 ${
                          selectedTour.id === tour.id
                            ? "brightness-110"
                            : "group-hover:scale-110 brightness-90"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                      {/* Availability Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-bold rounded-full shadow-sm border border-white/20">
                          {tour.availability}
                        </span>
                      </div>

                      {/* Tour Title */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="text-white font-bold font-bonanova text-sm lg:text-base leading-tight drop-shadow-lg">
                          {tour.title}
                        </h4>
                      </div>

                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-accent1/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
            {/* Tour Count
              <div className="w-full max-w-sm mt-8 p-4 bg-gradient-to-r from-stone-100 to-stone-50 rounded-2xl border border-stone-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">
                    Verfügbare Touren
                  </span>
                  <span className="text-lg font-bold text-accent1">
                    {tours.length}
                  </span>
                </div>
              </div> */}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1">
          {/* Enhanced Tour Details */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-100">
              {/* Tour Header */}
              <div className="relative bg-gradient-to-r from-stone-50 to-amber-50/30 p-8 lg:p-12 border-b border-stone-200">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedTour.id + "-header"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6 },
                    }}
                    exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div>
                            <h2 className="text-3xl lg:text-4xl font-bold font-bonanova text-gray-800">
                              {selectedTour.title}
                            </h2>
                            <p className="text-accent1 font-semibold text-sm uppercase tracking-wider">
                              {selectedTour.availability} • {selectedTour.info}
                            </p>
                          </div>
                        </div>
                        <div className="w-24 h-1 bg-gradient-to-r from-accent1 to-accent1/60 rounded-full" />
                      </div>

                      {/* Quick Info Cards */}
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-stone-200">
                          <span className="text-lg">⏱️</span>
                          <span className="text-sm font-semibold text-gray-700">
                            4-6h
                          </span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-stone-200">
                          <span className="text-lg">🥾</span>
                          <span className="text-sm font-semibold text-gray-700">
                            4-12km
                          </span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-stone-200">
                          <span className="text-lg">🍷</span>
                          <span className="text-sm font-semibold text-gray-700">
                            5 Weine
                          </span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-stone-200">
                          <span className="text-lg">👥</span>
                          <span className="text-sm font-semibold text-gray-700">
                            Gruppen
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Tour Description */}
              <div className="p-8 lg:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedTour.id + "-details"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, delay: 0.2 },
                    }}
                    exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                  >
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold font-bonanova text-gray-800 mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-accent1/20 to-accent1/10 rounded-lg flex items-center justify-center">
                          <span className="text-accent1 text-lg">📖</span>
                        </div>
                        Was Sie erwartet
                      </h3>
                    </div>

                    <div className="relative">
                      <div
                        className="prose prose-lg max-w-none text-gray-700 font-body leading-relaxed
                                 prose-headings:font-bonanova prose-headings:text-gray-800
                                 prose-strong:text-gray-800 prose-strong:font-semibold
                                 prose-ul:space-y-3 prose-li:text-gray-700
                                 prose-p:text-gray-700 prose-p:leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: selectedTour.longDescription,
                        }}
                      />

                      {/* Decorative Elements */}
                      <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-accent1/10 to-transparent rounded-full" />
                      <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-accent1/5 to-transparent rounded-full" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Enhanced Booking Section */}
              <div className="relative bg-gradient-to-br from-accent1/5 via-stone-50 to-amber-50/20 p-8 lg:p-12 border-t border-stone-200 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-accent1 rounded-full" />
                  <div className="absolute bottom-10 right-10 w-16 h-16 bg-accent1 rounded-full" />
                  <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-accent1 rounded-full" />
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="text-center lg:text-left max-w-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Get In Touch Section */}
      <div className="relative bg-gradient-to-br from-stone-50 to-white border-t border-stone-200 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-32 h-32 bg-accent1 rounded-full" />
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent1 rounded-full" />
        </div>
        <div className="relative z-10">
          <GetInTouch className="" />
        </div>
      </div>
    </section>
  );
};

export default InteractiveTours;
