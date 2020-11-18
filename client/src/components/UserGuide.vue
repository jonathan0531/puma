<template>
  <div id="container">
    <br />
    <h1 id="h1">User Guide</h1>
    <hr />
    <br />

    <!-- Pending Lookback Module -->
    <img class="img" src="../pics/nav.png" alt="" />
    <h2>Side Navigation Bar:</h2>
    <h5>
      On the top of the screen, click on the hamburger icon to open the side
      navigation pane.
    </h5>
    <h5>
      The side navigation pane displays the list of modules described below.
    </h5>

    <!-- Pending Lookback Module -->
    <h2>Pending Lookback Module:</h2>
    <h5>
      Pending lookbacks tells the users which lookback haven't been completed
    </h5>
    <img style="height: 70px; width: 110px" src="../pics/form.png" alt="" />
    <h5>
      The user can generate the Initial Notification form, CHAG form, and NAT
      form on the left hand side of the table
    </h5>
    <h5>
      The user can click on one of the icons to take you to the specific form
      for the Lookback ID
    </h5>
    <img style="height: 60px; width: 170px" src="../pics/report.png" alt="" />
    <h5>
      Once the user clicks on the form icon, they have the option to generate a
      PDF for that form that contains information for that specific record for
      that Lookback ID
    </h5>
    <img style="height: 80px; width: 40px" src="../pics/edit.png" alt="" />
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
    <h2>Result Set Module:</h2>
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
    <h2>Disease Configuration Module:</h2>
    <h5>
      This module allows the user to view diseases stored in thier database and
      explains how to respond to actionable confirmation.
    </h5>
    <h5>
      The user can click the 'Add Disease' button located just above the table.
    </h5>
    <h5>
      The user can edit the Disease Configuration record by clicking on the
      'Edit' icon on the right side of the table under the column name 'Edit'.
    </h5>

    <!-- Test Configuration -->
    <h2>Test Configuration Module:</h2>
    <h5>
      This module contains information about what tests are needed for which
      disease and how many tests are needed.
    </h5>
    <h5>
      The user can click the 'Add Test' button located just above the table.
    </h5>
    <h5>
      The user can edit the Test Configuration record by clicking on the 'Edit'
      icon on the right side of the table under the column name 'Edit'.
    </h5>

    <!-- Component Configuration -->
    <h2>Component Configuration Module:</h2>
    <h5>This module indicates the components of consequence for a disease.</h5>
    <h5>
      The user can click the 'Add Componenet' button located just above the
      table.
    </h5>
    <h5>
      The user can edit the Component Configuration record by clicking on the
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
.img {
  height: 150px;
  width: 400px;
}
</style>