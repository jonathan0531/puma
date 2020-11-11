import Api from "@/services/Api";

export default {
  updateComp(params) {
    return Api().put("component/" + params.id, params);
  },

  getOneComp(params) {
    return Api().get("component/" + params.id);
  }
};
