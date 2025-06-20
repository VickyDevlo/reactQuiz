import { Contact, Home, InfoIcon, ShieldQuestion, Wrench } from "lucide-react";

export const sidebarData = [
  {
    icon: Home,
    name: "Home",
    path: "/",
  },
  {
    icon: ShieldQuestion,
    name: "React Quiz",
    path: "/quiz",
  },
  {
    icon: InfoIcon,
    name: "About",
    path: "/about",
  },
  {
    icon: Contact,
    name: "Contact",
    path: "/contact",
    meta: {
      address: "abc",
    },
  },
];

export const reactQuizData = [
  {
    question: "What is the primary purpose of React?",
    options: [
      "To style web pages",
      "To manage databases",
      "To build user interfaces",
      "To handle HTTP requests",
    ],
    answer: "To build user interfaces",
  },
  {
    question: "Which hook is used to manage state in a functional component?",
    options: ["useRef", "useEffect", "useState", "useContext"],
    answer: "useState",
  },
  {
    question: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "Java Standard Extension",
      "JSON eXtended Syntax",
      "Java Syntax Extension",
    ],
    answer: "JavaScript XML",
  },
  {
    question: "Which method is used to lift state up to a parent component?",
    options: [
      "State delegation",
      "Prop drilling",
      "Callback functions",
      "useReducer",
    ],
    answer: "Callback functions",
  },
];
