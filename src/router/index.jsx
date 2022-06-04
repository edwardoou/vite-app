import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutView, HomeView } from "../pages";
import { AppBarClient } from "../layouts";
import * as ROUTES from "./routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppBarClient />}>
          <Route path={ROUTES.HOME} element={<HomeView />} />
          <Route path={ROUTES.ABOUT} element={<AboutView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
