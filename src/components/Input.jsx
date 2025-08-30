import React from "react";

export default function Input({ id, label, placeholder, type = "text" }) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-white">
        {label}
      </label>
      {type !== "textarea" ? (
        <input
          type={type}
          id={id}
          className="bg-[#282828] text-white text-sm rounded-xl block w-full p-2.5"
          name={id}
          placeholder={placeholder}
          required
        />
      ) : (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          rows="4"
          className="block p-2.5 w-full text-sm bg-[#282828] text-white rounded-xl"
          required
        ></textarea>
      )}
    </div>
  );
}
