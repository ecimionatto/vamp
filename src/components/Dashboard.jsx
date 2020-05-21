import React, { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import TraceWorkflow from "./TraceWorkflow";
const Dashboard = () => {
  const [traces, setTraces] = useState([]);

  const client = new W3CWebSocket("ws://127.0.0.1:8300/ws/trace/accesstoken");

  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
      setInterval(function () {
        client.send("keep-alive");
      }, 20000);
    };
    client.onmessage = (message) => {
      try {
        const data = JSON.parse(message.data);
        if ("type" in data && "trace" in data) {
          if (data["type"] === "trace") {
            setTraces(traces.concat(data["trace"]));
          }
        }
      } catch (e) {
        console.log(e);
      }
    };
  });

  // const handleSubmit = (event) => {
  //   if (event) {
  //     event.preventDefault();

  //     const jsonBody = JSON.stringify({
  //       message: event.target.form.message.value,
  //     });

  //     console.log(jsonBody);

  //     fetch("http://locahost:8080", {
  //       crossDomain: true,
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: jsonBody,
  //     });

  //     return this.props.history.push("/backend");
  //   }
  // };

  return (
    <form>
      <div className="container">
        <h1>Traces</h1>
        <TraceWorkflow props={traces}/>
        <div className="card-header">
          {traces.map((t) => (
            <div className="card" key={t.id}>
              <div className="card-body">
                <p className="card-title">id: {t.id}</p>
                <p className="card-text">start:{t.start}</p>
                <p className="card-text"> exec_time: {t.exec_time} </p>
                <p className="card-text">origin: {t.origin}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default Dashboard;
