import { Route, Routes } from "react-router-dom";
import About from "@/Pages/About";
import Contact from "@/Pages/Contact";
import Quiz from "@/Pages/Quiz";
import Pagination from "./Pagination";
import CustomForm from "./CustomForm";
import { InlineEditable } from "./InlineEditable";
import CountDownTimer from "./CountDownTimer";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Quiz />} />
      <Route path="/pagination" element={<Pagination />} />
      <Route path="/inline-edit" element={<InlineEditable/>} />
      <Route path="/counter" element={<CountDownTimer />} />
    </Routes>
  );
};

export default Router;
