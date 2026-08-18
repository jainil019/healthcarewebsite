import Navbar from "../components/Navbar";
import Appointment from "../components/Appointment";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";


function Blogs() {
    const blogs = [
  {
    id: 1,
    date: "Feb 02, 2025",
    title: "How Cancer is growing now in children ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    image:one,
    content: `Cancer is a leading cause of death for children and adolescents. The likelihood of surviving a diagnosis of childhood cancer depends on the country in which the child lives; in high-income countries, more than 80% of children with cancer are cured, but in many LMICs less than 30% are cured.

Although childhood cancer cannot generally be prevented or identified through screening, most types of childhood cancer can be cured with generic medicines and other forms of treatment, including surgery and radiotherapy.

The reasons for lower survival rates in LMICs include delay in diagnosis, an inability to obtain an accurate diagnosis, inaccessible therapy, abandonment of treatment, death from toxicity and avoidable relapse.`,
    causes:
      "Cancer occurs in people of all ages and can affect any part of the body. It begins with genetic change in single cells, that can then grow into a mass (or tumour), invade other parts of the body and cause harm if left untreated.",
  },

  {
    id: 2,
    date: "Feb 02, 2025",
    title: "How Cancer is growing now in children ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: two,
    content:
      "Cancer awareness and early diagnosis can play an important role in improving outcomes for children.",
    causes:
      "Early diagnosis and appropriate medical care can help improve treatment outcomes.",
  },

  {
    id: 3,
    date: "Feb 02, 2025",
    title: "How Cancer is growing now in children ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: three,
    content:
      "Understanding symptoms and seeking medical advice early can help families receive appropriate support.",
    causes:
      "Healthcare professionals can guide families through diagnosis and treatment.",
  },

  {
    id: 4,
    date: "Feb 02, 2025",
    title: "How Cancer is growing now in children ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:four,
    content:
      "Healthcare awareness helps families understand important health concerns.",
    causes:
      "Timely medical guidance is important for children's health.",
  },

  {
    id: 5,
    date: "Feb 02, 2025",
    title: "How Cancer is growing now in children ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: one,
    content:
      "Modern healthcare and awareness can help families understand health concerns.",
    causes:
      "Professional medical advice should be taken whenever necessary.",
  },

  {
    id: 6,
    date: "Feb 02, 2025",
    title: "How Cancer is growing now in children ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: two,
    content:
      "Health education can help families make informed healthcare decisions.",
    causes:
      "Regular medical guidance can support better health outcomes.",
  },
];


  return (
    <>
      <Navbar />

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">

          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-900">
            Blogs
          </h1>

          {/* Blog Layout */}
          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">

            {/* Featured Blog */}
            <Link
              to={`/blog/${blogs[0].id}`}
              className="group relative overflow-hidden rounded-xl md:col-span-2"
            >
              <img
                src={blogs[0].image}
                alt={blogs[0].title}
                className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">

                <p className="text-xs font-medium text-yellow-300">
                  {blogs[0].date}
                </p>

                <h2 className="mt-1 text-xl font-bold text-white">
                  {blogs[0].title}
                </h2>

                <p className="mt-1 max-w-xl line-clamp-2 text-xs text-white">
                  {blogs[0].description}
                </p>

              </div>

              <span className="absolute bottom-5 right-5 rounded-full bg-health-green px-4 py-2 text-[10px] font-semibold text-white">
                Read More
              </span>
            </Link>

            {/* Right Blog */}
            <Link
              to={`/blog/${blogs[1].id}`}
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={blogs[1].image}
                alt={blogs[1].title}
                className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">

                <h2 className="text-lg font-bold text-white">
                  {blogs[1].title}
                </h2>

              </div>
            </Link>

            {/* Bottom Four Blogs */}
            <div className="grid grid-cols-2 gap-3 md:col-span-3 md:grid-cols-4">

              {blogs.slice(2).map((blog) => (
                <Link
                  key={blog.id}
                  to={`/blog/${blog.id}`}
                  className="group relative overflow-hidden rounded-xl"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">

                    <h3 className="text-sm font-semibold text-white">
                      {blog.title}
                    </h3>

                  </div>
                </Link>
              ))}

            </div>

          </div>

          {/* View More */}
          <div className="mt-8 flex justify-center">
            <Link
              to="/blog/1"
              className="rounded-lg bg-health-green px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90"
            >
              View More
            </Link>
          </div>

        </div>
      </section>

      <Appointment />
      <Footer />
    </>
  );
}

export default Blogs;