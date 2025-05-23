import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useFlag, useStatus } from "@featurevisor/react";

function App() {
  const { isReady } = useStatus();
  const [count, setCount] = useState(0);

  const isTestFeatureEnabled = useFlag("test-feature", {
    country: new URLSearchParams(window.location.search).get("country"),
  });

  return (
    <>
      {isReady ? (
        <>
          <h1>Featurevisor is ready</h1>

          <h2>
            Test feature is {isTestFeatureEnabled ? "enabled" : "disabled"}
          </h2>
        </>
      ) : (
        <h1>Featurevisor is not ready</h1>
      )}

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Hello from AWS with a new version</h2>
      <h2>App Version: {APP_VERSION}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
