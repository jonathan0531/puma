<template>
  <div id="app">
    <v-flex xs12>
      <v-btn class="btn" color="primary" @click="generateReport"
        >Generate Report</v-btn
      >
      <head> </head>
      <body>
        <table id="NAT" style="border: none">
          <!-- Scope of NAT document design -->
          <tr style="border: none">
            <td style="border: none">
              <table id="body" style="border: none">
                <tr id="page" style="border: none">
                  <!-- page 1 -->
                  <td style="border: none">
                    <table id="body" style="width: 100%; border: none">
                      <tr id="phead" style="border: none">
                        <td style="border: none">
                          <!-- page 1 header -->
                          <table style="width: 100%; border: none">
                            <!-- page 1 header -->
                            <tr style="border: none">
                              <td
                                rowspan="2"
                                style="
                                  width: 200px;
                                  border: none;
                                  border-bottom: 1px solid black;
                                "
                              >
                                <img
                                  class="img"
                                  src="../assets/GCRBC-Logo-BLACK-450x133px.png"
                                  alt=""
                                  style="width: 200px"
                                />
                              </td>
                              <td
                                style="
                                  text-align: right;
                                  border-bottom: 2px solid black;
                                  border-top: none;
                                  border-left: none;
                                  border-right: none;
                                "
                              >
                                SOP 1000.28
                              </td>
                            </tr>
                            <tr
                              style="
                                border-right: none;
                                border-bottom: 1px solid black;
                              "
                            >
                              <td
                                style="
                                  text-align: right;
                                  border: none;
                                  border-right: none;
                                "
                              >
                                Page 1 of 2
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr id="pbody" style="border: none">
                        <td style="border: none">
                          <!-- page 1 content -->
                          <h3>URGENT LOOKBACK - RECIPIENT TRACING REQUIRED</h3>
                          {{ today }}
                          <br />
                          <br />
                          <p>
                            Dear
                            <br />
                            We are notifying you that an individual who tested
                            negative on a previous donation has recently tested
                            positive for the viral marker designated below. The
                            FDA requires Blood Centers to notify consignees of
                            the products from any prior donations for the
                            purpose of recipient tracing. Gulf Coast Regional
                            Blood Center will provide testing for the recipient
                            if an indicated component on the enclosed report was
                            transfused at your facility. Any test results will
                            be mailed directly to the recipient's physician and
                            the Medical Director/Designee at your facility.
                            Please complete the attached report for our records
                            even if testing will not be requested on the
                            recipient.
                          </p>

                          <table style="width: 100%">
                            <tr>
                              <th
                                colspan="3"
                                style="
                                  text-align: center;
                                  background-color: #a8a8a8;
                                "
                              >
                                {{ Disease_ID }}
                              </th>
                            </tr>
                            <tr>
                              <td style="padding-left: 4px">
                                {{ Disease_Desc }}
                              </td>
                              <td style="width: 150px; padding-left: 4px">
                                Negative <input type="checkbox" />
                              </td>

                              <td style="width: 150px; padding-left: 4px">
                                Positive <input type="checkbox" checked />
                              </td>
                            </tr>
                            <tr>
                              <td style="padding-left: 4px">
                                Supplemental Test
                              </td>
                              <td style="width: 150px; padding-left: 4px">
                                Negative <input type="checkbox" />
                              </td>

                              <td style="width: 150px; padding-left: 4px">
                                Positive <input type="checkbox" />
                              </td>
                            </tr>
                          </table>
                          <p>
                            You are welcome to contact a Technical Services
                            representative at 713-791-6606 if you have any
                            questions
                            <br />
                            Sincerely,
                          </p>
                          <h4>Luke Harkleroad</h4>
                          <p>
                            Person's Title
                            <br />
                            Enclosure(s) A copy of this letter was faxed or
                            mailed on
                            <u
                              >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</u
                            >
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <img class="img" src="../assets/chag_footer_1.jpg" alt="" />
                <tr id="page2" style="border: none">
                  <!-- page 2 -->
                  <td style="border: none">
                    <table id="body" style="width: 100%; border: none">
                      <tr id="phead" style="border: none">
                        <td style="border: none">
                          <!-- page 2 header -->
                          <table style="width: 100%; border: none">
                            <!-- page 2 header -->
                            <tr style="border: none">
                              <td
                                rowspan="2"
                                style="
                                  width: 200px;
                                  border: none;
                                  border-bottom: 1px solid black;
                                "
                              >
                                <img
                                  class="img"
                                  src="../assets/GCRBC-Logo-BLACK-450x133px.png"
                                  alt=""
                                  style="width: 200px"
                                />
                              </td>
                              <td
                                style="
                                  text-align: right;
                                  border-bottom: 2px solid black;
                                  border-top: none;
                                  border-left: none;
                                  border-right: none;
                                "
                              >
                                SOP 1000.28
                              </td>
                            </tr>
                            <tr
                              style="
                                border-right: none;
                                border-bottom: 1px solid black;
                              "
                            >
                              <td
                                style="
                                  text-align: right;
                                  border: none;
                                  border-right: none;
                                "
                              >
                                Page 2 of 2
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr id="pbody" style="border: none">
                        <td style="border: none">
                          <!-- page 2 content -->
                          <h3>Lookback Notification Recipient Status Report</h3>
                          <table
                            style="width: 100%"
                            v-if="Disease_ID === 'HIV'"
                          >
                            <tr>
                              <td><b>&nbsp;Tests Ordered</b></td>
                              <td style="text-align: center">
                                <input
                                  type="checkbox"
                                  checked
                                />&nbsp;Anti-HIV-1/2+O & HIV NAT
                              </td>
                              <td style="text-align: center">
                                <input type="checkbox" />&nbsp;Anti-HCV & HCV
                                NAT
                              </td>
                            </tr>
                            <tr>
                              <td></td>
                              <td style="text-align: center">
                                <input type="checkbox" />&nbsp;NAT WNV
                              </td>
                              <td style="text-align: center">
                                <input type="checkbox" />&nbsp;HBsAg and HBV NAT
                              </td>
                            </tr>
                          </table>
                          <table
                            style="width: 100%"
                            v-else-if="Disease_ID === 'HCV'"
                          >
                            <tr>
                              <td><b>&nbsp;Tests Ordered</b></td>
                              <td style="text-align: center">
                                <input type="checkbox" />&nbsp;Anti-HIV-1/2+O &
                                HIV NAT
                              </td>
                              <td style="text-align: center">
                                <input type="checkbox" checked />&nbsp;Anti-HCV
                                & HCV NAT
                              </td>
                            </tr>
                            <tr>
                              <td></td>
                              <td style="text-align: center">
                                <input type="checkbox" />&nbsp;NAT WNV
                              </td>
                              <td style="text-align: center">
                                <input type="checkbox" />&nbsp;HBsAg and HBV NAT
                              </td>
                            </tr>
                          </table>
                          <table
                            style="width: 100%"
                            v-else-if="Disease_ID === 'WNV'"
                          >
                            <tr>
                              <td><b>&nbsp;Tests Ordered</b></td>
                              <td style="text-align: center">
                                <input type="checkbox" />&nbsp;Anti-HIV-1/2+O &
                                HIV NAT
                              </td>
                              <td style="text-align: center">
                                <input type="checkbox" />&nbsp;Anti-HCV & HCV
                                NAT
                              </td>
                            </tr>
                            <tr>
                              <td></td>
                              <td style="text-align: center">
                                <input type="checkbox" checked />&nbsp;NAT WNV
                              </td>
                              <td style="text-align: center">
                                <input type="checkbox" />&nbsp;HBsAg and HBV NAT
                              </td>
                            </tr>
                          </table>
                          <table
                            style="width: 100%"
                            v-else-if="Disease_ID === 'HBV'"
                          >
                            <tr>
                              <td><b>&nbsp;Tests Ordered</b></td>
                              <td style="text-align: center">
                                <input type="checkbox" />&nbsp;Anti-HIV-1/2+O &
                                HIV NAT
                              </td>
                              <td style="text-align: center">
                                <input type="checkbox" />&nbsp;Anti-HCV & HCV
                                NAT
                              </td>
                            </tr>
                            <tr>
                              <td></td>
                              <td style="text-align: center">
                                <input type="checkbox" />&nbsp;NAT WNV
                              </td>
                              <td style="text-align: center">
                                <input type="checkbox" checked />&nbsp;HBsAg and
                                HBV NAT
                              </td>
                            </tr>
                          </table>
                          <table style="width: 100%" v-else>
                            <tr>
                              <td><b>&nbsp;Tests Ordered</b></td>
                              <td style="text-align: center">
                                <input type="checkbox" />&nbsp;Anti-HIV-1/2+O &
                                HIV NAT
                              </td>
                              <td style="text-align: center">
                                <input type="checkbox" />&nbsp;Anti-HCV & HCV
                                NAT
                              </td>
                            </tr>
                            <tr>
                              <td></td>
                              <td style="text-align: center">
                                <input type="checkbox" />&nbsp;NAT WNV
                              </td>
                              <td style="text-align: center">
                                <input type="checkbox" />&nbsp;HBsAg and HBV NAT
                              </td>
                            </tr>
                          </table>
                          <b>Recipient Testing Requirements:</b>
                          <ul>
                            <li>
                              Collect blood samples in two (2) 7mL EDTA
                              anticoagulant tubes
                            </li>
                            <li>
                              Label the samples with: a unique recipient ID
                              number or code (do not use the patient's name),
                              name of the recipient's physician and date the
                              sample is collected.
                            </li>
                            <li>
                              Send the coded blood sample <b>and</b> the
                              completed
                              <i
                                ><u
                                  >Lookback Notification Recipient Status
                                  Report</u
                                ></i
                              >
                              to Gulf Coast Regional Blood Center, "National
                              Donor Testing Services" Laboratory, attention:
                              Donor Services.
                            </li>
                            <li>
                              Please contact a Donor Services representative at
                              713-791-6606 to alert them that you are sending a
                              recipient sample for testing.
                            </li>
                            <li>
                              <b
                                >Note: samples submitted without this form
                                <u>can not be tested</u></b
                              >
                            </li>
                          </ul>
                          <table style="width: 100%">
                            <tr>
                              <td style="background-color: #e8e8e8">
                                &nbsp;Transfusing Facility
                              </td>
                              <td colspan="4"></td>
                            </tr>
                            <tr>
                              <td style="background-color: #e8e8e8">
                                &nbsp;Recipient Unique ID#:
                              </td>
                              <td colspan="4"></td>
                            </tr>
                            <tr>
                              <td style="background-color: #e8e8e8">
                                &nbsp;Unit Number
                              </td>
                              <td style="background-color: #e8e8e8">
                                &nbsp;Component Code/Type
                              </td>
                              <td style="background-color: #e8e8e8">
                                &nbsp;Blood Type
                              </td>
                              <td style="background-color: #e8e8e8">
                                &nbsp;Shipment Date
                              </td>
                              <td style="background-color: #e8e8e8">
                                &nbsp;Shipment #
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: center">{{ BUI }}</td>
                              <td style="text-align: center">
                                {{ Look_CMP_Code }} / {{ Look_CMP_Desc }}
                              </td>
                              <td style="text-align: center">
                                {{ Blood_Type }}
                              </td>
                              <td
                                style="text-align: center"
                                v-if="Look_Ship_Date == '12/31/1969'"
                              >N/A</td>
                              <td style="text-align: center" v-else>
                                {{ Look_Ship_Date }}
                              </td>
                              <td
                                style="text-align: center"
                                v-if="Look_Ship_ID == NULL"
                              >N/A</td>
                              <td style="text-align: center" v-else>
                                {{ Look_Ship_ID }}
                              </td>
                            </tr>
                            <tr>
                              <td
                                colspan="5"
                                style="
                                  background-color: #999999;
                                  text-align: center;
                                "
                              >
                                <b>Please Check The Applicable Response</b>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                &nbsp;<input type="checkbox" />&nbsp;Unit
                                Discarded
                              </td>
                              <td>
                                &nbsp;<input type="checkbox" />&nbsp;Unit
                                Expired
                              </td>
                              <td colspan="3">
                                &nbsp;<input type="checkbox" />&nbsp;Used for
                                Further Manufacturing
                              </td>
                            </tr>
                            <tr>
                              <td colspan="3">
                                &nbsp;<input type="checkbox" />&nbsp;Unit
                                Returned to Gulf Coast Regional Blood Center
                              </td>
                              <td colspan="2">&nbsp;Date:</td>
                            </tr>
                            <tr>
                              <td colspan="3">
                                &nbsp;<input type="checkbox" />&nbsp;Unit
                                Transfused
                                <b>(Please Complete Recipient Information)</b>
                              </td>
                              <td colspan="2">&nbsp;Date:</td>
                            </tr>
                            <tr>
                              <td
                                colspan="5"
                                style="
                                  background-color: #999999;
                                  text-align: center;
                                "
                              >
                                <b>Recipient Information</b>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2">
                                &nbsp;<input type="checkbox" />&nbsp;Recipient
                                information is not available
                              </td>
                              <td colspan="3">
                                &nbsp;<input type="checkbox" />&nbsp;Recipient
                                testing not desired at this time
                              </td>
                            </tr>
                            <tr>
                              <td rowspan="3">&nbsp;Recipient Status:</td>
                              <td>
                                &nbsp;<input type="checkbox" />&nbsp;Alive
                              </td>
                              <td colspan="3">
                                &nbsp;Has recipient been notified?
                                <input type="checkbox" />&nbsp;No
                                <input type="checkbox" />&nbsp;Yes Date:
                              </td>
                            </tr>
                            <tr>
                              <td>
                                &nbsp;<input type="checkbox" />&nbsp;Deceased
                              </td>
                              <td colspan="3">Date:</td>
                            </tr>
                            <tr>
                              <td colspan="5">
                                &nbsp;<input type="checkbox" />&nbsp;Unknown
                              </td>
                            </tr>
                            <tr>
                              <td
                                colspan="5"
                                style="
                                  background-color: #999999;
                                  text-align: center;
                                "
                              >
                                <b>Consignee Information</b>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="3">
                                &nbsp;Attending Physician's Name:
                              </td>
                              <td colspan="2">&nbsp;Phone#:</td>
                            </tr>
                            <tr>
                              <td colspan="5">
                                &nbsp;Transfusion Service Medical Director's
                                Name:
                              </td>
                            </tr>
                            <tr>
                              <td colspan="5">&nbsp;Address:</td>
                            </tr>
                            <tr>
                              <td colspan="3">&nbsp;Address:</td>
                              <td colspan="2">&nbsp;Phone#:</td>
                            </tr>
                            <tr>
                              <td colspan="3">&nbsp;Form Completed By:</td>
                              <td colspan="2">&nbsp;Date:</td>
                            </tr>
                          </table>
                          <p style="text-align: center">
                            Return by Fax to: Technical Services
                            <br />
                            Phone Number (713) 791-6606
                            <br />
                            Fax Number (713) 791-6651
                          </p>
                        </td>
                      </tr>
                      <img
                        class="img"
                        src="../assets/chag_footer_1.jpg"
                        alt=""
                      />
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
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
            <body>
              <table id="NAT" style="border: none; max-height: 1000px">
                <!-- Scope of NAT document design -->
                <tr style="border: none">
                  <td style="border: none">
                    <table id="body" style="border: none">
                      <tr id="page" style="border: none">
                        <!-- page 1 -->
                        <td style="border: none">
                          <table id="body" style="width: 100%; border: none">
                            <tr id="phead" style="border: none">
                              <td style="border: none">
                                <!-- page 1 header -->
                                <table style="width: 100%; border: none">
                                  <!-- page 1 header -->
                                  <tr style="border: none">
                                    <td
                                      rowspan="2"
                                      style="
                                        width: 200px;
                                        border: none;
                                        border-bottom: 1px solid black;
                                      "
                                    >
                                      <img
                                        class="img"
                                        src="../assets/GCRBC-Logo-BLACK-450x133px.png"
                                        alt=""
                                        style="width: 200px"
                                      />
                                    </td>
                                    <td
                                      style="
                                        text-align: right;
                                        border-bottom: 2px solid black;
                                        border-top: none;
                                        border-left: none;
                                        border-right: none;
                                      "
                                    >
                                      SOP 1000.28
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      border-right: none;
                                      border-left: none;
                                      border-top: none;
                                      border-bottom: 1px solid black;
                                    "
                                  >
                                    <td
                                      style="
                                        text-align: right;
                                        border: none;
                                        border-right: none;
                                      "
                                    >
                                      Page 1 of 2
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr id="pbody" style="border: none">
                              <td
                                style="
                                  border: none;
                                  height: 910px;
                                  vertical-align: top;
                                "
                              >
                                <!-- page 1 content -->
                                <h3>
                                  URGENT LOOKBACK - RECIPIENT TRACING REQUIRED
                                </h3>
                                {{ today }}
                                <br />
                                <br />
                                <p>
                                  Dear
                                  <br />
                                  We are notifying you that an individual who
                                  tested negative on a previous donation has
                                  recently tested positive for the viral marker
                                  designated below. The FDA requires Blood
                                  Centers to notify consignees of the products
                                  from any prior donations for the purpose of
                                  recipient tracing. Gulf Coast Regional Blood
                                  Center will provide testing for the recipient
                                  if an indicated component on the enclosed
                                  report was transfused at your facility. Any
                                  test results will be mailed directly to the
                                  recipient's physician and the Medical
                                  Director/Designee at your facility. Please
                                  complete the attached report for our records
                                  even if testing will not be requested on the
                                  recipient.
                                </p>

                                <table style="width: 100%">
                                  <tr>
                                    <th
                                      colspan="3"
                                      style="
                                        text-align: center;
                                        background-color: #a8a8a8;
                                      "
                                    >
                                      {{ Disease_ID }}
                                    </th>
                                  </tr>
                                  <tr>
                                    <td style="padding-left: 4px">
                                      {{ Disease_Desc }}
                                    </td>
                                    <td style="width: 150px; padding-left: 4px">
                                      Negative <input type="checkbox" />
                                    </td>

                                    <td style="width: 150px; padding-left: 4px">
                                      Positive <input type="checkbox" checked />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding-left: 4px">
                                      Supplemental Test
                                    </td>
                                    <td style="width: 150px; padding-left: 4px">
                                      Negative <input type="checkbox" />
                                    </td>

                                    <td style="width: 150px; padding-left: 4px">
                                      Positive <input type="checkbox" />
                                    </td>
                                  </tr>
                                </table>
                                <p>
                                  You are welcome to contact a Technical
                                  Services representative at 713-791-6606 if you
                                  have any questions
                                  <br />
                                  Sincerely,
                                </p>
                                <h4>Luke Harkleroad</h4>
                                <p>
                                  Person's Title
                                  <br />
                                  Enclosure(s) A copy of this letter was faxed
                                  or mailed on
                                  <u
                                    >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</u
                                  >
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <img
                        class="img"
                        src="../assets/chag_footer_1.jpg"
                        alt=""
                      /><br /><br /><br /><br />
                      <div class="html2pdf__page-break" />
                      <tr id="page" style="border: none">
                        <!-- page 2 -->

                        <td style="border: none">
                          <table id="body" style="width: 100%; border: none">
                            <tr id="phead" style="border: none">
                              <td style="border: none">
                                <!-- page 2 header -->
                                <table style="width: 100%; border: none">
                                  <!-- page 2 header -->
                                  <tr style="border: none">
                                    <td
                                      rowspan="2"
                                      style="
                                        width: 200px;
                                        border: none;
                                        border-bottom: 1px solid black;
                                      "
                                    >
                                      <img
                                        class="img"
                                        src="../assets/GCRBC-Logo-BLACK-450x133px.png"
                                        alt=""
                                        style="width: 200px"
                                      />
                                    </td>
                                    <td
                                      style="
                                        text-align: right;
                                        border-bottom: 2px solid black;
                                        border-top: none;
                                        border-left: none;
                                        border-right: none;
                                      "
                                    >
                                      SOP 1000.28
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      border-right: none;
                                      border-left: none;
                                      border-top: none;
                                      border-bottom: 1px solid black;
                                    "
                                  >
                                    <td
                                      style="
                                        text-align: right;
                                        border: none;
                                        border-right: none;
                                      "
                                    >
                                      Page 2 of 2
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr id="pbody" style="border: none">
                              <td
                                style="
                                  border: none;
                                  height: 910px;
                                  vertical-align: top;
                                "
                              >
                                <!-- page 2 content -->
                                <h3>
                                  Lookback Notification Recipient Status Report
                                </h3>
                                <table
                                  style="width: 100%"
                                  v-if="Disease_ID === 'HIV'"
                                >
                                  <tr>
                                    <td><b>&nbsp;Tests Ordered</b></td>
                                    <td style="text-align: center">
                                      <input
                                        type="checkbox"
                                        checked
                                      />&nbsp;Anti-HIV-1/2+O & HIV NAT
                                    </td>
                                    <td style="text-align: center">
                                      <input type="checkbox" />&nbsp;Anti-HCV &
                                      HCV NAT
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td style="text-align: center">
                                      <input type="checkbox" />&nbsp;NAT WNV
                                    </td>
                                    <td style="text-align: center">
                                      <input type="checkbox" />&nbsp;HBsAg and
                                      HBV NAT
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  style="width: 100%"
                                  v-else-if="Disease_ID === 'HCV'"
                                >
                                  <tr>
                                    <td><b>&nbsp;Tests Ordered</b></td>
                                    <td style="text-align: center">
                                      <input
                                        type="checkbox"
                                      />&nbsp;Anti-HIV-1/2+O & HIV NAT
                                    </td>
                                    <td style="text-align: center">
                                      <input
                                        type="checkbox"
                                        checked
                                      />&nbsp;Anti-HCV & HCV NAT
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td style="text-align: center">
                                      <input type="checkbox" />&nbsp;NAT WNV
                                    </td>
                                    <td style="text-align: center">
                                      <input type="checkbox" />&nbsp;HBsAg and
                                      HBV NAT
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  style="width: 100%"
                                  v-else-if="Disease_ID === 'WNV'"
                                >
                                  <tr>
                                    <td><b>&nbsp;Tests Ordered</b></td>
                                    <td style="text-align: center">
                                      <input
                                        type="checkbox"
                                      />&nbsp;Anti-HIV-1/2+O & HIV NAT
                                    </td>
                                    <td style="text-align: center">
                                      <input type="checkbox" />&nbsp;Anti-HCV &
                                      HCV NAT
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td style="text-align: center">
                                      <input type="checkbox" checked />&nbsp;NAT
                                      WNV
                                    </td>
                                    <td style="text-align: center">
                                      <input type="checkbox" />&nbsp;HBsAg and
                                      HBV NAT
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  style="width: 100%"
                                  v-else-if="Disease_ID === 'HBV'"
                                >
                                  <tr>
                                    <td><b>&nbsp;Tests Ordered</b></td>
                                    <td style="text-align: center">
                                      <input
                                        type="checkbox"
                                      />&nbsp;Anti-HIV-1/2+O & HIV NAT
                                    </td>
                                    <td style="text-align: center">
                                      <input type="checkbox" />&nbsp;Anti-HCV &
                                      HCV NAT
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td style="text-align: center">
                                      <input type="checkbox" />&nbsp;NAT WNV
                                    </td>
                                    <td style="text-align: center">
                                      <input
                                        type="checkbox"
                                        checked
                                      />&nbsp;HBsAg and HBV NAT
                                    </td>
                                  </tr>
                                </table>
                                <table style="width: 100%" v-else>
                                  <tr>
                                    <td><b>&nbsp;Tests Ordered</b></td>
                                    <td style="text-align: center">
                                      <input
                                        type="checkbox"
                                      />&nbsp;Anti-HIV-1/2+O & HIV NAT
                                    </td>
                                    <td style="text-align: center">
                                      <input type="checkbox" />&nbsp;Anti-HCV &
                                      HCV NAT
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td style="text-align: center">
                                      <input type="checkbox" />&nbsp;NAT WNV
                                    </td>
                                    <td style="text-align: center">
                                      <input type="checkbox" />&nbsp;HBsAg and
                                      HBV NAT
                                    </td>
                                  </tr>
                                </table>
                                <b>Recipient Testing Requirements:</b>
                                <ul>
                                  <li>
                                    Collect blood samples in two (2) 7mL EDTA
                                    anticoagulant tubes
                                  </li>
                                  <li>
                                    Label the samples with: a unique recipient
                                    ID number or code (do not use the patient's
                                    name), name of the recipient's physician and
                                    date the sample is collected.
                                  </li>
                                  <li>
                                    Send the coded blood sample <b>and</b> the
                                    completed
                                    <i
                                      ><u
                                        >Lookback Notification Recipient Status
                                        Report</u
                                      ></i
                                    >
                                    to Gulf Coast Regional Blood Center,
                                    "National Donor Testing Services"
                                    Laboratory, attention: Donor Services.
                                  </li>
                                  <li>
                                    Please contact a Donor Services
                                    representative at 713-791-6606 to alert them
                                    that you are sending a recipient sample for
                                    testing.
                                  </li>
                                  <li>
                                    <b
                                      >Note: samples submitted without this form
                                      <u>can not be tested</u></b
                                    >
                                  </li>
                                </ul>
                                <table style="width: 100%">
                                  <tr>
                                    <td style="background-color: #e8e8e8">
                                      &nbsp;Transfusing Facility
                                    </td>
                                    <td colspan="4"></td>
                                  </tr>
                                  <tr>
                                    <td style="background-color: #e8e8e8">
                                      &nbsp;Recipient Unique ID#:
                                    </td>
                                    <td colspan="4"></td>
                                  </tr>
                                  <tr>
                                    <td style="background-color: #e8e8e8">
                                      &nbsp;Unit Number
                                    </td>
                                    <td style="background-color: #e8e8e8">
                                      &nbsp;Component Code/Type
                                    </td>
                                    <td style="background-color: #e8e8e8">
                                      &nbsp;Blood Type
                                    </td>
                                    <td style="background-color: #e8e8e8">
                                      &nbsp;Shipment Date
                                    </td>
                                    <td style="background-color: #e8e8e8">
                                      &nbsp;Shipment #
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      {{ BUI }}
                                    </td>
                                    <td style="text-align: center">
                                      {{ Look_CMP_Code }} / {{ Look_CMP_Desc }}
                                    </td>
                                    <td style="text-align: center">
                                      {{ Blood_Type }}
                                    </td>
                                    <td
                                      style="text-align: center"
                                      v-if="Look_Ship_Date == '12/31/1969'"
                                    >N/A</td>
                                    <td style="text-align: center" v-else>
                                      {{ Look_Ship_Date }}
                                    </td>
                                    <td
                                      style="text-align: center"
                                      v-if="Look_Ship_ID == NULL"
                                    >N/A</td>
                                    <td style="text-align: center" v-else>
                                      {{ Look_Ship_ID }}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      colspan="5"
                                      style="
                                        background-color: #999999;
                                        text-align: center;
                                      "
                                    >
                                      <b
                                        >Please Check The Applicable Response</b
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      &nbsp;<input type="checkbox" />&nbsp;Unit
                                      Discarded
                                    </td>
                                    <td>
                                      &nbsp;<input type="checkbox" />&nbsp;Unit
                                      Expired
                                    </td>
                                    <td colspan="3">
                                      &nbsp;<input type="checkbox" />&nbsp;Used
                                      for Further Manufacturing
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="3">
                                      &nbsp;<input type="checkbox" />&nbsp;Unit
                                      Returned to Gulf Coast Regional Blood
                                      Center
                                    </td>
                                    <td colspan="2">&nbsp;Date:</td>
                                  </tr>
                                  <tr>
                                    <td colspan="3">
                                      &nbsp;<input type="checkbox" />&nbsp;Unit
                                      Transfused
                                      <b
                                        >(Please Complete Recipient
                                        Information)</b
                                      >
                                    </td>
                                    <td colspan="2">&nbsp;Date:</td>
                                  </tr>
                                  <tr>
                                    <td
                                      colspan="5"
                                      style="
                                        background-color: #999999;
                                        text-align: center;
                                      "
                                    >
                                      <b>Recipient Information</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">
                                      &nbsp;<input
                                        type="checkbox"
                                      />&nbsp;Recipient information is not
                                      available
                                    </td>
                                    <td colspan="3">
                                      &nbsp;<input
                                        type="checkbox"
                                      />&nbsp;Recipient testing not desired at
                                      this time
                                    </td>
                                  </tr>
                                  <tr>
                                    <td rowspan="3">&nbsp;Recipient Status:</td>
                                    <td>
                                      &nbsp;<input type="checkbox" />&nbsp;Alive
                                    </td>
                                    <td colspan="3">
                                      &nbsp;Has recipient been notified?
                                      <input type="checkbox" />&nbsp;No
                                      <input type="checkbox" />&nbsp;Yes Date:
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      &nbsp;<input
                                        type="checkbox"
                                      />&nbsp;Deceased
                                    </td>
                                    <td colspan="3">Date:</td>
                                  </tr>
                                  <tr>
                                    <td colspan="5">
                                      &nbsp;<input
                                        type="checkbox"
                                      />&nbsp;Unknown
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      colspan="5"
                                      style="
                                        background-color: #999999;
                                        text-align: center;
                                      "
                                    >
                                      <b>Consignee Information</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="3">
                                      &nbsp;Attending Physician's Name:
                                    </td>
                                    <td colspan="2">&nbsp;Phone#:</td>
                                  </tr>
                                  <tr>
                                    <td colspan="5">
                                      &nbsp;Transfusion Service Medical
                                      Director's Name:
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="5">&nbsp;Address:</td>
                                  </tr>
                                  <tr>
                                    <td colspan="3">&nbsp;Address:</td>
                                    <td colspan="2">&nbsp;Phone#:</td>
                                  </tr>
                                  <tr>
                                    <td colspan="3">
                                      &nbsp;Form Completed By:
                                    </td>
                                    <td colspan="2">&nbsp;Date:</td>
                                  </tr>
                                </table>
                                <p style="text-align: center">
                                  Return by Fax to: Technical Services
                                  <br />
                                  Phone Number (713) 791-6606
                                  <br />
                                  Fax Number (713) 791-6651
                                </p>
                              </td>
                            </tr>
                          </table>
                          <img
                            class="img"
                            src="../assets/chag_footer_1.jpg"
                            alt=""
                          />
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </section>
        </vue-html2pdf>
      </div>
    </v-flex>
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
        filename: `NAT Notification.pdf`,
        image: {
          type: "jpeg",
          quality: 2,
        },
        jsPDF: {
          format: "a3",
          orientation: "portrait",
        },
      },
      Lookback_ID: "",
      BUI: "",
      Blood_Type: "",
      Look_CMP_Code: "",
      Org_ID: "",
      Donor_ID: "",
      Look_Visit_Date: "",
      Look_BUI: "",
      Look_CMP_Desc: "",
      Look_CMP_Group: "",
      Look_Loc_Code: "",
      Test_ID: "",
      Disease_ID: "",
      Disease_Desc: "",
      Look_Ship_Date: "",
      Look_Ship_ID: "",
      today: "",
    };
  },
  mounted() {
    this.getNatLookback();
  },
  methods: {
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
    async getNatLookback() {
      const response = await LookbackService.getNatLookback({
        id: this.$route.params.id,
      });
      this.Lookback_ID = response.data.Lookback_ID;
      this.BUI = response.data.BUI;
      this.Look_CMP_Code = response.data.Look_CMP_Code;
      this.Look_CMP_Desc = response.data.Look_CMP_Desc;
      this.Blood_Type = response.data.Blood_Type;
      this.Disease_ID = response.data.Disease_ID;
      this.Disease_Desc = response.data.Disease_Desc;
      this.Test_ID = response.data.Test_ID;
      var Look_Ship_Date = new Date(response.data.Look_Ship_Date);
      var dd = Look_Ship_Date.getDate();
      var mm = Look_Ship_Date.getMonth() + 1;
      var yyyy = Look_Ship_Date.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }

      if (mm < 10) {
        mm = "0" + mm;
      }
      Look_Ship_Date = mm + "/" + dd + "/" + yyyy;
      this.Look_Ship_Date = Look_Ship_Date;
      this.Look_Ship_ID = response.data.Look_Ship_ID;

      var today = new Date();
      var dd2 = today.getDate();

      var mm2 = today.getMonth() + 1;
      var yyyy2 = today.getFullYear();
      if (dd2 < 10) {
        dd2 = "0" + dd2;
      }

      if (mm2 < 10) {
        mm2 = "0" + mm2;
      }
      today = mm2 + "/" + dd2 + "/" + yyyy2;
      this.today = today;
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
.btn {
  margin-top: 10px;
  margin-bottom: 15px;
}
#form {
  margin: 0;
  padding: 0;
}
table {
  border: 1px solid black;
  margin-top: 15px;
  margin-bottom: 15px;
}
th {
  border: 1px solid black;
}
td {
  border: 1px solid black;
}
tr {
  border: 1px solid black;
}
label {
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 5px;
}
h2,
h3 {
  font-weight: bold;
}
.img {
  width: 100%;
}
#input {
  margin-left: 15px;
}
#header {
  text-align: center;
  vertical-align: middle;
  background: #ccc;
}
</style>