import React from 'react';
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-philip-eschenbacher-rrntx"
});

const chart1 = sdk.createChart({
  chartId: "1e05231d-03de-4a11-a9c8-00d4de2dba2f",
  height: "700px",
  theme: "dark"
});

const chart2 = sdk.createChart({
  chartId: "dff5f49e-87d4-4fc6-9ee0-6371408c506c",
  height: "700px",
  theme: "dark"
});


class MyChart extends React.Component {
  constructor(props) {
      super(props);

      this.state = {filterTitle: "Kein Filter"}
  }

  async componentDidMount() {
    await chart1.render(document.getElementById("mongochart1"));
    await chart2.render(document.getElementById("mongochart2"));
    await chart1.addEventListener("click", (payload) => {
        if (payload.target.role === "mark") {
          chart2.setFilter(payload.selectionFilter);
          this.setState(
              {filterTitle: payload.selectionFilter.Lodge_Name}
          )
        } else {
          chart2.setFilter({});
          this.setState(
              {filterTitle: "Kein Filter ausgewählt"}
          )
        }
      });
  }

  render() {
    return(
        <div>
            <h1>Ski-Resort Management Dashboard</h1>
            <p>Aktiver Filter: <strong>{this.state.filterTitle}</strong></p>
            <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                <div style={{minWidth: "700px"}} id="mongochart1" />
                <div style={{minWidth: "700px"}} id="mongochart2">
            </div>
        </div>
      </div>
    );
  }
} 

export default MyChart;