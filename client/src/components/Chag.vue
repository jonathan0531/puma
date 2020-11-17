<template>
  <div id="app">
    <v-container>
      <img class="img" src="../assets/chag_header_1.jpg" alt="" />
      {{ today }}
      <v-btn class="btn" color="primary" @click="generateReport"
        >Generate Report</v-btn
      >
      <br /><br /><br /><br /><br />
      <p class="letter">
        Dear <br />
        The blood component(s) identified on the enclosed
        <span class="bold letter" style="text-decoration: underline"
          >Recipient Status Report</span
        >
        was from a prior donation of a donor who has tested reactive for Chagas
        on a subsequent donation. Below is the Chagas result for the more recent
        donation.
      </p>

      <v-container>
        <v-row no-gutters justify="center">
          <v-col
            class="v-col"
            cols="12"
            sm="6"
            md="8"
            style="
              border-left: 2px solid black;
              border-bottom: 2px solid black;
              border-top: 2px solid black;
            "
          >
            <v-card class="text-center" color="grey lighten-2" tile>
              <span class="bold letter">TEST NAME</span>
            </v-card>
          </v-col>
          <v-col
            class="v-col"
            cols="6"
            md="4"
            style="
              border-left: 2px solid black;
              border-bottom: 2px solid black;
              border-top: 2px solid black;
              border-right: 2px solid black;
            "
          >
            <v-card class="text-center" color="grey lighten-2" tile>
              <span class="bold letter">RESULT</span>
            </v-card>
          </v-col>
        </v-row>
        <v-row no-gutters justify="center">
          <v-col
            class="v-col"
            cols="12"
            sm="6"
            md="8"
            style="border-left: 2px solid black; border-bottom: 2px solid black"
          >
            <v-card tile>
              <span style="padding-left: 4px"> TEST NAME </span>
              <input v-model="Lookback_ID" />
            </v-card>
          </v-col>
          <v-col
            class="v-col"
            cols="6"
            md="4"
            style="
              border-left: 2px solid black;
              border-bottom: 2px solid black;
              border-right: 2px solid black;
            "
          >
            <v-card tile>
              <span style="padding-left: 4px">Positive</span>
            </v-card>
          </v-col>
        </v-row>
        <v-row no-gutters justify="center">
          <v-col
            class="v-col"
            cols="12"
            sm="6"
            md="8"
            style="border-left: 2px solid black; border-bottom: 2px solid black"
          >
            <v-card tile>
              <span style="padding-left: 4px">TEST NAME</span>
              <input v-model="Test_ID" />
            </v-card>
          </v-col>
          <v-col
            class="v-col"
            cols="6"
            md="4"
            style="
              border-left: 2px solid black;
              border-bottom: 2px solid black;
              border-right: 2px solid black;
            "
          >
            <v-card tile>
              <span style="padding-left: 4px">Positive</span>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <p class="letter">
        If the component (s) indicated on the enclosed report was transfused at
        your facility, Gulf Coast Regional Blood Center will provide testing at
        no charge to the recipient.
      </p>

      <v-container>
        <v-row no-gutters justify="center">
          <v-col
            class="v-col"
            cols="12"
            sm="6"
            md="4"
            style="
              border-left: 2px solid black;
              border-bottom: 2px solid black;
              border-top: 2px solid black;
            "
          >
            <v-card class="text-center" tile>
              <span class="bold letter">UNIT NUMBER</span>
            </v-card>
          </v-col>
          <v-col
            class="v-col"
            cols="6"
            md="8"
            style="
              border-left: 2px solid black;
              border-bottom: 2px solid black;
              border-top: 2px solid black;
              border-right: 2px solid black;
            "
          >
            <v-card class="text-center" tile>
              <span class="bold letter">COMPONENT CODE/TYPE</span>
            </v-card>
          </v-col>
        </v-row>
        <v-row no-gutters justify="center">
          <v-col
            class="v-col"
            cols="12"
            sm="6"
            md="4"
            style="border-left: 2px solid black; border-bottom: 2px solid black"
          >
            <v-card class="text-center" tile>
              <span style="padding-left: 4px">Unit Name</span>
            </v-card>
          </v-col>
          <v-col
            class="v-col"
            cols="6"
            md="8"
            style="
              border-left: 2px solid black;
              border-bottom: 2px solid black;
              border-right: 2px solid black;
            "
          >
            <v-card class="text-center" tile>
              <span style="padding-left: 4px">(Component Code)/(Type) </span>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <p class="letter">
        If such testing is desired, blood samples collected in two 7ml EDTA
        anticoagulant tubes will be needed. The samples should be labeled with
        the patient's unique ID number (not the patient's name), the name of the
        recipient's physician, and the date of collection of the sample. The
        coded blood sample along with the enclosed Recipient Status Report
        should be sent to Gulf Coast Regional Blood Center Processing
        Laboratory, Attention: Risk Management. Please note, samples submitted
        without the completed Recipient Status Report form,
        <span
          class="bold letter"
          style="text-decoration: underline; text-decoration-thickness: 2px"
          >can not be tested!</span
        >
        Testing results will be mailed directly to the recipient's attending
        physician and to the Medical Director or designee of your institution.
        Additional information regarding Chagas is attached for the recipient.
        <br /><br />

        If you have questions or concerns regarding the information in this
        letter, I can be contacted at 713-791-6656. <br /><br />

        Sincerely,<br /><br /><br /><br />
        Beth A. Hartwell, MD<br />
        Medical Director
      </p>

      <v-container class="d-inline-flex justify-end mb-8">
        <v-card flat>
          <v-row id="initialCheckBox">
            <v-col
              cols="12"
              sm="8"
              md="6"
              style="
                border-left: 2px solid black;
                border-bottom: 2px solid black;
                border-top: 2px solid black;
                padding: 4px;
              "
            >
              <v-card>
                <div style="border: 1px solid black">
                  <span
                    style="
                      font-weight: bold;
                      font-size: 18px;
                      padding: 0px, 4px;
                    "
                    >A copy of this document was previously faxed.</span
                  ><br /><br />
                  <span
                    style="
                      font-weight: bold;
                      font-size: 18px;
                      text-decoration: underline;
                      font-style: italic;
                      padding: 0px, 4px;
                    "
                    >Date Faxed and/ or <br />Mailed: (Info)</span
                  ><br />
                  <span
                    style="
                      font-weight: bold;
                      font-size: 18px;
                      text-decoration: underline;
                      font-style: italic;
                      padding: 0px, 4px;
                    "
                    >Completed By: (Info)
                  </span>
                </div>
              </v-card>
            </v-col>
            <v-col
              cols="12"
              md="2"
              style="border: 2px solid black; padding: 4px"
            >
              <input type="checkbox" id="checkbox" />
              <label for="checkbox" style="font-size: 18px">Yes</label><br />

              <input type="checkbox" id="checkbox" />
              <label for="checkbox" style="font-size: 18px">No</label>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
      <img class="img" src="../assets/chag_footer_1.jpg" alt="" />
    </v-container>

    <img class="img" src="../assets/chag_header_2.jpg" alt="" /><br /><br />
    <div style="text-align: center">
      <span class="bold">Chagas Lookback Notification</span><br />
      <span class="bold">Recipient Status Report</span><br />
      <span class="bold"
        >"Test Ordered:
        <span style="text-decoration: underline">Chagas"</span></span
      ><br />
    </div>
    <br /><br /><br /><br />

    <v-row no-gutters justify="center">
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="12"
        style="
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          border-top: 2px solid black;
          border-right: 2px solid black;
        "
      >
        <v-card class="text-center" color="grey lighten-2" tile>
          <span class="bold letter">TRANSFUSING FACILITY</span>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="2"
        style="border-left: 2px solid black; border-bottom: 2px solid black"
      >
        <v-card class="text-center" color="grey lighten-2" tile>
          <span class="bold letter">Unit Number</span>
        </v-card>
      </v-col>
      <v-col
        class="v-col"
        cols="12"
        md="3"
        style="border-left: 2px solid black; border-bottom: 2px solid black"
      >
        <v-card class="text-center" color="grey lighten-2" tile>
          <span class="bold letter">Component Code/Type</span>
        </v-card>
      </v-col>
      <v-col
        class="v-col"
        cols="12"
        md="2"
        style="border-left: 2px solid black; border-bottom: 2px solid black"
      >
        <v-card class="text-center" color="grey lighten-2" tile>
          <span class="bold letter">Blood Type</span>
        </v-card>
      </v-col>
      <v-col
        class="v-col"
        cols="12"
        md="2"
        style="border-left: 2px solid black; border-bottom: 2px solid black"
      >
        <v-card class="text-center" color="grey lighten-2" tile>
          <span class="bold letter">Shipment Date</span>
        </v-card>
      </v-col>
      <v-col
        class="v-col"
        cols="12"
        md="3"
        style="
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          border-right: 2px solid black;
        "
      >
        <v-card class="text-center" color="grey lighten-2" tile>
          <span class="bold letter">Shipment Number</span>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="2"
        style="border-left: 2px solid black; border-bottom: 2px solid black"
      >
        <v-card class="text-center" tile>
          <span class="letter">TEST</span>
        </v-card>
      </v-col>
      <v-col
        class="v-col"
        cols="12"
        md="3"
        style="border-left: 2px solid black; border-bottom: 2px solid black"
      >
        <v-card class="text-center" tile>
          <span class="letter">(Component Code)/(Type)</span>
        </v-card>
      </v-col>
      <v-col
        class="v-col"
        cols="12"
        md="2"
        style="border-left: 2px solid black; border-bottom: 2px solid black"
      >
        <v-card class="text-center" tile>
          <span class="letter">Blood Type</span>
        </v-card>
      </v-col>
      <v-col
        class="v-col"
        cols="12"
        md="2"
        style="border-left: 2px solid black; border-bottom: 2px solid black"
      >
        <v-card class="text-center" tile>
          <span class="letter">Shipment Date</span>
        </v-card>
      </v-col>
      <v-col
        class="v-col"
        cols="12"
        md="3"
        style="
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          border-right: 2px solid black;
        "
      >
        <v-card class="text-center" tile>
          <span class="letter">Shipment Number</span>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="12"
        style="
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          border-right: 2px solid black;
        "
      >
        <v-card tile>
          <span class="bold letter" style="padding-left: 6px"
            >Please Check The Applicable Response</span
          >
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="3"
        style="border-left: 2px solid black; border-bottom: 2px solid black"
      >
        <v-card tile style="padding-left: 4px">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox" style="font-size: 18px">Unit Discarded</label>
        </v-card>
      </v-col>
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="2"
        style="border-left: 2px solid black; border-bottom: 2px solid black"
      >
        <v-card tile style="padding-left: 4px">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox" style="font-size: 18px">Unit Expired</label>
        </v-card>
      </v-col>
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="7"
        style="
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          border-right: 2px solid black;
        "
      >
        <v-card tile style="padding-left: 4px">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox" style="font-size: 18px"
            >Unit Used for Manufacturing</label
          >
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="7"
        style="border-left: 2px solid black; border-bottom: 2px solid black"
      >
        <v-card tile style="padding-left: 4px">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox" style="font-size: 18px"
            >Unit Returned to Gulf Coast Regional Blood Center</label
          >
        </v-card>
      </v-col>
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="5"
        style="
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          border-right: 2px solid black;
        "
      >
        <v-card tile style="padding-left: 4px">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox" style="font-size: 18px">Date: </label>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="12"
        style="
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          border-right: 2px solid black;
        "
      >
        <v-card tile style="padding-left: 4px">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox" style="font-size: 18px"
            >Unit Transfused
            <span class="bold"
              >(Please Complete Recipient Information)</span
            ></label
          >
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="12"
        style="
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          border-right: 2px solid black;
        "
      >
        <v-card class="text-center" tile>
          <span class="bold letter">Recipient Information</span>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="12"
        style="
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          border-right: 2px solid black;
        "
      >
        <v-card tile>
          <span class="letter" style="padding-left: 4px"
            >Diagnosis at the time of Transfusion:</span
          >
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="3"
        style="
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          padding-top: 6px;
        "
      >
        <span class="letter" style="padding-left: 4px">Recipient Status:</span>
      </v-col>
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="3"
        style="border-left: 2px solid black; border-bottom: 2px solid black"
      >
        <v-card tile style="padding-left: 4px">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox" style="font-size: 18px">Alive</label>
        </v-card>
      </v-col>
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="3"
        style="border-left: 2px solid black; border-bottom: 2px solid black"
      >
        <v-card tile style="padding-left: 4px">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox" style="font-size: 18px">Deceased</label>
        </v-card>
      </v-col>
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="3"
        style="
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          border-right: 2px solid black;
        "
      >
        <v-card tile style="padding-left: 4px">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox" style="font-size: 18px">Unknown</label>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="3"
        style="border-left: 2px solid black; border-bottom: 2px solid black"
      >
        <v-card tile>
          <span class="letter" style="padding-left: 4px">If Deceased:</span>
        </v-card>
      </v-col>
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="3"
        style="border-left: 2px solid black; border-bottom: 2px solid black"
      >
        <v-card tile>
          <span class="letter" style="padding-left: 4px">Date:</span>
        </v-card>
      </v-col>
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="6"
        style="
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          border-right: 2px solid black;
        "
      >
        <v-card tile>
          <span class="letter" style="padding-left: 4px">Cause of Death:</span>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="6"
        style="
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          padding-top: 6px;
        "
      >
        <span class="letter" style="padding-left: 4px"
          >If alive: Has recipient been notified? Yes</span
        >
        <input type="checkbox" id="checkbox" />
        <span class="letter" style="padding-left: 4px">Date:</span>
      </v-col>
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="1"
        style="border-left: 2px solid black; border-bottom: 2px solid black"
      >
        <v-card tile style="padding-left: 4px">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox" style="font-size: 18px">No</label>
        </v-card>
      </v-col>
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="4"
        style="border-left: 2px solid black; border-bottom: 2px solid black"
      >
        <v-card tile style="padding-left: 4px">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox" style="font-size: 18px"
            >Was recipient tested? Yes</label
          >
          <input type="checkbox" id="checkbox" />
          <span class="letter" style="padding-left: 4px">Date:</span>
        </v-card>
      </v-col>
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="1"
        style="
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          border-right: 2px solid black;
        "
      >
        <v-card tile style="padding-left: 4px">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox" style="font-size: 18px">No</label>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="12"
        style="
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          border-right: 2px solid black;
        "
      >
        <v-card tile>
          <span class="letter" style="padding-left: 4px"
            >Recipient test and result:</span
          >
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="12"
        style="
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          border-right: 2px solid black;
        "
      >
        <v-card tile>
          <span class="letter" style="padding-left: 4px"
            >Additional clinical data and possible risk factors other than blood
            transfusions:</span
          >
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="12"
        style="
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          border-right: 2px solid black;
        "
      >
        <v-card class="text-center" tile>
          <span class="bold letter">Recipient Sample Information</span>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="12"
        style="
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          border-right: 2px solid black;
        "
      >
        <v-card tile>
          <span class="letter" style="padding-left: 4px"
            >Date sample sent to The Blood Center:</span
          >
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="12"
        style="
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          border-right: 2px solid black;
        "
      >
        <v-card tile>
          <span class="letter" style="padding-left: 4px"
            >Patient Unique ID #:</span
          >
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="8"
        style="border-left: 2px solid black; border-bottom: 2px solid black"
      >
        <v-card tile>
          <span class="letter" style="padding-left: 4px"
            >Attending Physician's Name:</span
          >
        </v-card>
      </v-col>
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="4"
        style="
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          border-right: 2px solid black;
        "
      >
        <v-card tile>
          <span class="letter" style="padding-left: 4px">Phone Number:</span>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="12"
        style="
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          border-right: 2px solid black;
        "
      >
        <v-card tile>
          <span class="letter" style="padding-left: 4px">Address:</span>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="6"
        style="border-left: 2px solid black; border-bottom: 2px solid black"
      >
        <v-card tile>
          <span class="letter" style="padding-left: 4px">City:</span>
        </v-card>
      </v-col>
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="2"
        style="border-left: 2px solid black; border-bottom: 2px solid black"
      >
        <v-card tile>
          <span class="letter" style="padding-left: 4px">State:</span>
        </v-card>
      </v-col>
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="4"
        style="
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          border-right: 2px solid black;
        "
      >
        <v-card tile>
          <span class="letter" style="padding-left: 4px">Zip Code:</span>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="8"
        style="border-left: 2px solid black; border-bottom: 2px solid black"
      >
        <v-card tile>
          <span class="letter" style="padding-left: 4px"
            >Form Completed by:</span
          >
        </v-card>
      </v-col>
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="4"
        style="
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          border-right: 2px solid black;
        "
      >
        <v-card tile>
          <span class="letter" style="padding-left: 4px">Date:</span>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="6"
        style="border-left: 2px solid black; border-bottom: 2px solid black"
      >
        <br /><br />
        <span class="letter" style="padding-left: 4px"
          >Return Copy by Mail or Facsimile to:</span
        >
      </v-col>
      <v-col
        class="v-col"
        cols="12"
        sm="6"
        md="6"
        style="
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          border-right: 2px solid black;
        "
      >
        <v-card tile>
          <span class="letter" style="padding-left: 4px"
            >Technical Services</span
          ><br />
          <span class="letter" style="padding-left: 4px"
            >Gulf Coast Regional Blood Center</span
          ><br />
          <span class="letter" style="padding-left: 4px"
            >1400 LaConcha, Houston, TX 77054</span
          ><br />
          <span class="letter" style="padding-left: 4px"
            >Fax Number (713) 791-6651</span
          ><br />
          <span class="letter" style="padding-left: 4px"
            ><span class="bold" style="text-decoration: underline">
              Test Ordered: Chagas</span
            ></span
          >
        </v-card>
      </v-col>
    </v-row>
    <img class="img" src="../assets/chag_footer_1.jpg" alt="" />

    <v-container>
      <img class="img" src="../assets/chag_header_3.jpg" alt="" />

      <p
        class="text-center"
        style="
          text-decoration: underline;
          font-size: 36px;
          font-weight: bold;
          font-style: italic;
        "
      >
        Information for the Recipient
      </p>
      <br /><br />
      <p class="letter">
        <span class="bold letter" style="font-style: italic"
          >Why are we contacting you?</span
        ><br />
        You are being notified because you previously received blood from a
        donor who now tests positive in a test that detects infection with
        <span style="font-style: italic">Trypanosoma cruzi</span>. Thisis the
        parasite that causes Chagas’ disease. Because you have been exposed to
        blood from an individual who may have Chagas’ disease, we are notifying
        you and strongly advising that you discuss this information with you
        doctor.
      </p>

      <p class="letter">
        <span class="bold letter" style="font-style: italic"
          >Why is this testing being done?</span
        ><br />
        Chagas’ disease is caused by a parasite (T. cruzi) that is found mostly
        in Mexico, Central and South America. Humans infected with
        <span style="font-style: italic">T. cruzi</span> can infect other humans
        through blood transfusion, but this is very rare. There are over 13
        million units of blood transfused every year in the United States.
        However, there are only seven documented cases of
        <span style="font-style: italic">T. cruzi</span> infection being spread
        by blood transfusion in the United States and Canada over the past
        twenty years. Most individuals infected with
        <span style="font-style: italic">T. cruzi</span> have no symptoms.
        However, after many years the parasite may cause damage to muscle,
        especially in the esophagus, intestine or the heart. Because you have
        been exposed to blood from a blood donor who later tested positive, it
        is possible that you have been exposed to
        <span style="font-style: italic">T. cruzi</span> through the earlier
        blood transfusion.
      </p>

      <p class="letter">
        <span class="bold letter" style="font-style: italic"
          >Am I at risk for getting Chagas’ disease?</span
        ><br />
        It is possible that the blood donor’s test from which you received blood
        was false positive, and not infected with
        <span style="font-style: italic">T. cruzi</span>. However, it is
        strongly recommended that you seek testing for
        <span style="font-style: italic">T. cruzi</span> antibody either through
        an infectious disease specialist, or through your physician.
      </p>

      <p class="letter">
        <span class="bold letter" style="font-style: italic"
          >How do I obtain testing for
          <span style="font-style: italic">T. cruzi</span> antibody?</span
        ><br />
        There are two options, both of which involve contacting your physician
        to learn more about possible infection with
        <span style="font-style: italic">T. cruzi</span>. Your physician can
        collect samples to provide to the Blood Center for testing (This assumes
        that the blood center will perform the testing, which many may choose to
        perform), or your physician can refer you to an infectious disease
        specialist. If there are no infectious disease specialists in your area,
        your primary health care provider can contact the Centers for Disease
        Control and Prevention (<span style="text-decoration: underline"
          >www.CDC.gov</span
        >) for additional information on diagnosis and testing.<br />
      </p>

      <img class="img" src="../assets/chag_footer_1.jpg" alt="" />
    </v-container>

    <div>
      <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="2000"
        :htmlToPdfOptions="htmlToPdfOptions"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-content-width="90%"
        @beforeDownload="beforeDownload($event)"
        @progress="onProgress($event)"
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)"
        ref="html2Pdf"
      >
        <section slot="pdf-content">
          <section class="pdf-item">
            <v-container>
              <img class="img" src="../assets/chag_header_1.jpg" alt="" />
              {{ today }}
              <br /><br /><br /><br /><br />
              <p class="letter">
                Dear <br />
                The blood component(s) identified on the enclosed
                <span class="bold letter" style="text-decoration: underline"
                  >Recipient Status Report</span
                >
                was from a prior donation of a donor who has tested reactive for
                Chagas on a subsequent donation. Below is the Chagas result for
                the more recent donation.
              </p>

              <v-container>
                <v-row no-gutters justify="center">
                  <v-col
                    class="v-col"
                    cols="12"
                    sm="6"
                    md="8"
                    style="
                      border-left: 2px solid black;
                      border-bottom: 2px solid black;
                      border-top: 2px solid black;
                    "
                  >
                    <v-card class="text-center" color="grey lighten-2" tile>
                      <span class="bold letter">TEST NAME</span>
                    </v-card>
                  </v-col>
                  <v-col
                    class="v-col"
                    cols="6"
                    md="4"
                    style="
                      border-left: 2px solid black;
                      border-bottom: 2px solid black;
                      border-top: 2px solid black;
                      border-right: 2px solid black;
                    "
                  >
                    <v-card class="text-center" color="grey lighten-2" tile>
                      <span class="bold letter">RESULT</span>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row no-gutters justify="center">
                  <v-col
                    class="v-col"
                    cols="12"
                    sm="6"
                    md="8"
                    style="
                      border-left: 2px solid black;
                      border-bottom: 2px solid black;
                    "
                  >
                    <v-card tile>
                      <span style="padding-left: 4px">TEST NAME</span>
                    </v-card>
                  </v-col>
                  <v-col
                    class="v-col"
                    cols="6"
                    md="4"
                    style="
                      border-left: 2px solid black;
                      border-bottom: 2px solid black;
                      border-right: 2px solid black;
                    "
                  >
                    <v-card tile>
                      <span style="padding-left: 4px">Positive</span>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row no-gutters justify="center">
                  <v-col
                    class="v-col"
                    cols="12"
                    sm="6"
                    md="8"
                    style="
                      border-left: 2px solid black;
                      border-bottom: 2px solid black;
                    "
                  >
                    <v-card tile>
                      <span style="padding-left: 4px">TEST NAME</span>
                    </v-card>
                  </v-col>
                  <v-col
                    class="v-col"
                    cols="6"
                    md="4"
                    style="
                      border-left: 2px solid black;
                      border-bottom: 2px solid black;
                      border-right: 2px solid black;
                    "
                  >
                    <v-card tile>
                      <span style="padding-left: 4px">Positive</span>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>

              <p class="letter">
                If the component (s) indicated on the enclosed report was
                transfused at your facility, Gulf Coast Regional Blood Center
                will provide testing at no charge to the recipient.
              </p>

              <v-container>
                <v-row no-gutters justify="center">
                  <v-col
                    class="v-col"
                    cols="12"
                    sm="6"
                    md="4"
                    style="
                      border-left: 2px solid black;
                      border-bottom: 2px solid black;
                      border-top: 2px solid black;
                    "
                  >
                    <v-card class="text-center" tile>
                      <span class="bold letter">UNIT NUMBER</span>
                    </v-card>
                  </v-col>
                  <v-col
                    class="v-col"
                    cols="6"
                    md="8"
                    style="
                      border-left: 2px solid black;
                      border-bottom: 2px solid black;
                      border-top: 2px solid black;
                      border-right: 2px solid black;
                    "
                  >
                    <v-card class="text-center" tile>
                      <span class="bold letter">COMPONENT CODE/TYPE</span>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row no-gutters justify="center">
                  <v-col
                    class="v-col"
                    cols="12"
                    sm="6"
                    md="4"
                    style="
                      border-left: 2px solid black;
                      border-bottom: 2px solid black;
                    "
                  >
                    <v-card class="text-center" tile>
                      <span style="padding-left: 4px">Unit Name</span>
                    </v-card>
                  </v-col>
                  <v-col
                    class="v-col"
                    cols="6"
                    md="8"
                    style="
                      border-left: 2px solid black;
                      border-bottom: 2px solid black;
                      border-right: 2px solid black;
                    "
                  >
                    <v-card class="text-center" tile>
                      <span style="padding-left: 4px"
                        >(Component Code)/(Type)
                      </span>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>

              <p class="letter">
                If such testing is desired, blood samples collected in two 7ml
                EDTA anticoagulant tubes will be needed. The samples should be
                labeled with the patient's unique ID number (not the patient's
                name), the name of the recipient's physician, and the date of
                collection of the sample. The coded blood sample along with the
                enclosed Recipient Status Report should be sent to Gulf Coast
                Regional Blood Center Processing Laboratory, Attention: Risk
                Management. Please note, samples submitted without the completed
                Recipient Status Report form,
                <span
                  class="bold letter"
                  style="
                    text-decoration: underline;
                    text-decoration-thickness: 2px;
                  "
                  >can not be tested!</span
                >
                Testing results will be mailed directly to the recipient's
                attending physician and to the Medical Director or designee of
                your institution. Additional information regarding Chagas is
                attached for the recipient. <br /><br />

                If you have questions or concerns regarding the information in
                this letter, I can be contacted at 713-791-6656. <br /><br />

                Sincerely,<br /><br /><br /><br />
                Beth A. Hartwell, MD<br />
                Medical Director
              </p>

              <v-container class="d-inline-flex justify-end mb-8">
                <v-card flat>
                  <v-row id="initialCheckBox">
                    <v-col
                      cols="12"
                      sm="8"
                      md="6"
                      style="
                        border-left: 2px solid black;
                        border-bottom: 2px solid black;
                        border-top: 2px solid black;
                        padding: 4px;
                      "
                    >
                      <v-card>
                        <div style="border: 1px solid black">
                          <span
                            style="
                              font-weight: bold;
                              font-size: 18px;
                              padding: 0px, 4px;
                            "
                            >A copy of this document was previously faxed.</span
                          ><br /><br />
                          <span
                            style="
                              font-weight: bold;
                              font-size: 18px;
                              text-decoration: underline;
                              font-style: italic;
                              padding: 0px, 4px;
                            "
                            >Date Faxed and/ or <br />Mailed: (Info)</span
                          ><br />
                          <span
                            style="
                              font-weight: bold;
                              font-size: 18px;
                              text-decoration: underline;
                              font-style: italic;
                              padding: 0px, 4px;
                            "
                            >Completed By: (Info)
                          </span>
                        </div>
                      </v-card>
                    </v-col>
                    <v-col
                      cols="12"
                      md="2"
                      style="border: 2px solid black; padding: 4px"
                    >
                      <input type="checkbox" id="checkbox" />
                      <label for="checkbox" style="font-size: 18px">Yes</label
                      ><br />

                      <input type="checkbox" id="checkbox" />
                      <label for="checkbox" style="font-size: 18px">No</label>
                    </v-col>
                  </v-row>
                </v-card>
              </v-container>
              <img class="img" src="../assets/chag_footer_1.jpg" alt="" />
            </v-container>
          </section>

          <div class="html2pdf__page-break" />

          <section class="pdf-item">
            <img
              class="img"
              src="../assets/chag_header_2.jpg"
              alt=""
            /><br /><br />
            <div style="text-align: center">
              <span class="bold">Chagas Lookback Notification</span><br />
              <span class="bold">Recipient Status Report</span><br />
              <span class="bold"
                >"Test Ordered:
                <span style="text-decoration: underline">Chagas"</span></span
              ><br />
            </div>
            <br /><br /><br /><br />
            <v-row no-gutters justify="center">
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="12"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                  border-top: 2px solid black;
                  border-right: 2px solid black;
                "
              >
                <v-card class="text-center" color="grey lighten-2" tile>
                  <span class="bold letter">TRANSFUSING FACILITY</span>
                </v-card>
              </v-col>
            </v-row>

            <v-row no-gutters justify="center">
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="2"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                "
              >
                <v-card class="text-center" color="grey lighten-2" tile>
                  <span class="bold letter">Unit Number</span>
                </v-card>
              </v-col>
              <v-col
                class="v-col"
                cols="12"
                md="3"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                "
              >
                <v-card class="text-center" color="grey lighten-2" tile>
                  <span class="bold letter">Component Code/Type</span>
                </v-card>
              </v-col>
              <v-col
                class="v-col"
                cols="12"
                md="2"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                "
              >
                <v-card class="text-center" color="grey lighten-2" tile>
                  <span class="bold letter">Blood Type</span>
                </v-card>
              </v-col>
              <v-col
                class="v-col"
                cols="12"
                md="2"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                "
              >
                <v-card class="text-center" color="grey lighten-2" tile>
                  <span class="bold letter">Shipment Date</span>
                </v-card>
              </v-col>
              <v-col
                class="v-col"
                cols="12"
                md="3"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                  border-right: 2px solid black;
                "
              >
                <v-card class="text-center" color="grey lighten-2" tile>
                  <span class="bold letter">Shipment Number</span>
                </v-card>
              </v-col>
            </v-row>

            <v-row no-gutters justify="center">
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="2"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                "
              >
                <v-card class="text-center" tile>
                  <span class="letter">TEST</span>
                </v-card>
              </v-col>
              <v-col
                class="v-col"
                cols="12"
                md="3"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                "
              >
                <v-card class="text-center" tile>
                  <span class="letter">(Component Code)/(Type)</span>
                </v-card>
              </v-col>
              <v-col
                class="v-col"
                cols="12"
                md="2"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                "
              >
                <v-card class="text-center" tile>
                  <span class="letter">Blood Type</span>
                </v-card>
              </v-col>
              <v-col
                class="v-col"
                cols="12"
                md="2"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                "
              >
                <v-card class="text-center" tile>
                  <span class="letter">Shipment Date</span>
                </v-card>
              </v-col>
              <v-col
                class="v-col"
                cols="12"
                md="3"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                  border-right: 2px solid black;
                "
              >
                <v-card class="text-center" tile>
                  <span class="letter">Shipment Number</span>
                </v-card>
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="12"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                  border-right: 2px solid black;
                "
              >
                <v-card tile>
                  <span class="bold letter" style="padding-left: 6px"
                    >Please Check The Applicable Response</span
                  >
                </v-card>
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="3"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                "
              >
                <v-card tile style="padding-left: 4px">
                  <input type="checkbox" id="checkbox" />
                  <label for="checkbox" style="font-size: 18px"
                    >Unit Discarded</label
                  >
                </v-card>
              </v-col>
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="2"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                "
              >
                <v-card tile style="padding-left: 4px">
                  <input type="checkbox" id="checkbox" />
                  <label for="checkbox" style="font-size: 18px"
                    >Unit Expired</label
                  >
                </v-card>
              </v-col>
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="7"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                  border-right: 2px solid black;
                "
              >
                <v-card tile style="padding-left: 4px">
                  <input type="checkbox" id="checkbox" />
                  <label for="checkbox" style="font-size: 18px"
                    >Unit Used for Manufacturing</label
                  >
                </v-card>
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="7"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                "
              >
                <v-card tile style="padding-left: 4px">
                  <input type="checkbox" id="checkbox" />
                  <label for="checkbox" style="font-size: 18px"
                    >Unit Returned to Gulf Coast Regional Blood Center</label
                  >
                </v-card>
              </v-col>
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="5"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                  border-right: 2px solid black;
                "
              >
                <v-card tile style="padding-left: 4px">
                  <input type="checkbox" id="checkbox" />
                  <label for="checkbox" style="font-size: 18px">Date: </label>
                </v-card>
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="12"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                  border-right: 2px solid black;
                "
              >
                <v-card tile style="padding-left: 4px">
                  <input type="checkbox" id="checkbox" />
                  <label for="checkbox" style="font-size: 18px"
                    >Unit Transfused
                    <span class="bold"
                      >(Please Complete Recipient Information)</span
                    ></label
                  >
                </v-card>
              </v-col>
            </v-row>

            <v-row no-gutters justify="center">
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="12"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                  border-right: 2px solid black;
                "
              >
                <v-card class="text-center" tile>
                  <span class="bold letter">Recipient Information</span>
                </v-card>
              </v-col>
            </v-row>

            <v-row no-gutters justify="center">
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="12"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                  border-right: 2px solid black;
                "
              >
                <v-card tile>
                  <span class="letter" style="padding-left: 4px"
                    >Diagnosis at the time of Transfusion:</span
                  >
                </v-card>
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="3"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                  padding-top: 6px;
                "
              >
                <span class="letter" style="padding-left: 4px"
                  >Recipient Status:</span
                >
              </v-col>
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="3"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                "
              >
                <v-card tile style="padding-left: 4px">
                  <input type="checkbox" id="checkbox" />
                  <label for="checkbox" style="font-size: 18px">Alive</label>
                </v-card>
              </v-col>
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="3"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                "
              >
                <v-card tile style="padding-left: 4px">
                  <input type="checkbox" id="checkbox" />
                  <label for="checkbox" style="font-size: 18px">Deceased</label>
                </v-card>
              </v-col>
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="3"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                  border-right: 2px solid black;
                "
              >
                <v-card tile style="padding-left: 4px">
                  <input type="checkbox" id="checkbox" />
                  <label for="checkbox" style="font-size: 18px">Unknown</label>
                </v-card>
              </v-col>
            </v-row>

            <v-row no-gutters justify="center">
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="3"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                "
              >
                <v-card tile>
                  <span class="letter" style="padding-left: 4px"
                    >If Deceased:</span
                  >
                </v-card>
              </v-col>
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="3"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                "
              >
                <v-card tile>
                  <span class="letter" style="padding-left: 4px">Date:</span>
                </v-card>
              </v-col>
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="6"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                  border-right: 2px solid black;
                "
              >
                <v-card tile>
                  <span class="letter" style="padding-left: 4px"
                    >Cause of Death:</span
                  >
                </v-card>
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="6"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                  padding-top: 6px;
                "
              >
                <span class="letter" style="padding-left: 4px"
                  >If alive: Has recipient been notified? Yes</span
                >
                <input type="checkbox" id="checkbox" />
                <span class="letter" style="padding-left: 4px">Date:</span>
              </v-col>
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="1"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                "
              >
                <v-card tile style="padding-left: 4px">
                  <input type="checkbox" id="checkbox" />
                  <label for="checkbox" style="font-size: 18px">No</label>
                </v-card>
              </v-col>
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="4"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                "
              >
                <v-card tile style="padding-left: 4px">
                  <input type="checkbox" id="checkbox" />
                  <label for="checkbox" style="font-size: 18px"
                    >Was recipient tested? Yes</label
                  >
                  <input type="checkbox" id="checkbox" />
                  <span class="letter" style="padding-left: 4px">Date:</span>
                </v-card>
              </v-col>
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="1"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                  border-right: 2px solid black;
                "
              >
                <v-card tile style="padding-left: 4px">
                  <input type="checkbox" id="checkbox" />
                  <label for="checkbox" style="font-size: 18px">No</label>
                </v-card>
              </v-col>
            </v-row>

            <v-row no-gutters justify="center">
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="12"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                  border-right: 2px solid black;
                "
              >
                <v-card tile>
                  <span class="letter" style="padding-left: 4px"
                    >Recipient test and result:</span
                  >
                </v-card>
              </v-col>
            </v-row>

            <v-row no-gutters justify="center">
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="12"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                  border-right: 2px solid black;
                "
              >
                <v-card tile>
                  <span class="letter" style="padding-left: 4px"
                    >Additional clinical data and possible risk factors other
                    than blood transfusions:</span
                  >
                </v-card>
              </v-col>
            </v-row>

            <v-row no-gutters justify="center">
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="12"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                  border-right: 2px solid black;
                "
              >
                <v-card class="text-center" tile>
                  <span class="bold letter">Recipient Sample Information</span>
                </v-card>
              </v-col>
            </v-row>

            <v-row no-gutters justify="center">
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="12"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                  border-right: 2px solid black;
                "
              >
                <v-card tile>
                  <span class="letter" style="padding-left: 4px"
                    >Date sample sent to The Blood Center:</span
                  >
                </v-card>
              </v-col>
            </v-row>

            <v-row no-gutters justify="center">
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="12"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                  border-right: 2px solid black;
                "
              >
                <v-card tile>
                  <span class="letter" style="padding-left: 4px"
                    >Patient Unique ID #:</span
                  >
                </v-card>
              </v-col>
            </v-row>

            <v-row no-gutters justify="center">
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="8"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                "
              >
                <v-card tile>
                  <span class="letter" style="padding-left: 4px"
                    >Attending Physician's Name:</span
                  >
                </v-card>
              </v-col>
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="4"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                  border-right: 2px solid black;
                "
              >
                <v-card tile>
                  <span class="letter" style="padding-left: 4px"
                    >Phone Number:</span
                  >
                </v-card>
              </v-col>
            </v-row>

            <v-row no-gutters justify="center">
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="12"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                  border-right: 2px solid black;
                "
              >
                <v-card tile>
                  <span class="letter" style="padding-left: 4px">Address:</span>
                </v-card>
              </v-col>
            </v-row>

            <v-row no-gutters justify="center">
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="6"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                "
              >
                <v-card tile>
                  <span class="letter" style="padding-left: 4px">City:</span>
                </v-card>
              </v-col>
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="2"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                "
              >
                <v-card tile>
                  <span class="letter" style="padding-left: 4px">State:</span>
                </v-card>
              </v-col>
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="4"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                  border-right: 2px solid black;
                "
              >
                <v-card tile>
                  <span class="letter" style="padding-left: 4px"
                    >Zip Code:</span
                  >
                </v-card>
              </v-col>
            </v-row>

            <v-row no-gutters justify="center">
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="8"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                "
              >
                <v-card tile>
                  <span class="letter" style="padding-left: 4px"
                    >Form Completed by:</span
                  >
                </v-card>
              </v-col>
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="4"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                  border-right: 2px solid black;
                "
              >
                <v-card tile>
                  <span class="letter" style="padding-left: 4px">Date:</span>
                </v-card>
              </v-col>
            </v-row>

            <v-row no-gutters justify="center">
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="6"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                "
              >
                <br /><br />
                <span class="letter" style="padding-left: 4px"
                  >Return Copy by Mail or Facsimile to:</span
                >
              </v-col>
              <v-col
                class="v-col"
                cols="12"
                sm="6"
                md="6"
                style="
                  border-left: 2px solid black;
                  border-bottom: 2px solid black;
                  border-right: 2px solid black;
                "
              >
                <v-card tile>
                  <span class="letter" style="padding-left: 4px"
                    >Technical Services</span
                  ><br />
                  <span class="letter" style="padding-left: 4px"
                    >Gulf Coast Regional Blood Center</span
                  ><br />
                  <span class="letter" style="padding-left: 4px"
                    >1400 LaConcha, Houston, TX 77054</span
                  ><br />
                  <span class="letter" style="padding-left: 4px"
                    >Fax Number (713) 791-6651</span
                  ><br />
                  <span class="letter" style="padding-left: 4px"
                    ><span class="bold" style="text-decoration: underline">
                      Test Ordered: Chagas</span
                    ></span
                  >
                </v-card>
              </v-col>
            </v-row>
            <img class="img" src="../assets/chag_footer_1.jpg" alt="" />
          </section>

          <div class="html2pdf__page-break" />

          <section class="pdf-item">
            <v-container>
              <img class="img" src="../assets/chag_header_3.jpg" alt="" />

              <p
                class="text-center"
                style="
                  text-decoration: underline;
                  font-size: 36px;
                  font-weight: bold;
                  font-style: italic;
                "
              >
                Information for the Recipient
              </p>
              <br /><br />
              <p class="letter">
                <span class="bold letter" style="font-style: italic"
                  >Why are we contacting you?</span
                ><br />
                You are being notified because you previously received blood
                from a donor who now tests positive in a test that detects
                infection with
                <span style="font-style: italic">Trypanosoma cruzi</span>.
                Thisis the parasite that causes Chagas’ disease. Because you
                have been exposed to blood from an individual who may have
                Chagas’ disease, we are notifying you and strongly advising that
                you discuss this information with you doctor.
              </p>

              <p class="letter">
                <span class="bold letter" style="font-style: italic"
                  >Why is this testing being done?</span
                ><br />
                Chagas’ disease is caused by a parasite (T. cruzi) that is found
                mostly in Mexico, Central and South America. Humans infected
                with
                <span style="font-style: italic">T. cruzi</span> can infect
                other humans through blood transfusion, but this is very rare.
                There are over 13 million units of blood transfused every year
                in the United States. However, there are only seven documented
                cases of
                <span style="font-style: italic">T. cruzi</span> infection being
                spread by blood transfusion in the United States and Canada over
                the past twenty years. Most individuals infected with
                <span style="font-style: italic">T. cruzi</span> have no
                symptoms. However, after many years the parasite may cause
                damage to muscle, especially in the esophagus, intestine or the
                heart. Because you have been exposed to blood from a blood donor
                who later tested positive, it is possible that you have been
                exposed to
                <span style="font-style: italic">T. cruzi</span> through the
                earlier blood transfusion.
              </p>

              <p class="letter">
                <span class="bold letter" style="font-style: italic"
                  >Am I at risk for getting Chagas’ disease?</span
                ><br />
                It is possible that the blood donor’s test from which you
                received blood was false positive, and not infected with
                <span style="font-style: italic">T. cruzi</span>. However, it is
                strongly recommended that you seek testing for
                <span style="font-style: italic">T. cruzi</span> antibody either
                through an infectious disease specialist, or through your
                physician.
              </p>

              <p class="letter">
                <span class="bold letter" style="font-style: italic"
                  >How do I obtain testing for
                  <span style="font-style: italic">T. cruzi</span>
                  antibody?</span
                ><br />
                There are two options, both of which involve contacting your
                physician to learn more about possible infection with
                <span style="font-style: italic">T. cruzi</span>. Your physician
                can collect samples to provide to the Blood Center for testing
                (This assumes that the blood center will perform the testing,
                which many may choose to perform), or your physician can refer
                you to an infectious disease specialist. If there are no
                infectious disease specialists in your area, your primary health
                care provider can contact the Centers for Disease Control and
                Prevention (<span style="text-decoration: underline"
                  >www.CDC.gov</span
                >) for additional information on diagnosis and testing.<br />
              </p>

              <img class="img" src="../assets/chag_footer_1.jpg" alt="" />
            </v-container>
          </section>
        </section>
      </vue-html2pdf>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LookbackService from "@/services/LookbackService";
import VueHtml2pdf from "vue-html2pdf";

export default {
  components: {
    VueHtml2pdf,
  },
  name: "app",
  data() {
    return {
      htmlToPdfOptions: {
        margin: [0, 20, 20, 0],
        filename: `Initial Notification.pdf`,
        image: {
          type: "jpeg",
          quality: 2,
        },

        jsPDF: {
          format: "a3",
          orientation: "portrait",
        },
      },
      today: "",
      Lookback_ID: "",
      Test_ID: "",
      Disease_Desc: "",
      BUI: "",
      Look_CMP_Code: "",
      Look_CMP_Desc: "",
      Blood_Type: "",
      Look_Ship_Date: "",
      Look_Ship_ID: "",
    };
  },

  mounted() {
    //this.todayDate();
    this.getOneLookback();
  },

  methods: {
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
    async getOneLookback() {
      const response = await LookbackService.getOneLookback({
        id: this.$route.params.id,
      });
      this.Lookback_ID = response.data.Lookback_ID;
      this.Test_ID = response.data.Test_ID;
      this.Disease_Desc = response.data.Disease_Desc;
      this.BUI = response.data.BUI;
      this.Look_CMP_Code = response.data.Look_CMP_Code;
      this.Look_CMP_Desc = response.data.Look_CMP_Desc;
      this.Blood_Type = response.data.Blood_Type;
      this.Look_Ship_Date = response.data.Look_Ship_Date;
      this.Look_Ship_ID = response.data.Look_Ship_ID;
      console.log(this.Lookback_ID);
    },
  },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
.button {
  margin: 10px 10px;
}
#form {
  margin: 0;
  padding: 0;
}
label {
  margin-right: 30px;
  margin-left: 30px;
  margin-top: 5px;
}
h2,
h3 {
  font-weight: bold;
}
.img {
  width: 100%;
}
span.bold {
  font-weight: 900;
}
.letter {
  font-size: 18px;
}
label {
  margin: 5px;
}
</style>