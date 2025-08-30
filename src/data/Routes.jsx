import React from "react";
import Home from "../pages/Home";
import Experience from "../pages/Experience";
import Project from "../pages/Project";
import Contact from "../pages/Contact";

export const menu = [
  { path: "/", element: <Home /> },
  { path: "/experience", element: <Experience /> },
  { path: "/project", element: <Project /> },
  { path: "/contact", element: <Contact /> },
];
