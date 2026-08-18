import Navbar from "../components/Navbar";
import Appointment from "../components/Appointment";
import Footer from "../components/footer";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Mary Wiley",
      role: "Web Developer",
      image: one,
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle.",
    },

    {
      id: 2,
      name: "Mary Wiley",
      role: "Web Developer",
      image: two,
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle.",
    },

    {
      id: 3,
      name: "Mary Wiley",
      role: "Web Developer",
      image: three,
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Testimonials */}
      <section className="bg-white px-5 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">

          <h1 className="text-3xl font-semibold text-gray-900">
            Our Testimonial
          </h1>

          <div className="mt-10 space-y-5">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="grid items-center gap-5 md:grid-cols-[245px_1fr]"
              >
                {/* Image */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-36 w-full rounded-xl object-cover"
                />

                {/* Content */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {testimonial.name}
                  </h2>

                  <p className="mt-1 text-sm text-gray-700">
                    {testimonial.role}
                  </p>

                  <p className="mt-5 text-sm leading-6 text-gray-700">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="mt-10 flex justify-center">
            <button className="rounded-lg bg-health-green px-7 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">
              View More
            </button>
          </div>

        </div>
      </section>

      <Appointment />

      <Footer />
    </>
  );
}

export default Testimonials;