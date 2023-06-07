import { Routes, Route } from "react-router";
import { DefaultLayout } from "../components/DefaultLayout";
import { Home } from "../pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
      </Route>
    </Routes>
  );
};

export { Router };
