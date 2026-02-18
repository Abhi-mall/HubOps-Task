import React from "react";

function ServiceCard({ service }) {
  return (
    <div className="bg-white   shadow-md rounded-xl p-6 hover:shadow-lg ">
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

      <p className="text-gray-600 mb-4">{service.description}</p>

      <button className="bg-green-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-green-700 transition">
        Learn More
      </button>
    </div>
  );
}

export default ServiceCard;
