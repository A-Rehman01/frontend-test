import CallsList from "../pages/callsList/CallsList"
import CallDetails from "../pages/callDetails/CallDetails"

export const routes = [
  {
    key: "Call Lists",
    route: "/",
    component: <CallsList />
  },
  {
    key: "Call Details",
    route: "/call-details/:id",
    component: <CallDetails />
  }
]
