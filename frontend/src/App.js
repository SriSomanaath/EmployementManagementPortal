import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="App flex flex-col items-center">
      <h1 class="text-5xl font-bold pb-2">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 ">
          Employee Management Portal
        </span>
      </h1>

      <HeroSection />
    </div>
  );
}

export default App;
