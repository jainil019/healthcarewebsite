function Testimonials() {
  const testimonials = [
    {
      name: "Mary Wiley",
      role: "New Developer",
      image: "/images/user-1.jpg",
      message:
        "There are many variations of Lorem ipsum available, but the majority have suffered alteration in some form.",
    },

    {
      name: "Mary Wiley",
      role: "New Developer",
      image: "/images/user-2.jpg",
      message:
        "There are many variations of Lorem ipsum available, but the majority have suffered alteration in some form.",
    },

    {
      name: "Mary Wiley",
      role: "New Developer",
      image: "/images/user-3.jpg",
      message:
        "There are many variations of Lorem ipsum available, but the majority have suffered alteration in some form.",
    },
  ];

  return (
    <section className="bg-black px-4 py-12 text-white sm:px-6 lg:px-8">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="relative text-center">

          <h2 className="text-2xl font-semibold sm:text-3xl">
            Our Testimonial
          </h2>

          <a
            href="#"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-white hover:underline"
          >
            View All
          </a>

        </div>

        {/* Testimonials */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">

          {testimonials.map((testimonial, index) => (

            <div key={`${testimonial.name}-${index}`}>

              {/* User */}
              <div className="flex items-center gap-3">

                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full object-cover"
                />

                <div>

                  <h3 className="text-sm font-semibold">
                    {testimonial.name}
                  </h3>

                  <p className="text-xs text-gray-400">
                    {testimonial.role}
                  </p>

                </div>

              </div>

              {/* Message */}
              <p className="mt-4 text-xs leading-relaxed text-gray-300">
                {testimonial.message}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;