import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Index from "../pages";
import { indexLoader } from "./loaders";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Index />} loader={indexLoader} />
        <Route path="/:id" />
        <Route path="/create" />
        <Route path="/update/:id" />
        <Route path="/delete/:id" />
      </Route>
    </>
  )
);

export default router;
