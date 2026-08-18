import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
function Blogs() {
  const blogs = [
    {
      date: "Feb 02, 2025",
      title: "How Cancer is growing in children?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      image: one,
    },

    {
      date: "Feb 02, 2025",
      title: "How Cancer is growing in children?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: two,
    },

    {
      date: "Feb 02, 2025",
      title: "How Cancer is growing in children?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: three,
    },

    {
      date: "Feb 02, 2025",
      title: "How Cancer is growing in children?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: four,
    },

    {
      date: "Feb 02, 2025",
      title: "How Cancer is growing in children?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: two,
    },

    {
      date: "Feb 02, 2025",
      title: "How Cancer is growing in children?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: one,
    },
  ];

  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="relative text-center">

          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Blogs
          </h2>

          <a
            href="#"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-health-green hover:underline"
          >
            View All
          </a>

        </div>

        {/* Blog Layout */}
        <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">

          {/* Featured Blog */}
          <div className="group relative overflow-hidden rounded-lg md:col-span-2">

            <img
              src={blogs[0].image}
              alt={blogs[0].title}
              className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">

              <p className="text-xs text-white">
                {blogs[0].date}
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                {blogs[0].title}
              </h3>

              <p className="mt-1 max-w-xl line-clamp-2 text-xs text-white">
                {blogs[0].description}
              </p>

            </div>

            <button className="absolute bottom-5 right-5 rounded-md bg-health-green px-3 py-1.5 text-[10px] font-semibold text-white hover:opacity-90">
              Read More
            </button>

          </div>

          {/* Right Blog */}
          <div className="group relative overflow-hidden rounded-lg">

            <img
              src={blogs[1].image}
              alt={blogs[1].title}
              className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">

              <p className="text-[9px]">
                {blogs[1].date}
              </p>

              <h3 className="mt-1 text-sm font-bold">
                {blogs[1].title}
              </h3>

            </div>

          </div>

          {/* Bottom Four Blogs */}
          <div className="grid grid-cols-2 gap-3 md:col-span-3 md:grid-cols-4">

            {blogs.slice(2).map((blog, index) => (
              <div
                key={`${blog.title}-${index}`}
                className="group relative overflow-hidden rounded-lg"
              >

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-36 w-full object-cover transition duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white">

                  <p className="text-[9px]">
                    {blog.date}
                  </p>

                  <h3 className="mt-1 text-xs font-semibold">
                    {blog.title}
                  </h3>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Blogs;