import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technology from "./components/Technology";
import Certificate from "./components/Certificate";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Internships from "./components/Internships";
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
    <div className="relative min-h-screen w-full bg-neutral-900">
      <div className="absolute inset-0 bg-fuchsia-200 bg-[size:20px_20px] opacity-20 blur-[100px]  pointer-events-none"></div>
      <div className="container mx-auto ">
        <Navbar />
        <Hero />
        <About/>
        <Technology/>
        <Certificate/>
        <Projects/>
        <Internships/>
        <Contacts/>
      </div>
      </div>
    </div>
  );
};

export default App;
