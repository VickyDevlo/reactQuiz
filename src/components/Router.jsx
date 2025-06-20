import { Route, Routes } from "react-router-dom";
import About from "@/Pages/About";
import Contact from "@/Pages/Contact";
import Home from "@/Pages/Home";
import Quiz from "@/Pages/Quiz";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
};

export default Router;
