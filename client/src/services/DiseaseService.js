import Api from "@/services/Api";

export default {
  updateDisease(params) {
    return Api().put("/" + params.id, params);
  },

  getOneDisease(params) {
    return Api().get("/" + params.id);
  }
};
