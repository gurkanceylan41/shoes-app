import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Detail from "./pages/detail";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray px-4 md:px-8 lg:px-12 xl:px-14 py-[32px]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
