import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
function PressRelease() {
  const releases = [
    {
      source: "India Today",
      date: "Feb 2, 2025",
      title: "How Cancer is growing now in children?",
      description:
        "Contrary to popular belief, Lorem ipsum is not simply random text.",
      image: one,
    },

    {
      source: "India Today",
      date: "Feb 2, 2025",
      title: "How Cancer is growing now in children?",
      description:
        "Contrary to popular belief, Lorem ipsum is not simply random text.",
      image: two,
    },

    {
      source: "India Today",
      date: "Feb 2, 2025",
      title: "How Cancer is growing now in children?",
      description:
        "Contrary to popular belief, Lorem ipsum is not simply random text.",
      image:three,
    },
  ];

  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="relative text-center">

          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Press -Release
          </h2>

          <a
            href="#"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-health-green hover:underline"
          >
            View All
          </a>

        </div>

        {/* Press Release Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">

          {releases.map((release, index) => (

            <div
              key={`${release.title}-${index}`}
              className="overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              {/* Image */}
              <div className="relative">

                <img
                  src={release.image}
                  alt={release.title}
                  className="h-44 w-full object-cover"
                />

                {/* Source + Date */}
                <div className="absolute bottom-2 left-2 flex gap-2">

                  <span className="rounded-full bg-black px-2 py-1 text-[9px] text-white">
                    {release.source}
                  </span>

                  <span className="rounded-full bg-black px-2 py-1 text-[9px] text-white">
                    {release.date}
                  </span>

                </div>

              </div>

              {/* Content */}
              <div className="p-4">

                <h3 className="text-sm font-bold text-gray-900">
                  {release.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-600">
                  {release.description}
                </p>

                {/* Button */}
                <div className="mt-3 text-right">

                  <button className="rounded-md bg-health-green px-3 py-1.5 text-[10px] font-semibold text-white hover:opacity-90">
                    Read More
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default PressRelease;