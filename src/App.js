import logo from './logo.svg';
import './App.css';
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import React from 'react';

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-philip-eschenbacher-rrntx"
});

const chart1 = sdk.createChart({
  chartId: "1e05231d-03de-4a11-a9c8-00d4de2dba2f",
  height: "700px"
});

const chart2 = sdk.createChart({
  chartId: "dff5f49e-87d4-4fc6-9ee0-6371408c506c",
  height: "700px",
  theme: "dark"
});


class MyChart extends React.Component {
  async componentDidMount() {
    await chart1.render(document.getElementById("mongochart1"));
    await chart1.addEventListener("click", (payload) => {
      console.log("CLICK");
      if (payload.target.role === "mark") {
        chart2.setFilter(payload.selectionFilter);
      } else {
        chart2.setFilter({});
      }
    });

    await chart2.render(document.getElementById("mongochart2"));
  }

  render() {
    return(
      <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
        <div style={{minWidth: "700px"}} id="mongochart1" />
        <div style={{minWidth: "700px"}} id="mongochart2" />
      </div>
    );
  }
} 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyChart />
      </header>
    </div>
  );
}

export default App;
