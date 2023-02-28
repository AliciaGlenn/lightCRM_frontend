import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Index from "../pages";
import { indexLoader } from "./loaders";
import { createAction } from "./actions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Index />} loader={indexLoader} />
        <Route path="/:id" />
        <Route path="/create" action={createAction} />
        <Route path="/update/:id" />
        <Route path="/delete/:id" />
      </Route>
    </>
  )
);

export default router;
