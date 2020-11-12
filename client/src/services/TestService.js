import Api from "@/services/Api";

export default {
  updateTest(params) {
    return Api().put("test/" + params.id, params);
  },

  getOneTest(params) {
    return Api().get("test/" + params.id);
  }
};
