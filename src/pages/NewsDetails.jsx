import Navbar from "../components/Navbar";
import Appointment from "../components/Appointment";
import Footer from "../components/footer";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg"
import three from "../assets/three.jpg"
function NewsDetails() {
const moreNews = [
  {
    title: "How Cancer is growing now in children ?",
    image: one,
    info:"Contrary to popular belief, Lorem Ipsum is notsimply random text. Contrary to popular beliefLorem Ipsum",
  },

  {
    title: "How Cancer is growing now in children ?",
    info:"Contrary to popular belief, Lorem Ipsum is notsimply random text. Contrary to popular beliefLorem Ipsum",
    image: two,
  },
];
  const article = {
    source: "India Today",
    date: "Feb 2 2025",
    title: "How Cancer is growing now in children ?",
    
    image: three,
  };

  return (
    <>
    <Navbar/>
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-6xl">

        {/* Article Heading */}

        <div className="mb-6">

          <p className="text-xs text-gray-600">
            {article.source} , {article.date}
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            {article.title}
          </h1>

        </div>


        {/* Main Article */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Image */}

          <div className="lg:col-span-1">

            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full rounded-xl object-cover"
            />

          </div>


          {/* Article Text */}

          <div className="lg:col-span-2">

            <p className="text-sm leading-relaxed text-gray-700">
              Cancer is a leading cause of death for children and
              adolescents. The likelihood of surviving a diagnosis
              of childhood cancer depends on the country in which
              the child lives.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              Although childhood cancer cannot generally be prevented
              or identified through screening, most types of childhood
              cancer can be cured with generic medicines and other
              forms of treatment, including surgery and radiotherapy.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              The reasons for lower survival rates include delay in
              diagnosis, inability to obtain an accurate diagnosis,
              inaccessible therapy, abandonment of treatment and
              avoidable relapse.
            </p>


            <h2 className="mt-5 text-xl font-bold text-gray-900">
              Causes
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              Cancer occurs in people of all ages and can affect any
              part of the body. It begins with genetic change in
              single cells that can then grow into a mass or tumour.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              Unlike cancer in adults, most childhood cancers do not
              have a known cause. Very few cancers in children are
              caused by environmental or lifestyle factors.
            </p>

          </div>

        </div>

      </div>

    </section>
    <div className="mt-14">

  <h2 className="text-xl font-bold px-4 sm:px-6 lg:px-8 text-gray-900">
    More On News
  </h2>

    </div>
    <div className="mt-5 grid grid-cols-1 gap-5 px-4 py-12 sm:px-6 lg:px-8 gap-4 md:grid-cols-2">

  {moreNews.map((item, index) => (

    <div
      key={`${item.title}-${index}`}
      className="flex overflow-hidden rounded-xl bg-white shadow-sm"
    >

      <img
        src={item.image}
        alt={item.title}
        className="h-36 w-40 shrink-0 object-cover"
      />

      <div className="flex min-w-0 flex-1  flex-col p-3">

        <div className="flex gap-2">

          <span className="rounded-full bg-black px-2 py-1 text-[9px] text-white">
            India Today
          </span>

          <span className="rounded-full bg-black px-2 py-1 text-[9px] text-white">
            feb 2,2025
          </span>

        </div>

        <h3 className="mt-2 text-sm font-bold text-gray-900">
          {item.title}
        </h3>
        <p className="mt-2 text-sm  text-gray-900">
          {item.info}
        </p>
        <div className="mt-auto flex justify-end">
          
          <button className="rounded-md bg-health-green px-4 py-1.5 text-[10px] font-semibold text-white">
            Read More
          </button>

        </div>

      </div>

    </div>

  ))}

    </div>
    <Appointment/>
    <Footer/>
    </>
  );
}

export default NewsDetails;