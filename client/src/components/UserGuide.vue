<template>
  <div id="container">
    <h1 id="h1">User Guide</h1>
    <hr />
    <h2>{{ firstQuestion }}</h2>
    <h5>{{ firstAnswer }}</h5>
    <h2>{{ secondQuestion }}</h2>
    <h5>{{ secondAnswer }}</h5>
    <h2>Search Lookback Module</h2>
    <h5>
      This module allows employees to search all lookbacks by any attributes
    </h5>
    <!-- <h5>{{ firstSource }}</h5>
    <h5>{{ secondSource }}</h5>
    <h5>{{ thirdSource }}</h5>
    <h2>{{ thirdQuestion }}</h2>
    <h5>{{ thirdAnswer }}</h5>
    <h2>{{ fourthQuestion }}</h2>
    <h5>{{ fourthAnswer }}</h5>
    <h2>{{ fifthQuestion }}</h2>
    <h5>{{ fifthAnswer }}</h5>
    <h2>{{ questionSix }}</h2>
    <h5>{{ answerSix }}</h5>
    <h2>{{ questionSeven }}</h2>
    <h5>{{ answerSeven }}</h5>
    <h2>{{ questionEight }}</h2>
    <h5>{{ answerEight }}</h5> -->
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      firstQuestion: "Pending Lookback Module",
      firstAnswer:
        "The pending lookback module shows which lookbacks are still pending and allow the user to manually mark the lookback complete by clicking on the edit symbol on the left side of the table.",
      secondQuestion: "Completed Lookback Module",
      secondAnswer:
        "The completed lookback module is a list of all the lookbacks that have been marked complete in the pending lookback table.",
    };
  },
};
</script>

<style scoped>
#container {
  margin: 10px;
}
h2 {
  margin-top: 30px;
}
</style>