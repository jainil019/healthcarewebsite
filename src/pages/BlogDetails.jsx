import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Appointment from "../components/Appointment";
import Footer from "../components/footer";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
const blogs = [
  {
    id: 1,
    date: "Feb 2, 2025",
    title:"How Cancer is growing now in children ?",
    image:one,
    content: `Cancer is a leading cause of death for children and adolescents. The likelihood of surviving a diagnosis of childhood cancer depends on the country in which the child lives; in high-income countries, more than 80% of children with cancer are cured, but in many LMICs less than 30% are cured.

Although childhood cancer cannot generally be prevented or identified through screening, most types of childhood cancer can be cured with generic medicines and other forms of treatment, including surgery and radiotherapy.

The reasons for lower survival rates in LMICs include delay in diagnosis, an inability to obtain an accurate diagnosis, inaccessible therapy, abandonment of treatment, death from toxicity and avoidable relapse. Improving access to childhood cancer care, including to essential medicines and technologies, is highly cost-effective, feasible and can improve survival in all income settings.

Childhood cancer data systems are needed to drive continuous improvements in the quality of care, and to inform policy decisions.`,
    causes: `Cancer occurs in people of all ages and can affect any part of the body. It begins with genetic change in single cells, that can then grow into a mass (or tumour), invade other parts of the body and cause harm and death if left untreated. Unlike cancer in adults, most childhood cancers do not have a known cause.

Many studies have sought to identify the causes of childhood cancer, but very few cancers in children are caused by environmental or lifestyle factors. Cancer prevention efforts in children should focus on behaviours that will prevent the child from developing preventable cancer as an adult.`,
  },

  {
    id: 2,
    date: "Feb 2, 2025",
    title: "How Cancer is growing now in children ?",
    image: two,
    content:
      "Cancer awareness and early diagnosis can play an important role in improving outcomes for children. Access to proper diagnosis and treatment is essential.",
    causes:
      "Early medical attention, proper diagnosis and access to appropriate treatment can help improve outcomes.",
  },

  {
    id: 3,
    date: "Feb 2, 2025",
    title: "How Cancer is growing now in children ?",
    image:three,
    content:
      "Understanding symptoms and seeking medical advice early can help families receive appropriate support and treatment.",
    causes:
      "Healthcare professionals can guide families through diagnosis, treatment and follow-up care.",
  },

  {
    id: 4,
    date: "Feb 2, 2025",
    title: "How Cancer is growing now in children ?",
    image: four,
    content:
      "Healthcare awareness helps families understand important health concerns and seek professional advice when needed.",
    causes:
      "Regular medical guidance and timely care are important parts of maintaining children's health.",
  },
  {
    id: 5,
    date: "Feb 2, 2025",
    title: "How Cancer is growing now in children ?",
    image: one,
    content:
      "Healthcare awareness helps families understand important health concerns and seek professional advice when needed.",
    causes:
      "Regular medical guidance and timely care are important parts of maintaining children's health.",
  },
  {
    id: 6,
    date: "Feb 2, 2025",
    title: "How Cancer is growing now in children ?",
    image: two,
    content:
      "Healthcare awareness helps families understand important health concerns and seek professional advice when needed.",
    causes:
      "Regular medical guidance and timely care are important parts of maintaining children's health.",
  },
];

function BlogDetails() {
  const { id } = useParams();

  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) {
    return (
        <>
        
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-800">
            Blog Not Found
          </h1>

          <Link
            to="/blog"
            className="rounded-lg bg-lime-600 px-6 py-3 text-white transition hover:bg-lime-700"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
      </>
    );
  }

  return (
    <>
    <Navbar/>
    <div className="bg-white">
      {/* ================= BLOG ================= */}
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-[300px] w-full object-cover md:h-[380px]"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Hero text */}
          <div className="absolute bottom-8 left-8 text-white md:bottom-10 md:left-12">
            <p className="mb-2 text-sm font-medium text-lime-300">
              {blog.date}
            </p>

            <h1 className="max-w-3xl text-2xl font-bold md:text-4xl">
              {blog.title}
            </h1>
          </div>
        </div>

        {/* Content + Comment */}
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_300px]">
          {/* Article */}
          <article className="text-[15px] leading-6 text-gray-700">
            <p className="whitespace-pre-line">{blog.content}</p>

            <h2 className="mt-5 mb-2 text-xl font-semibold text-gray-900">
              Causes
            </h2>

            <p className="whitespace-pre-line">{blog.causes}</p>
          </article>

          {/* Comment */}
          <div className="border-l border-gray-300 pl-6">
            <h2 className="mb-5 text-xl font-semibold text-gray-900">
              Write a comment
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full rounded-full border border-gray-300 px-5 py-3 text-sm outline-none focus:border-lime-600"
              />

              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-full border border-gray-300 px-5 py-3 text-sm outline-none focus:border-lime-600"
              />

              <textarea
                rows="6"
                placeholder="Write your comment"
                className="w-full resize-none rounded-2xl border border-gray-300 px-5 py-4 text-sm outline-none focus:border-lime-600"
              />

              <button
                type="submit"
                className="float-right rounded-lg bg-lime-600 px-7 py-3 text-sm font-medium text-white transition hover:bg-lime-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* ================= MORE BLOGS ================= */}
        <div className="mt-20">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900">
            More Blogs
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {blogs
              .filter((item) => item.id !== blog.id)
              .slice(0, 4)
              .map((item) => (
                <Link
                  key={item.id}
                  to={`/blog/${item.id}`}
                  className="group relative h-52 overflow-hidden rounded-xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <h3 className="absolute bottom-5 left-4 right-4 text-lg font-medium text-white">
                    {item.title}
                  </h3>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ================= APPOINTMENT ================= */}
     
            <Appointment/>  
      {/* ================= FOOTER ================= */}
     <Footer/>
    </div>
    </>
  );
}

export default BlogDetails;