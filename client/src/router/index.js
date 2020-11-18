import Vue from "vue";
import Router from "vue-router";
import Completed from "@/components/Completed";
import Pending from "@/components/Pending";
import SearchDonations from "@/components/SearchDonations";
import SearchLookback from "@/components/SearchLookback";
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
import Chag from "@/components/Chag";
import NAT from "@/components/NAT";
import UpdateLookback from "@/components/UpdateLookback";
import UserGuide from "@/components/UserGuide";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/completed",
      name: "Completed",
      component: Completed
    },
    {
      path: "/",
      name: "Pending",
      component: Pending
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
    },
    {
      path: "/chag/:id",
      name: "Chag",
      component: Chag
    },
    {
      path: "/nat/:id",
      name: "NAT",
      component: NAT
    },
    {
      path: "/lookback/:id",
      name: "UpdateLookback",
      component: UpdateLookback
    },
    {
      path: "/userguide",
      name: "UserGuide",
      component: UserGuide
    }
  ]
});
