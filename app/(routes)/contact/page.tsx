import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-between p-12">
      <div className="w-1/2 p-4">
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Your Name" className="border p-2" />
          <input type="email" placeholder="Your Email" className="border p-2" />
          <input type="email" placeholder="Your Email" className="border p-2" />

          <textarea
            placeholder="Your Subject"
            className="border p-2 h-24"></textarea>
          <button
            type="submit"
            className="bg-orange-500 w-fit text-white py-2 px-4 hover:bg-black transition-colors duration-200 ease-in-out">
            Send message
          </button>
        </form>
      </div>
      <div className="w-1/2">
        {/* Embedding Google Maps would require an iframe or using the Google Maps API */}
        {/* This is just a placeholder */}
        <div className="h-full flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.171216598193!2d31.09448257497087!3d-17.830606883134074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931bbe4c7e8bef9%3A0xff312419ac55e877!2sRaysun%20Capital!5e0!3m2!1sen!2szw!4v1724938536642!5m2!1sen!2szw"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
