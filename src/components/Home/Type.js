import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ paddingLeft: "40px" }}>
    <Typewriter
      options={{
        strings: [
          "      Software Developer",
          "      Freelancer",
          "      Full Stack Developer",
          "      Cloud Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </div>
  );
}

export default Type;
