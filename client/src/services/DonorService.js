import Api from "@/services/Api";

export default {
  updateDonor(params) {
    return Api().put("/" + params.id, params);
  },

  getOneDonor(params) {
    return Api().get("/" + params.id);
  }
};
