import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import SwapStations from "./components/SwapStations";
import Authenticate from "./components/Authenticate";
import { ChakraProvider } from "@chakra-ui/provider";
import { theme } from "@chakra-ui/theme";

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/",
                element: <Body />,
            },

            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/auth",
                element: <Authenticate />,
            },
            {
                path: "/stations",
                element: (
                    <ChakraProvider theme={theme}>
                        <SwapStations />
                    </ChakraProvider>
                ),
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
