// import ClientFeedback from "./Components/ClientFeedback/ClientFeedback";
// import DiscoverServices from "./Components/DiscoverServices/DiscoverServices";
// import DownloadApp from "./Components/DownloadApp/DownloadApp";
// import FillTheForm from "./Components/FillTheForm/FillTheForm";
// import Footer from "./Components/Footer/Footer";
// import HappierCustomer from "./Components/HappierCustomer/HappierCustomer";
import Navbar from "./Components/Header/Navbar";
// import Hero from "./Components/Hero/Hero";
// import OurBlog from "./Components/OurBlog/OurBlog";
// import Support from "./Components/Support/Support";
// import TopRated from "./Components/TopRated/TopRated";
// import WhatBest from "./Components/WhatBest/WhatBest";

function App() {
  return (
    <>
      <div className=" relative">
        <div className="fixed w-full left-0 right-0  top-0 z-50">
          <Navbar />
        </div>
        {/* <Hero />

        <Support />

        <TopRated />

        <HappierCustomer />

        <DiscoverServices />

        <WhatBest />

        <ClientFeedback />
        <DownloadApp />
        <FillTheForm />
        <OurBlog />

        <Footer /> */}
      </div>
    </>
  );
}

export default App;
