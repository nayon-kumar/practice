import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import ResultChart from "./components/ResultChart/ResultChart";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());
const marksPromise = fetch("marks.json").then((res) => res.json());

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Suspense
          fallback={
            <div className="flex items-center justify-center mt-30">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          }
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
        <Suspense
          fallback={
            <div className="flex items-center justify-center mt-30">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          }
        >
          <ResultChart marksPromise={marksPromise}></ResultChart>
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
