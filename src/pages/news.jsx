import Navbar from "../components/Navbar";
import Appointment from "../components/Appointment";
import Footer from "../components/footer";
import NewsDetails from "./NewsDetails";
import { useState } from "react";
import { Link } from "react-router-dom";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
function News() {

  const news = [
    {
      source: "India Today",
      date: "feb 2,2025",
      title: "How Cancer is growing snow in children ?",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text.",
      image: one,
    },

    {
      source: "India Today",
      date: "feb 2,2025",
      title: "How Cancer is growing now in children ?",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text.",
      image: two,
    },

    {
      source: "India Today",
      date: "feb 2,2025",
      title: "How Cancer is growing now in children ?",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text.",
      image:three,
    },
  ];

  return (
    <>
    <Navbar/>
    <section className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900">
          On News
        </h1>


        {/* News List */}
        <div className="mx-auto mt-8 max-w-5xl space-y-5">

          {news.map((article, index) => (

            <div
              key={`${article.title}-${index}`}
              className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm sm:flex-row"
            >

              {/* Image */}
              <img
                src={article.image}
                alt={article.title}
                className="h-58 w-full object-cover sm:h-45 sm:w-48"
              />


              {/* Article Information */}
              <div className="min-w-0 flex-1 p-4">

                {/* Source + Date */}
                <div className="flex flex-wrap gap-2">

                  <span className="rounded-full bg-black px-3 py-1 text-[10px] text-white">
                    {article.source}
                  </span>

                  <span className="rounded-full bg-black px-3 py-1 text-[10px] text-white">
                    {article.date}
                  </span>

                </div>


                {/* Title */}
                <h2 className="mt-3 text-lg font-bold text-gray-900">
                  {article.title}
                </h2>


                {/* Description */}
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-600">
                  {article.description}
                </p>


                {/* Read More */}
                <div className="mt-4 flex justify-end">
                
                  <Link
                    to="/news-details"
                    className="rounded-lg bg-health-green px-5 py-2 text-xs font-semibold text-white transition hover:opacity-90"
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

          <button className="rounded-lg bg-health-green px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">
            View More
          </button>

        </div>

      </div>

    </section>
    <Appointment/>
    <Footer/>
    </>
  );
}

export default News;