import Router from "./components/Router";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <Router />
        </main>
      </div>
    </>
  );
}

export default App;
