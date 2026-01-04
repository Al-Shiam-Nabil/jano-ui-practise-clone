import DiscoverServices from "./Components/DiscoverServices/DiscoverServices";
import HappierCustomer from "./Components/HappierCustomer/HappierCustomer";
import Navbar from "./Components/Header/Navbar";
import Hero from "./Components/Hero/Hero";
import Support from "./Components/Support/Support";
import TopRated from "./Components/TopRated/TopRated";
import WhatBest from "./Components/WhatBest/WhatBest";

function App() {
  return (
    <>
      <div className="min-h-screen relative">
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        <Hero />

        <Support />

        <TopRated />

        <HappierCustomer />

        <DiscoverServices />

        <WhatBest />
      </div>
    </>
  );
}

export default App;
