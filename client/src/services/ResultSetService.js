import Api from "@/services/Api";

export default {
  updateRS(params) {
    return Api().put("resultset/" + params.id, params);
  },

  getOneRS(params) {
    return Api().get("resultset/" + params.id);
  }
};
