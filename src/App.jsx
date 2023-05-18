import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import LayoutPage from "./pages/LayoutPage";
import { useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="new-layout/:token" element={<LayoutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
