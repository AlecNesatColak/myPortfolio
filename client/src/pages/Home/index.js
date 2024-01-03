import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";

function Home() {
  return (
    <div>
      <Header />
      <div className="bg-tertiary px-40 ">
        <Intro />
      </div>
    </div>
  );
}

export default Home;
