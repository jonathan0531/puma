import Api from "@/services/Api";

export default {
  getOneLookback(params) {
    return Api().get("lookback/" + params.id);
  },
  getSingleLookback(params) {
    return Api().get("lookbacks/" + params.id);
  },
  getNatLookback(params) {
    return Api().get("nat/" + params.id);
  },
  getInitLookback(params) {
    return Api().get("init/" + params.id);
  },
  updateLookback(params) {
    return Api().put("lookback/" + params.id, params);
  }
};
