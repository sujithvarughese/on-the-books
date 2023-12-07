import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
   BookPage,
   bookDetailsLoader,
   Discover,
   discoverLoader,
   Error,
   Landing,
   Login,
   MyLibrary,
   myLibraryLoader,
   Register,
   Root
} from "./pages";
import { GlobalProvider } from "./context/GlobalContext.jsx";

const App = () => {


   const router = createBrowserRouter([
      {
         path: "/",
         element: <Root />,
         errorElement: <Error />,
         children: [
            { index: true, element: <Landing /> },
            { path: "library/:id", element: <BookPage />, loader: bookDetailsLoader},
            { path: "library", element: <MyLibrary />, loader: myLibraryLoader},
            { path: "discover", element: <Discover />, loader: discoverLoader},
            { path: "login", element: <Login />},
            { path: "register", element: <Register />},
         ]
      }
   ])

   return (
      <GlobalProvider>
         <RouterProvider router={router} />
      </GlobalProvider>
   )
}

export default App
