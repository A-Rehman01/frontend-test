import React from "react"
import { Route, Routes } from "react-router-dom"
import PageNotFound from "../pages/pageNotFound/PageNotFound"
import { routes } from "./Routes"

const Router = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.route} element={route.component} key={route.key} />
      ))}
      <Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default Router
