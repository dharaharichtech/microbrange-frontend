"use client";

import React from "react";

const MapPage = () => {
  return (
    <main className=" bg-white h-full flex items-center justify-center">
      <div className="w-full  h-[100vh] border border-gray-300 rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609717997!2d72.74109705988341!3d19.08219783987038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63b1e3a1e99%3A0xdea8127d504d85ba!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620325583137!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
};

export default MapPage;
