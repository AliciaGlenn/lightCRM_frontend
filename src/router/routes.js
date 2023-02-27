import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}></Route>
      <Route path="/:" />
      <Route path="/create" />
      <Route path="/update/:id" />
      <Route path="/delete/:id" />
    </>
  )
);

export default router;
