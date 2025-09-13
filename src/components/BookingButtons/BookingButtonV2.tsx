import React from "react";
import BrigittaHeylPortrait from "@images/BrigittaHeylPortrait.png";

interface Props {
  classNames: string;
}
const BookingButtonV2toRight: React.FC<Props> = ({ classNames }) => {
  return (
    <main>
      {/* Booking Button */}
      <div className={`flex relative ${classNames}`}>
        <div
          className="w-[62%] h-full flex justify-between rounded-full bg-gradient-to-br from-accent1/25 to-accent1/10 shadow-inner shadow-accent1/10
          relative hover:w-[100%] hover:bg-stone-50 transition-all duration-500"
        >
          <div className="flex justify-between group">
            <div className="flex justify-between p-3 transition-all duration-300 border-0 border-purple-500 z-10">
              <a
                href="https://eveeno.com/de/event-cal/34263?style=grid"
                className="h-full inline-flex items-center px-4 py-2  
              font-semibold text-base lg:text-lg rounded-full lg:leading-tight shadow-md 
              bg-gradient-to-r from-accent1/80 to-accent1/60 text-gray-800 border-0 border-accent1 
              group-hover:border-text/10  group-hover:text-text/80 group-hover:shadow-xl group-hover:scale-105 group-hover:mx-1 
              hover:text-xl
              transform transition-all duration-500 mr-[0vw]"
              >
                <p className="hover:text-gray-800 transition-all duration-300 uppercase font-inter font-semibold">
                  Tour buchen
                </p>
                <svg
                  className="w-7 aspect-square ml-2 text-gray-800/40 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
            <div className="absolute top-0 right-0 h-full flex justify-end p-3 group-hover:opacity-100 transition-all duration-300 border-0 border-red-500 z-0">
              <div
                className="h-full inline-flex items-center justify-end opacity-1 border-text/40
                              text-text/60 font-semibold text-xs md:text-base md:leading-tight rounded-full 
                              hover:from-accent1/90 hover:to-accent1/50 transform
                              group-hover:opacity-100 group-hover:scale-[1.02]
                              transition-all group-hover:delay-100 duration-300"
              >
                <a
                  href="/gruppen"
                  className=" h-full inline-flex items-center justify-end border-0 text-text/50
                   border-text/40 rounded-full px-4 py-2 hover:text-text/80 hover:scale-[0.98] hover:bg-text/5
                   hover:shadow-inner hover:shadow-accent1/10 hover:border-0 transform transition-all  duration-300 "
                >
                  <p className=" opacity-0 group-hover:opacity-100 transition-all delay-100 duration-300">
                    Auch für Gruppen
                  </p>
                  <svg
                    className=" w-4 md:w-7 aspect-square ml-2 text-text/70"
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
                </a>
              </div>
            </div>
          </div>

          {/* <a
      href="/gruppen"
      className="hidden md:inline-flex w-full h-full aspect-square max-h-20 p-1 mt-1 mr-2 items-center justify-end 
      text-accent1 font-semibold text-sm lg:text-base rounded-full opacity-1
      group-hover:opacity-1 transform hover:scale-105 transition-all duration-300"
    >
      <div className="w-full h-full aspect-square">
        <img
          src={BrigittaHeylPortrait.src}
          alt="Brigitta Heyl"
          className="h-full w-full object-cover object-top rounded-full border-4 border-accent1 shadow-lg"
        />
      </div>
    </a> */}
        </div>
      </div>
    </main>
  );
};

const BookingButtonV2toLeft: React.FC<Props> = ({ classNames }) => {
  return (
    <main>
      {/* Booking Button */}
      <div className={`flex relative ${classNames}`}>
        <div
          className="w-[62%] h-full flex justify-end rounded-full bg-gradient-to-br from-accent1/25 to-accent1/10 shadow-inner shadow-accent1/10
          relative hover:w-[100%] hover:bg-stone-50 transition-all duration-500"
        >
          <div className="flex justify-between group">
            <div className="flex justify-between p-3 transition-all duration-300 border-0 border-purple-500 z-10">
              <a
                href="https://eveeno.com/de/event-cal/34263?style=grid"
                className="h-full inline-flex items-center px-4 py-2  
              font-semibold text-base lg:text-lg rounded-full lg:leading-tight shadow-md 
              bg-gradient-to-r from-accent1/80 to-accent1/60 text-stone-50/90 border-0 border-accent1 
              group-hover:border-text/10  group-hover:shadow-xl group-hover:scale-105 group-hover:mx-1   
              hover:text-xl 
              transform transition-all duration-500 ml-[0vw]"
              >
                <svg
                  className="w-7 aspect-square mr-2 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="hover:text-text/80 transition-all duration-300 uppercase font-inter font-semibold">
                  Tour buchen
                </p>
              </a>
            </div>

            <div className="absolute top-0 left-0 h-full flex justify-end p-3 group-hover:opacity-100 transition-all duration-300 border-0 border-green-500 z-0">
              <div
                className="h-full inline-flex items-center justify-end opacity-1 border-text/40
                              text-text/60 font-semibold text-xs md:text-base md:leading-tight rounded-full 
                              hover:from-accent1/90 hover:to-accent1/50 transform
                              group-hover:opacity-100 group-hover:scale-[1.02]
                              transition-all group-hover:delay-100 duration-300"
              >
                <a
                  href="/gruppen"
                  className=" h-full inline-flex items-center justify-end border-0 text-text/50
                   border-text/40 rounded-full px-4 py-2 hover:text-text/80 hover:scale-[0.98] hover:bg-text/5
                   hover:shadow-inner hover:shadow-accent1/10 hover:border-0 transform transition-all  duration-300 "
                >
                  <svg
                    className=" w-4 md:w-7 aspect-square mr-2 text-text/70"
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
                  <p className=" opacity-0 group-hover:opacity-100 transition-all delay-100 duration-300">
                    Auch für Gruppen
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* <a
      href="/gruppen"
      className="hidden md:inline-flex w-full h-full aspect-square max-h-20 p-1 mt-1 mr-2 items-center justify-end 
      text-accent1 font-semibold text-sm lg:text-base rounded-full opacity-1
      group-hover:opacity-1 transform hover:scale-105 transition-all duration-300"
    >
      <div className="w-full h-full aspect-square">
        <img
          src={BrigittaHeylPortrait.src}
          alt="Brigitta Heyl"
          className="h-full w-full object-cover object-top rounded-full border-4 border-accent1 shadow-lg"
        />
      </div>
    </a> */}
        </div>
      </div>
    </main>
  );
};

// Export both components
export { BookingButtonV2toRight, BookingButtonV2toLeft };
export default BookingButtonV2toRight;
