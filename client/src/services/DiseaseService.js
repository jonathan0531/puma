import Api from "@/services/Api";

export default {
  updateDisease(params) {
    return Api().put("disease_config/" + params.id, params);
  },

  getOneDisease(params) {
    return Api().get("disease_config/" + params.id);
  }
};
