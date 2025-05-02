import React, { useState } from "react";

const testimonials = [
    {
      id: 1,
      text: `They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.`,
      name: "Michael Kaizer",
      title: "CEO of Basecamp Corp",
      avatar: "",
    },
    {
      id: 2,
      text: `Working with them was seamless. They understood our vision, executed it perfectly, and delivered ahead of schedule. Highly recommended!`,
      name: "Sarah Lin",
      title: "Founder of NovaTech",
      avatar: "",
    },
    {
      id: 3,
      text: `Their team was incredibly responsive and talented. The design and UX exceeded our expectations. Will definitely collaborate again.`,
      name: "David Chen",
      title: "Product Manager at Zephyr",
      avatar: "",
    },
    {
      id: 4,
      text: `Professional, creative, and effective — the results speak for themselves. Our engagement rates and brand presence skyrocketed.`,
      name: "Lisa Romero",
      title: "Marketing Lead at Solstice",
      avatar: "",
    },
    {
      id: 5,
      text: `From kickoff to delivery, the process was smooth and collaborative. We appreciated their attention to detail and strategic thinking.`,
      name: "Tom Anders",
      title: "COO of Brightside",
      avatar: "",
    },
  ];
  

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const next = () => setCurrent((prev) => (prev + 1) % total);

  const testimonial = testimonials[current];

  return (
    <div className="max-w-7xl mx-auto my-[100px] max-sm:px-2 max-lg:px-3">
      <div className="text-4xl max-sm:text-3xl font-light text-gray-900 mb-8 leading-relaxed">
        <span className="text-4xl max-sm:text-3xl  font-serif font-semibold">“</span>
        {testimonial.text}
        <span className="text-5xl max-sm:text-3xl font-serif">”</span>
      </div>

      <div className="flex items-center justify-between mt-6">
        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-300" />
          <div>
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.title}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-blue-400 text-blue-500 flex items-center justify-center"
          >
            ←
          </button>
          <span className="text-sm text-gray-500">
            {String(current + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
          </span>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

