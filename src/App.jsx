import Home from "./Pages/Home";
import Learn from "./Pages/Learn"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import FAQ from "./Pages/FAQ"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Learn" element={<Learn />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="About" element={<About />} />
          <Route path="FAQ" element={<FAQ />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
