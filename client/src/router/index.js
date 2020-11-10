import Vue from "vue";
import Router from "vue-router";
import Completed from "@/components/Completed";
import UserGuide from "@/components/UserGuide";
import Pending from "@/components/Pending";
import LookbackConfig from "@/components/LookbackConfig";
import SearchRecords from "@/components/SearchRecords";
import UpdateDonor from "@/components/UpdateDonor";
import Register from "@/components/Register";
import Login from "@/components/Login";
import AddDonor from "@/components/AddDonor";
import Donor from "@/components/Donor";
import Welcome from "@/components/Welcome";
import DiseaseConfig from "@/components/DiseaseConfig";
import AddDiseaseConfig from "@/components/AddDiseaseConfig";
import UpdateDiseaseConfig from "@/components/UpdateDiseaseConfig";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome
    },
    {
      path: "/completed",
      name: "Completed",
      component: Completed
    },
    {
      path: "/user",
      name: "UserGuide",
      component: UserGuide
    },
    {
      path: "/pending",
      name: "Pending",
      component: Pending
    },
    {
      path: "/config",
      name: "LookbackConfig",
      component: LookbackConfig
    },
    {
      path: "/search",
      name: "SearchRecords",
      component: SearchRecords
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/donor/:id",
      name: "UpdateDonor",
      component: UpdateDonor
    },
    {
      path: "/donor/add",
      name: "AddDonor",
      component: AddDonor
    },
    {
      path: "/donor",
      name: "Donor",
      component: Donor
    },
    {
      path: "/disease_config/:id",
      name: "UpdateDiseaseConfig",
      component: UpdateDiseaseConfig
    },
    {
      path: "/disease_config/add",
      name: "AddDiseaseConfig",
      component: AddDiseaseConfig
    },
    {
      path: "/disease_config",
      name: "DiseaseConfig",
      component: DiseaseConfig
    }
  ]
});
