import Container from "../../Shared/Container";

export default function WhatBest() {
  // const bestArr = [
  //   {
  //     icon: "",
  //     title: "",
  //     description: "",
  //   },
  // ];

  return (
    <Container>
      <div className="flex">
        {/* left */}
        <div className="w-1/2"></div>

        {/* right */}
        <div className="w-1/2">
          <p>Why Choose Us</p>
          <h3>What makes us the best.</h3>
        </div>
      </div>
    </Container>
  );
}
