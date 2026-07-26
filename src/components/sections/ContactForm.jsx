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
    <form onSubmit={handleSubmit} className="space-y-12">
      {[
        { field: "name", label: "Name", type: "text" },
        { field: "location", label: "Location", type: "text" },
        { field: "phone", label: "Phone", type: "tel" },
        { field: "email", label: "Email", type: "email" },
      ].map(({ field, label, type }) => (
        <div key={field}>
          <label
            htmlFor={field}
            className="block text-2xl font-sans text-[#2d2420] mb-4"
          >
            {label}
          </label>

          <input
            id={field}
            type={type}
            value={form[field]}
            onChange={updateField(field)}
            className="w-full bg-transparent border-b border-[#4a3a34]/40 pb-3 focus:outline-none"
          />
        </div>
      ))}

      <div>
        <label
          htmlFor="message"
          className="block text-2xl font-sans text-[#2d2420] mb-4"
        >
          Message
        </label>

        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={updateField("message")}
          className="w-full bg-transparent border-b border-[#4a3a34]/40 pb-3 resize-none focus:outline-none"
        />
      </div>

      <div>
        <p className="text-2xl font-display mb-6">Service type</p>

        <div className="flex flex-wrap gap-3">
          {serviceTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() =>
                setForm((prev) => ({ ...prev, serviceType: type }))
              }
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-widest ${
                form.serviceType === type
                  ? "bg-[#4a3a34] text-white"
                  : "border-[#4a3a34]/30"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="radio"
          checked={form.agree}
          onChange={() => setForm((prev) => ({ ...prev, agree: !prev.agree }))}
          className="h-4 w-4 accent-[#4a3a34]"
        />
        <span className="text-sm text-[#4a3a34]">
          I agree to the processing of my personal data.
        </span>
      </label>

      <button
        type="submit"
        className="w-full sm:w-auto bg-[#8a6f66] text-[#f5f0eb] px-8 py-4 font-mono text-sm uppercase tracking-widest transition-colors hover:bg-[#4a3a34]"
      >
        Schedule A Private Meeting
      </button>
    </form>
  );
}

export default ContactForm;
