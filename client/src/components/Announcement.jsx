
import React from 'react';
import Marquee from "react-fast-marquee";

const Announcement = () => {
  return (
    <div className="bg-black text-white dark:bg-white dark:text-black py-4 text-sm font-bold font-sans">
      <Marquee>
        <div className="flex items-center mx-8">
          <span className="mr-20">¿No encontras la fragancia que buscas? Contactate con nosotros al +54 343 651573</span>
          <span className="mr-20">Hacemos envios a todo el Pais.</span>
          <span className="mr-20">Descuentos pagando por efectivo/transferencia.</span>
        </div>
      </Marquee>
    </div>
  )
}

export default Announcement;
