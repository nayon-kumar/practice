import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());

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
      </main>
      <footer></footer>
    </>
  );
}

export default App;
