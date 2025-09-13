import React from 'react';
import BrigittaHeylPortrait from "@images/BrigittaHeylPortrait.png";

const BookingButtonV1: React.FC = () => {
  return (
    <main>
      {/* Booking Button */}
      <div className="w-full h-full flex justify-end ml-8 mt-6 ">
        <div
    className="flex justify-between rounded-full bg-gradient-to-br from-accent1/20 to-accent1/10 
                        group transition-all duration-500 relative"
  >
    <div className="h-full flex justify-between p-4">
      <a
        href="https://eveeno.com/de/event-cal/34263?style=grid"
        className="w-full h-full inline-flex items-center px-6 py-1 font-semibold text-sm lg:text-base rounded-full shadow-lg lg:leading-tight 
                              bg-gradient-to-r from-accent1 to-accent1/80 text-white border-4 border-accent1  group-hover:border-text/10 hover:text-text/40 
                              group-hover:shadow-xl group-hover:scale-105   transform transition-all duration-500 "
      >
        <svg
          className="w-8 aspect-square mr-3 group-hover:scale-110 transition-transform duration-300"
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
        Tour <br /> buchen
      </a>
      <div
        className="absolute top-0 right-0 w-1/2 h-full inline-flex items-center justify-end pr-6 opacity-0 group-hover:opacity-100 p-2
                              text-text/60 font-semibold text-xs md:text-base md:leading-tight rounded-full 
                              hover:from-accent1/90 hover:to-accent1/70 transform hover:scale-105 transition-all group-hover:delay-100 duration-300"
      >
        <a
          href="/gruppen"
          className="w-full h-full inline-flex items-center justify-end 
                               transform hover:text-text/80 hover:scale-105 hover:pr-0 transition-all duration-500"
        >
          Auch für
          <br /> Gruppen
          <svg
            className=" w-4 md:w-7 aspect-square ml-4 "
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
    <a
      href="/gruppen"
      className="hidden md:inline-flex w-full h-full aspect-square max-h-20 p-1 mt-1 mr-2 group-hover:ml-14 items-center justify-end text-accent1 font-semibold text-sm lg:text-base rounded-full 
                            group-hover:opacity-0 transform hover:scale-105 transition-all duration-300"
    >
      <div className="w-full h-full aspect-square">
        <img
          src={BrigittaHeylPortrait.src}
          alt="Brigitta Heyl"
          className="h-full w-full object-cover object-top rounded-full border-4 border-accent1 shadow-lg"
        />
      </div>
    </a>
  </div>
</div>
</main>
);
};

export default BookingButtonV1;

