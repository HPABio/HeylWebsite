import HWELogoV2NoText from "@images/HWE-LogoV2-noText.svg";

interface Props {
  className?: string;
}

const GetInTouch = ({ className = "" }: Props) => {
  return (
    <section id="get-in-touch" className={` relative ${className}`}>
      {/* DESKTOP Contact Card Section */}
      <div className=" w-full mx-auto relative z-10">
        <div className="bg-gradient-to-br from-stone-50/85 to-stone-100/50 rounded-xl shadow-lg border border-stone-200/50 p-6 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full text-accent1/20">
              <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="currentColor"/>
            </svg>
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            {/* Left side with button (2/3 width) */}
            <div className="flex-1 md:w-2/3 md:max-w- lg:w-2/3 text-center md:text-left leading-tight">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-bold font-bonanova tracking-tight mb-3 md:leading-tight">
                <span className="text-accent1/80">Sie haben noch offene Fragen?</span>
              </h3>
              <p className="md:max-w-80 lg:max-w-full sm:text-sm md:text-base lg:text-lg text-stone-600/80 font-normal md:mt-2 lg:mt-0 md:mb-2 lg:mb-4 sm:leading-tight md:leading-tight lg:leading-tight">
                Ich helfe Ihnen gerne weiter und beantworte alle Ihre Fragen zu unseren Wein-Erlebnistouren.
              </p>
              <div className="w-[320px] md:w-[360px] flex justify-start my-4 rounded-full bg-gradient-to-r from-accent1/20 to-accent1/10">
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
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
                    Auch für Gruppen
                  </a>
                  {/* <p className="bg-stone-500/30 text-transparent bg-clip-text text-5xl text-center my-auto ml-4 mt-2 flex-shrink">🍷</p> */}
                </div>
              </div>
            </div>
            
            {/* Right side with stacked info items (1/3 width) */}
            <div className="lg:flex flex-col gap-2 lg:w-1/3 hidden ">
              <div className="flex items-center justify-start gap-2">
                <svg className="w-4 h-4 text-accent1/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span className="text-sm text-stone-600">Direkter Kontakt</span>
              </div>
              <div className="flex items-center justify-start  gap-2">
                <svg className="w-4 h-4 text-accent1/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-sm text-stone-600">Persönliche Beratung</span>
              </div>
              <div className="flex items-center justify-start gap-2">
                <svg className="w-4 h-4 text-accent1/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-sm text-stone-600">Schnelle Antwort</span>
              </div>
            </div>
          </div>
          <p className="mx-auto font-light text-gray-700 text-center md:text-base lg:text-xl w-full relative z-10 md:mt-4 lg:mt-8 md:leading-tight">
            "Ich freue mich darauf, Sie auf eine meiner Touren mitzunehmen!"
          </p>
        </div>
        
        <div className="w-fit h-fit absolute top-0 right-[0%] sm:translate-x-[-5%] sm:translate-y-[-46%] md:translate-x-[-5%] md:translate-y-[-16%] lg:translate-x-[-20%] lg:translate-y-[-30%]">
          <img src={HWELogoV2NoText.src} loading="lazy" alt="Vineyard background" className="relative w-[200px] object-cover opacity-85" />
        </div>
      </div>

      {/* MOBILE Contact Card Section */}
      <div className="block md:hidden w-full max-w-[75%] sm:max-w-2xl mx-auto relative z-10 mt-12 md:mt-16 mb-8">
        <div className="bg-gradient-to-br from-stone-50/85 to-stone-100/50 rounded-xl shadow-lg border border-stone-200/50 p-6 md:p-8 md:pb-6 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full text-accent1/20">
              <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="currentColor"/>
            </svg>
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            {/* Left side with button (2/3 width) */}
            <div className="flex-1 md:w-2/3 md:max-w- lg:w-2/3 text-center md:text-left leading-tight">
              <h3 className="sm:text-xl text-left font-bold font-bonanova tracking-tight sm:leading-none mb-4 sm:mb-4">
                <span className="text-accent1/80">Sie haben noch <br className="md:hidden block" />offene Fragen?</span>
              </h3>
              <p className="max-w-44 sm:max-w-64 text-[13px] sm:text-sm text-left text-stone-600/50 sm:text-stone-600/70 font-normal mb-4 sm:mb-0 lg:mb-4 sm:leading-snug">
                Ich helfe Ihnen <br className="sm:hidden block" /> gerne weiter und <br /> beantworte alle <br className="sm:hidden block" /> Ihre Fragen zu unseren <br/>Wein-Erlebnistouren.
              </p>
              <div className="flex md:justify-start justify-center my-5 md:my-3">
                <a href="/kontakt" className="inline-flex items-center px-6 py-1 bg-gradient-to-r from-accent1 to-accent1/80 text-white font-semibold text-sm rounded-full shadow-lg hover:from-accent1/90 hover:to-accent1/70 transform hover:scale-105 transition-all duration-300 group">
                  Kontaktieren Sie mich <span className="hidden sm:inline">hier</span>
                  <svg className="rotate-180 w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Right side with stacked info items (1/3 width) */}
            <div className="lg:flex flex-col gap-2 lg:w-1/3 hidden ">
              <div className="flex items-center justify-start gap-2">
                <svg className="w-4 h-4 text-accent1/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span className="text-sm text-stone-600">Direkter Kontakt</span>
              </div>
              <div className="flex items-center justify-start  gap-2">
                <svg className="w-4 h-4 text-accent1/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-sm text-stone-600">Persönliche Beratung</span>
              </div>
              <div className="flex items-center justify-start gap-2">
                <svg className="w-4 h-4 text-accent1/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-sm text-stone-600">Schnelle Antwort</span>
              </div>
            </div>
          </div>

          <p className="max-w-22 text-xs sm:text-sm sm:leading-tight mx-auto font-light text-gray-700/60 sm:text-gray-700 text-center w-full relative z-10 ">
            "Ich freue mich darauf, Sie auf eine meiner Touren mitzunehmen!"
          </p>

        </div>
        
        <div className="w-fit h-fit absolute top-0 right-[0%] sm:translate-x-[-5%] sm:translate-y-[-26%] md:translate-x-[-5%] md:translate-y-[-16%] lg:translate-x-[-20%] lg:translate-y-[-30%]">
          <img src={HWELogoV2NoText.src} loading="lazy" alt="Vineyard background" className="relative w-[150px] md:w-[200px] object-cover opacity-85" />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
