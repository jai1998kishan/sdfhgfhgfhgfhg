import React, { useState } from "react";

const serviceTypes = ["Architecture", "Interior Design", "Renovation"];

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    location: "",
    phone: "",
    email: "",
    message: "",
    serviceType: "Architecture",
    agree: false,
  });

  const updateField = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Consultation request:", form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 md:space-y-8">
      {[
        { field: "name", label: "Name", type: "text" },
        { field: "location", label: "Location", type: "text" },
        { field: "phone", label: "Phone", type: "tel" },
        { field: "email", label: "Email", type: "email" },
      ].map(({ field, label, type }) => (
        <div key={field}>
          <label
            htmlFor={field}
            className="block text-sm md:text-lg font-sans text-[#2d2420] mb-1.5 md:mb-3"
          >
            {label}
          </label>

          <input
            id={field}
            type={type}
            value={form[field]}
            onChange={updateField(field)}
            className="w-full bg-transparent border-b border-[#4a3a34]/40 pb-2 md:pb-3 focus:outline-none"
          />
        </div>
      ))}

      <div>
        <label
          htmlFor="message"
          className="block text-sm md:text-lg font-sans text-[#2d2420] mb-1.5 md:mb-3"
        >
          Message
        </label>

        <textarea
          id="message"
          rows={3}
          value={form.message}
          onChange={updateField("message")}
          className="w-full bg-transparent border-b border-[#4a3a34]/40 pb-2 md:pb-3 resize-none focus:outline-none md:min-h-[7rem]"
        />
      </div>

      <div>
        <p className="text-sm md:text-xl font-semibold text-black mb-2.5 md:mb-4">
          Service type
        </p>

        <div className="flex flex-wrap gap-2 md:gap-3">
          {serviceTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() =>
                setForm((prev) => ({ ...prev, serviceType: type }))
              }
              className={`rounded-full border px-3.5 py-1.5 md:px-5 md:py-2 text-[11px] md:text-xs uppercase tracking-widest ${
                form.serviceType === type
                  ? "bg-[#4a3a34] text-white border-[#4a3a34]"
                  : "border-[#4a3a34]/30 text-[#2d2420]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <label className="flex items-start gap-2.5 md:gap-3 cursor-pointer">
        <input
          type="radio"
          checked={form.agree}
          onChange={() => setForm((prev) => ({ ...prev, agree: !prev.agree }))}
          className="mt-0.5 h-3.5 w-3.5 md:h-4 md:w-4 accent-[#4a3a34]"
        />
        <span className="text-xs md:text-sm leading-snug text-[#4a3a34]">
          I agree to the processing of my personal data.
        </span>
      </label>

      <button
        type="submit"
        className="w-full sm:w-auto bg-[#755d55] text-[#f5f0eb] px-6 py-3 md:px-8 md:py-4 font-mono text-xs md:text-sm uppercase tracking-widest transition-colors hover:bg-[#4a3a34]"
      >
        Schedule A Private Meeting
      </button>
    </form>
  );
}

export default ContactForm;
