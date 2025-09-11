import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrigittaHeylPortrait from "@images/BrigittaHeylPortrait.png";
import HWELogoV2NoText from "@images/HWE-LogoV2-noText.svg";
import GimmeldingenMap from "@images/GimmeldingenMap.jpg";

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
    <section className={`min-h-screen text-text ${className}`}>
      <div className="relative w-full h-full pb-[400px] lg:pb-[600px]">
        <AnimatePresence>
          <motion.img
            key={selectedTour.id + "-bg"}
            src={`${GimmeldingenMap.src}`}
            alt={`${selectedTour.title} background`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.99, transition: { duration: 0.8 } }}
            exit={{ opacity: 0 }}
            className={`absolute inset-0 w-full h-full -mt-[15vh] ${selectedTour.images.bgObjectPosition} object-cover saturate-[1] `}
          />
        <div className="absolute top-0 left-0 w-full h-full -mt-[70px] bg-gradient-to-b  from-stone-100/60 via-stone-100/10 to-transparent "></div>
        <div className="absolute bottom-0 left-0 w-full h-full -mt-[70px] bg-gradient-to-t  from-stone-100/80 via-stone-100/10 to-transparent"></div>
        </AnimatePresence>


        {/* Title and Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTour.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            className="relative w-full h-full text-center mx-auto flex flex-col justify-center items-center bg-green-500/10">
              <img src={selectedTour.images.background} alt="GimmeldingenMap" className="w-full h-full absolute top-0 left-0 object-cover object-[0%_40%]" />
              <div className="absolute w-full h-2/3 top-0 left-0 bg-gradient-to-b from-stone-100 via-stone-100/80 to-transparent"/>
              <div className="absolute w-full h-2/3 bottom-0 left-0 bg-gradient-to-t from-stone-100 via-stone-100/60 to-transparent"/>
            <div className="relative  flex flex-col justify-center items-center  py-6 lg:py-10
            xl:max-h-[250px] 
            2xl:max-h-[280px]
            md:max-w-2xl 
            lg:max-w-4xl
            xl:max-w-7xl">
            <h2 className="relative z-10 text-sm lg:text-base xl:text-lg font-semibold text-accent1 uppercase tracking-wider font-body">
              {selectedTour.info}
            </h2>
            <h1 className="relative z-10 drop-shadow-lg font-bonanova font-bold bg-gray-900/90 text-transparent bg-clip-text
            text-3xl -mt-2
            sm:text-4xl
            md:text-4xl xl:-mt-2
            lg:text-5xl
            xl:text-6xl 
            2xl:text-7xl ">
              {selectedTour.title}
            </h1>
            <p className="relative z-10 max-w-md md:max-w-xl xl:max-w-2xl mt-4  mx-auto text-gray-800 font-playfair
            text-xs 
            md:text-sm md:leading-tight
            lg:text-base lg:leading-tight
            xl:text-xl  xl:leading-tight"
            dangerouslySetInnerHTML={{
              __html: selectedTour.subtitle,
            }}></p>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Content Container */}
        <div className="relative w-full h-full min-h-[1000px] flex flex-row justify-center z-20 pt-4 lg:pt-8 xl:pt-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-stone-100/90 via-stone-100/30 to-transparent"/>
          <div className="relative z-20 w-full max-w-[1400px] mx-auto flex flex-row pl-10 pr-4 lg:px-14 ">
            {/* Left Side - Tour Cards (1/3 width) */}
            <div className="
            w-1/4 flex relative items-start justify-end pt-20 
            max-h-[800px] max-w-[400px] mx-auto 
            lg:max-h-[700px] xl:max-h-[800px] xl:w-1/3 lg:max-w-[600px] lg:h-[80vh] lg:pt-0 lg:mt-16">
              {/* Tours Grid - vertical stacking */}
              <div className="w-full h-full flex flex-col gap-2 items-end justify-start">
                {tours.map((tour) => (
                  <motion.div
                    key={tour.id}
                    onClick={() => setSelectedTour(tour)}
                    className={`cursor-pointer group overflow-hidden min-h-[100px] max-w-[360px] max-h-[180px]  w-full h-[20vh] 
                      lg:w-full lg:min-h-[120px] lg:min-w-[260px]  lg:max-h-[180px]
                      xl:min-h-[160px] xl:max-h-[220px] xl:aspect-video xl:w-auto xl:h-auto
                                  rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                                    selectedTour.id === tour.id
                                      ? "outline-offset-[6px] ring-offset-0 ring-2 ring-soft-beige outline-[2px] outline-stone-200 outline-none border-[2.5px] border-stone-100 z-30"
                                      : "border-[2.5px] border-soft-beige/20 brightness-[0.9] saturate-[0.8] contrast-50"
                                  }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-2xl">
                      <img
                        src={`${tour.images.card}`}
                        alt={tour.title}
                        className={`w-full h-full ${tour.images.objectPosition} object-cover group-hover:scale-105 transition-transform duration-300 rounded-2xl overflow-hidden`}
                      />
                      <div
                        className="absolute top-3 right-3 bg-stone-200/80 backdrop-blur-sm text-amber-900/90 font-semibold 
                                  text-[0.5rem] lg:text-[0.6rem] px-1 lg:pt-[0.1rem] lg:px-[0.3rem] rounded-full shadow-sm"
                      >
                        {tour.availability}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                      <h3 className="absolute bottom-4 left-4 
                      text-[0.7rem] leading-none 
                      lg:text-[0.75rem] xl:text-[0.9rem] font-semibold font-bonanova text-soft-sand/90">
                        {tour.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side - Content (2/3 width) */}
            <div className="w-3/4 lg:w-2/3 px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-start  h-fit ">
              {/* Detailed Description Section */}
              <div className="relative w-full h-fit max-w-3xl mx-auto pb-14 mt-0 flex flex-col items-start justify-start ">
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
                    <h2 className="text-[44px] lg:text-[50px] xl:text-[56px] font-bold  text-text/40 md:text-text/40   mb-4
                    font-bonanova tracking-tighter leading-none text-center md:text-left">
                      Über diese Tour
                    </h2>








                    {/* Book Tour Button */}
                    <div className= "w-[320px] md:w-[360px] flex justify-start my-4 rounded-full bg-gradient-to-r from-accent1/20 to-accent1/10">
                <div className="flex justify-between w-full ">
                  <a
                    href="https://eveeno.com/de/event-cal/34263?style=grid"
                    className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-accent1 to-accent1/80 text-white font-semibold text-xs md:text-sm rounded-full shadow-lg hover:from-accent1/90 hover:to-accent1/70 transform hover:scale-105 transition-all duration-300 group"
                  >
                    Ihre Tour buchen 
                    <svg
                      className="w-3 md:w-4 aspect-square ml-2 group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="/gruppen"
                    className="inline-flex items-center justify-end 
                    text-accent1 font-semibold text-xs md:text-sm rounded-full pr-3 hover:from-accent1/90 hover:to-accent1/70 transform hover:scale-105 transition-all duration-300 group"
                  >
                    <svg
                    className=" w-4 md:w-5 aspect-square mr-1 md:mr-2"
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
                  Auch  für Gruppen
                  </a>
                  {/* <p className="bg-stone-500/30 text-transparent bg-clip-text text-5xl text-center my-auto ml-4 mt-2 flex-shrink">🍷</p> */}
                </div>
              </div>


                    <div
                      className="mt-4 px-4 lg:px-0 text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 font-body leading-relaxed"
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
