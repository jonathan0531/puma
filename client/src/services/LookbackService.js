import Api from "@/services/Api";

export default {
  getOneLookback(params) {
    return Api().get("lookback/" + params.id);
  },
  getNatLookback(params) {
    return Api().get("nat/" + params.id);
  },
  getInitLookback(params) {
    return Api().get("init/" + params.id);
  }
};
