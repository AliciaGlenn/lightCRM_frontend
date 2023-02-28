import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Index from "../pages";
import { indexLoader, showLoader } from "./loaders";
import { createAction, deleteAction, updateAction } from "./actions";
import Show from "../pages/show";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Index />} loader={indexLoader} />
        <Route path="/:id" element={<Show />} loader={showLoader} />
        <Route path="/create" action={createAction} />
        <Route path="/update/:id" action={updateAction} />
        <Route path="/delete/:id" action={deleteAction} />
      </Route>
    </>
  )
);

export default router;
