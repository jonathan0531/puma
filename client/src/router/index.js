import Vue from "vue";
import Router from "vue-router";
import Completed from "@/components/Completed";
import UserGuide from "@/components/UserGuide";
import Pending from "@/components/Pending";
import LookbackConfig from "@/components/LookbackConfig";
import SearchDonations from "@/components/SearchDonations";
import SearchLookback from "@/components/SearchLookback";
import UpdateDonor from "@/components/UpdateDonor";
import Register from "@/components/Register";
import Login from "@/components/Login";
import AddDonor from "@/components/AddDonor";
import Donor from "@/components/Donor";
import Welcome from "@/components/Welcome";
import ResultSet from "@/components/ResultSet";
import AddResultSet from "@/components/AddResultSet";
import UpdateResultSet from "@/components/UpdateResultSet";
import ComponentConfig from "@/components/ComponentConfig";
import AddComponent from "@/components/AddComponent";
import UpdateComponent from "@/components/UpdateComponent";
import TestConfig from "@/components/TestConfig";
import AddTestConfig from "@/components/AddTestConfig";
import UpdateTestConfig from "@/components/UpdateTestConfig";
import DiseaseConfig from "@/components/DiseaseConfig";
import AddDiseaseConfig from "@/components/AddDiseaseConfig";
import UpdateDiseaseConfig from "@/components/UpdateDiseaseConfig";
import InitialNotification from "@/components/InitialNotification";

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
      path: "/search/donations",
      name: "SearchDonations",
      component: SearchDonations
    },
    {
      path: "/search/lookback",
      name: "SearchLookback",
      component: SearchLookback
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
      path: "/config/resultset",
      name: "ResultSet",
      component: ResultSet
    },
    {
      path: "/config/resultset/add",
      name: "AddResultSet",
      component: AddResultSet
    },
    {
      path: "/config/resultset/:id",
      name: "UpdateResultSet",
      component: UpdateResultSet
    },
    {
      path: "/config/component",
      name: "ComponentConfig",
      component: ComponentConfig
    },
    {
      path: "/config/component/add",
      name: "AddComponent",
      component: AddComponent
    },
    {
      path: "/config/component/:id",
      name: "UpdateComponent",
      component: UpdateComponent
    },
    {
      path: "/config/test",
      name: "TestConfig",
      component: TestConfig
    },
    {
      path: "/config/test/add",
      name: "AddTestConfig",
      component: AddTestConfig
    },
    {
      path: "/config/test/:id",
      name: "UpdateTestConfig",
      component: UpdateTestConfig
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
    },
    {
      path: "/form/notification/:id",
      name: "InitialNotification",
      component: InitialNotification
    }
  ]
});
