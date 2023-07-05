import React from "react";
// import from "../assets"
import vg from "../assets/2.webp";
import {
  AiFillGooglePlusCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Tech</h1>
          <p>Solution offered by Tech</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="" />
        <div>
          <p>
            Whether you are a technology transfer manager seeking licensees for
            an innovation or an entrepreneur launching a technology-based
            startup, constructing an effective technology overview and its value
            proposition is paramount
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            beatae provident nobis enim! Dolore obcaecati sit maxime neque
            impedit natus quod officiis deserunt et sunt cumque asperiores
            error, odit dicta? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Nisi beatae provident nobis enim! Dolore obcaecati
            sit maxime neque impedit natus quod officiis deserunt et sunt cumque
            asperiores error, odit dicta? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Nisi beatae provident nobis enim!
            Dolore obcaecati sit maxime neque impedit natus quod officiis
            deserunt et sunt cumque asperiores error, odit dicta?
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGooglePlusCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillYoutube />
              <p>YouTube</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.9s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
