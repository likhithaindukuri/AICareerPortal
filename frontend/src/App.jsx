import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import ATSMatcher from "./pages/tools/ATSMatcher";
import ATSResult from "./pages/tools/ATSResult";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/tools/ats" element={<ATSMatcher />} />
          <Route path="/tools/ats/result" element={<ATSResult />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
