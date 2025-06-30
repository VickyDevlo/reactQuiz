import {
  BookText,
  Home, 
  ListTodo, 
  Timer,
} from "lucide-react";

export const sidebarData = [
  {
    icon: Home,
    name: "Quiz",
    path: "/",
  },
  {
    icon: BookText,
    name: "Inline Edit",
    path: "/inline-edit",
  },
  {
    icon: Timer,
    name: "Counter",
    path: "/counter",
  },
  {
    icon: ListTodo,
    name: "Task-Tracker",
    path: "/task-tracker",
  },
];

export const reactQuizData = [
  {
    question: "What is the purpose of React's `key` prop in lists?",
    options: [
      "To identify which items have changed, are added, or are removed",
      "To encrypt data in the component",
      "To style each list item uniquely",
      "To track prop changes",
    ],
    answer: "To identify which items have changed, are added, or are removed",
  },
  {
    question: "What does the `useMemo` hook do?",
    options: [
      "Caches functions to prevent re-declaration",
      "Memorizes the JSX output to avoid re-rendering",
      "Memoizes a computed value to avoid expensive recalculations",
      "Stores values in local storage",
    ],
    answer: "Memoizes a computed value to avoid expensive recalculations",
  },
  {
    question: "How does React's Context API help in state management?",
    options: [
      "By providing a global state object",
      "By avoiding prop drilling through component trees",
      "By replacing Redux completely",
      "By creating a virtual DOM",
    ],
    answer: "By avoiding prop drilling through component trees",
  },
  {
    question: "Which of the following best describes `useCallback`?",
    options: [
      "A hook that executes code after every render",
      "A hook that prevents unnecessary recreation of functions",
      "A hook for asynchronous operations",
      "A hook that merges multiple reducers",
    ],
    answer: "A hook that prevents unnecessary recreation of functions",
  },
  {
    question:
      "What happens if you update state inside a `useEffect` without a dependency array?",
    options: [
      "The effect will only run once",
      "The component will crash",
      "The effect will run indefinitely causing a loop",
      "The state won't update",
    ],
    answer: "The effect will run indefinitely causing a loop",
  },
  {
    question: "What is the default behavior of `React.memo`?",
    options: [
      "It re-renders the component on every prop change",
      "It skips re-rendering unless props have changed",
      "It memoizes state updates",
      "It replaces `useMemo` for components",
    ],
    answer: "It skips re-rendering unless props have changed",
  },
  {
    question: "Why should you avoid using index as key in lists?",
    options: [
      "It causes memory leaks",
      "It doesn't update the UI at all",
      "It can cause issues with component state and performance",
      "It is not supported in React 18",
    ],
    answer: "It can cause issues with component state and performance",
  },
  {
    question: "What is React's Reconciliation process?",
    options: [
      "Comparing current DOM to updated DOM and syncing differences",
      "Storing app state between renders",
      "Optimizing server-side rendering",
      "Configuring lazy loading of components",
    ],
    answer: "Comparing current DOM to updated DOM and syncing differences",
  },
  {
    question:
      "Which hook is best suited for subscribing to a data stream like WebSocket?",
    options: ["useReducer", "useEffect", "useLayoutEffect", "useMemo"],
    answer: "useEffect",
  },
  {
    question:
      "What is the difference between `useEffect` and `useLayoutEffect`?",
    options: [
      "useLayoutEffect runs after paint, useEffect before paint",
      "useLayoutEffect runs synchronously after DOM mutations, useEffect runs asynchronously after paint",
      "There is no difference",
      "useLayoutEffect is only used in server-side rendering",
    ],
    answer:
      "useLayoutEffect runs synchronously after DOM mutations, useEffect runs asynchronously after paint",
  },
];
