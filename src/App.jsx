import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/about";
import Events from "./pages/event";
import News from "./pages/news";
import NewsDetails from "./pages/NewsDetails";
import Blogs from "./pages/blogs";
import BlogDetails from "./pages/BlogDetails";
import PressRelease from "./pages/press-realese";
import Testimonials from "./pages/testimonial";
import Contact from "./pages/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/event" element={<Events />} />
      <Route path="/news" element={<News />} />
      <Route path="/news-details" element={<NewsDetails />} />

      <Route path="/blog" element={<Blogs />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="press" element={<PressRelease/>}/>
       <Route path="/testimonial" element={<Testimonials/>}/>
       <Route path="/contact" element={<Contact/>}/>  

    </Routes>
  );
}

export default App;