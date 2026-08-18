import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";


function News() {
  const news = [
    {
      source: "India Today",
      date: "Feb 2, 2025",
      title: "How Cancer is growing now in children ?",
      description:
        "Contrary to popular belief, Lorem ipsum is not simply random text. Contrary to popular belief, Lorem ipsum is not simply random text.",
      image: one,
    },

    {
      source: "India Today",
      date: "Feb 2, 2025",
      title: "How Cancer is growing now in children ?",
      description:
        "Contrary to popular belief, Lorem ipsum is not simply random text. Contrary to popular belief, Lorem ipsum is not simply random text.",
      image: two,
    },

    {
      source: "India Today",
      date: "Feb 2, 2025",
      title: "How Cancer is growing now in children ?",
      description:
        "Contrary to popular belief, Lorem ipsum is not simply random text. Contrary to popular belief, Lorem ipsum is not simply random text.",
      image:three,
    },
  ];

  return (
    <section className="bg-[#c5d9f1] px-4 py-12 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="relative text-center">

          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            On News
          </h2>

          <a
            href="#"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-health-green hover:underline"
          >
            View All
          </a>

        </div>

        {/* News List */}
        <div className="mx-auto mt-8 max-w-4xl space-y-3">

          {news.map((article, index) => (
            <div
              key={`${article.title}-${index}`}
              className="flex flex-col gap-4 rounded-lg bg-white p-3 shadow-sm sm:flex-row sm:items-center"
            >

              {/* Image */}
              <img
              src={article.image}
              alt={article.title}
              className="h-24 w-full rounded-md object-cover sm:h-24 sm:w-40"
            />

              {/* Article Information */}
              <div className="min-w-0 flex-1">

                {/* Source + Date */}
                <div className="flex flex-wrap gap-2">

                  <span className="rounded-full bg-black px-2 py-1 text-[9px] text-white">
                    {article.source}
                  </span>

                  <span className="rounded-full bg-black px-2 py-1 text-[9px] text-white">
                    {article.date}
                  </span>

                </div>

                {/* Title */}
                <h3 className="mt-2 text-sm font-bold text-gray-900">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="mt-1 line-clamp-2 text-[10px] leading-relaxed text-gray-600">
                  {article.description}
                </p>

              </div>

              {/* Read More */}
              <button className="shrink-0 rounded-md bg-health-green px-4 py-2 text-[10px] font-medium text-white hover:opacity-90">
                Read More
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default News;