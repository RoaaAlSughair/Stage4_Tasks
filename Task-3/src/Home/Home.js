import React from "react";
import NavBar from "../Styled Elements/NavBar/NavBar";
import Container from "../Styled Elements/Container/Container";
import Footer from "../Styled Elements/Footer/Footer";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <NavBar />
      <Container type="whole-page home-page">
        <Container type="form">
          Cards
        </Container>
        <aside>
          <section className="accounts"></section>
          <section className="suggestions"></section>
          <Footer />
        </aside>
      </Container>
    </div>
  );
}
