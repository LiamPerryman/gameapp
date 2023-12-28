import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import TicTacToe from "./pages/TicTacToe";
import AppLayout from "./pages/AppLayout";

function App() {
  const [count, setcount] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="tic-tac-toe" element={<TicTacToe />} />
          <Route path="*" element={<PageNotFound />} />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
