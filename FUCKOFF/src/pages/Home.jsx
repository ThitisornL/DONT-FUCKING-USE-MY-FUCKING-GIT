import React from "react";

const Home = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* YouTube Video Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: -1,
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/UzHqDnQvSxQ?autoplay=1&mute=1&loop=1&playlist=UzHqDnQvSxQ&controls=0&showinfo=0&modestbranding=1&rel=0"
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="YouTube Background Video"
          style={{
            position: "absolute",
            top: "-20%",
            left: "0%",
            width: "100%",
            height: "120%",
            pointerEvents: "none",
          }}
        ></iframe>
      </div>

      {/* Content Overlay */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)", // 50% transparent white
          borderRadius: "16px",
          padding: "40px",
          maxWidth: "700px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(4px)",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "20px",
             color: "#111",
            textShadow: "0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f",
          }}
        >
          Welcome to Cardfight!! Vanguard
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.7",
            color: "#111",
            textShadow: "0 0 5px #00f",
          }}
        >
          <strong>Cardfight!! Vanguard</strong> is a Japanese trading card game and multimedia
          franchise created by Akira Ito, Satoshi Nakamura, and Bushiroad. Players battle each other
          using powerful units from different clans, aiming to ride higher grades and perform
          impactful combos. Vanguard offers a thrilling and strategic experience with beautifully
          illustrated cards and deep lore.
        </p>
        <br />
        <p
          style={{
            fontSize: "1rem",
            color: "#222",
            textShadow: "0 0 5px #00f",
          }}
        >
          Whether you're a competitive fighter or a collector, Vanguard has something for everyone!
        </p>
      </div>
    </div>
  );
};

export default Home;
