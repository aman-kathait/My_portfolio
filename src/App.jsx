import Contact from "./components/contact"
import AboutMe from "./components/AboutMe"
import Education from "./components/Education"
import  {Header}  from "./components/Header"
import Hobbies from "./components/Hobbies"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Extracurricular from "./components/Extracurriculars"

export default function App() {
  return (
    <div className="bg-slate-100 px-3 py-8">
      <div className="bg-white max-w-4xl mx-auto rounded-xl shadow-lg">
        <Header/>
        <AboutMe/>
        <Projects/>
        <Skills/>
        <Education/>
        <Extracurricular/>
        <Hobbies/>
        <Contact/>
      </div>
    </div>
  )
}