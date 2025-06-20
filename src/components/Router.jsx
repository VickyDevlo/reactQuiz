import { Route, Routes } from "react-router-dom";
import Quiz from "@/Pages/Quiz";
import { InlineEditable } from "./InlineEditable";
import CountDownTimer from "./CountDownTimer";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Quiz />} />
      <Route path="/inline-edit" element={<InlineEditable/>} />
      <Route path="/counter" element={<CountDownTimer />} />
    </Routes>
  );
};

export default Router;
