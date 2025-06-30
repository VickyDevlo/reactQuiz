import Router from "./components/Router";
import Sidebar from "./components/Sidebar";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <Router />
        </main>
      </div>
      <Toaster />
    </>
  );
}

export default App;
