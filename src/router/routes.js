import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// pages
const Portfolio = () => import(/* webpackChunkName: "common" */ "@/pages/Portfolio.vue");
const Branding = () => import(/* webpackChunkName: "common" */ "@/pages/Branding.vue");
const About = () => import(/* webpackChunkName: "common" */ "@/pages/About.vue");
const Contact = () => import(/* webpackChunkName: "common" */ "@/pages/Contact.vue");


const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/branding",
    children: [
     {
        path: "portfolio",
        name: "portfolio",
        component: Portfolio
      },
      {
        path: "branding",
        name: "branding",
        component: Branding
      },
      {
        path: "about",
        name: "about",
        component: About
      },
       {
        path: "contact",
        name: "contact",
        component: Contact
      }
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
