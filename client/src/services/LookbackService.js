import Api from "@/services/Api";

export default {
  getOneLookback(params) {
    return Api().get("lookback/" + params.id);
  }
};
