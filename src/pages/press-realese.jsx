import Navbar from "../components/Navbar";
import Appointment from "../components/Appointment";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
function PressRelease() {
  const pressReleases = [
    {
      id: 1,
      source: "India Today",
      date: "Feb 2, 2025",
      title: "How Cancer is growinsg now in children ?",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots....",
      image: one,
    },

    {
      id: 2,
      source: "India Today",
      date: "Feb 2, 2025",
      title: "How Cancer is growing now in children ?",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots....",
      image: two,
    },

    {
      id: 3,
      source: "India Today",
      date: "Feb 2, 2025",
      title: "How Cancer is growing now in children ?",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots....",
      image: three,
    },

    {
      id: 4,
      source: "India Today",
      date: "Feb 2, 2025",
      title: "How Cancer is growing now in children ?",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots....",
      image: four,
    },

    {
      id: 5,
      source: "India Today",
      date: "Feb 2, 2025",
      title: "How Cancer is growing now in children ?",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots....",
      image: one,
    },

    {
      id: 6,
      source: "India Today",
      date: "Feb 2, 2025",
      title: "How Cancer is growing now in children ?",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots....",
      image: two,
    },
  ];

  return (
    <>
      <Navbar />

      {/* ================= PRESS RELEASE ================= */}
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">

          {/* Heading */}
          <h1 className="text-3xl font-semibold text-gray-900">
            Press Release
          </h1>

          {/* Cards */}
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pressReleases.map((press) => (
              <div
                key={press.id}
                className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={press.image}
                    alt={press.title}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />

                  {/* Badges */}
                  <div className="absolute bottom-2 left-2 flex gap-2">
                    <span className="rounded-full bg-black px-3 py-1 text-[10px] text-white">
                      {press.source}
                    </span>

                    <span className="rounded-full bg-black px-3 py-1 text-[10px] text-white">
                      {press.date}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold leading-tight text-gray-900">
                    {press.title}
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-gray-600">
                    {press.description}
                  </p>

                  {/* Read More */}
                  <div className="mt-4 flex justify-end">
                    <Link
                      to={`/press-release/${press.id}`}
                      className="rounded-lg bg-health-green px-5 py-2 text-xs font-medium text-white transition hover:opacity-90"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="mt-8 flex justify-center">
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

export default PressRelease;