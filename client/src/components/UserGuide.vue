<template>
  <div id="container">
    <br />
    <h1 id="h1">User Guide</h1>
    <hr />
    <br />

    <!-- Pending Lookback Module -->
    <h2>Pending Lookback Module:</h2>
    <h5>
      Pending lookbacks tells the users which lookback haven't been completed
    </h5>
    <h5>
      The user can generate the Initial Notification form, CHAG form, and NAT
      form on the left hand side of the table
    </h5>
    <h5>
      The user can mark a lookback complete by clicking on the edit icon under
      the 'Edit' column to mark a lookback complete
    </h5>

    <!-- Completed Lookback Module -->
    <h2>Completed Lookback Module:</h2>
    <h5>
      The completed lookback module is a list of all the lookbacks that have
      been marked complete from the pending lookback table.
    </h5>

    <!-- Search Lookback Module -->
    <h2>Search Lookback Module:</h2>

    <h5>
      This module allows employees to view and search every lookbacks that are
      pending and complete.
    </h5>
    <h5>
      The user can also use the filter located on the top of the table to filter
      by Lookback_ID, Disease_ID, or Donor_ID.
    </h5>

    <!-- Search Blood Donations Module -->
    <h2>Search Blood Donations Module:</h2>
    <h5>
      The main purpose of this module is to be able to search blood donations
      made by a certain donor.
    </h5>
    <h5>
      Like the search lookbacks module, the user can also filter by Donor_ID.
    </h5>

    <!-- Result Set -->
    <h2>Result Set:</h2>
    <h5>
      This module contains the calculations used for interpreting test results.
    </h5>
    <h5>
      The user can click the 'Add Result Set' button located just above the
      table.
    </h5>
    <h5>
      The user can edit the Result Set record by clicking on the 'Edit' icon on
      the right side of the table under the column name 'Edit'.
    </h5>

    <!-- Disease Configuration -->
    <h2>Disease Configuration:</h2>
    <h5>
      This module allows the user to view diseases stored in the system and
      explains how to respond to actionable confirmation.
    </h5>
    <h5>
      The user can click the 'Add Disease' button located just above the table.
    </h5>
    <h5>
      The user can edit the Disease Configuration record by clicking on the
      'Edit' icon on the right side of the table under the column name 'Edit'.
    </h5>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {};
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