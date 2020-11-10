import Api from "@/services/Api";

export default {
  updateDonor(params) {
    return Api().put("donor/" + params.id, params);
  },

  getOneDonor(params) {
    return Api().get("donor/" + params.id);
  }
};
