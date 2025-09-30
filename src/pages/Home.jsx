import React from "react";
import NavBar from "../components/NavBar";
import Pro from "../assets/Pro.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Figma from "../assets/Figma.png";
import Firebase from "../assets/Firebase.png";
import Html from "../assets/Html.png";
import Java from "../assets/Java.png";
import Js from "../assets/Js.png";
import Jsx from "../assets/Jsx.png";
import Node from "../assets/Node.png";
import Spring from "../assets/Spring.png";
import Css from "../assets/Css.png";
export default function Home() {
  const hc = { color: "yellow" };

  return (
    <>
      <NavBar hc={hc} />
      <div className="flex items-center justify-center  mt-20">
        {/* ซ้าย */}
        <div className="text-white mr-20">
          <h1 style={{ fontFamily: "Lora" }} className="text-4xl">
            Frontend web
            <br />
            developer!
          </h1>
          <br />
          <span>Hi,I'm NiniN SAU.A passionate Front-end</span>
          <br />
          <span>Web Developer based in Thailand</span>
          <div className="flex mt-5">
            <FaLinkedinIn className="mr-2 text-4xl bg-white text-black p-2 rounded-4xl" />
            <FaGithub className="ml-2 text-4xl" />
          </div>
        </div>
        {/* ขวา */}
        <div className="ml-20">
          <img className="w-50" src={Pro} alt="Pro" />
        </div>
      </div>
      {/* ล่าง */}
      <div className="flex items-center justify-center mt-20">
        <h1 className="text-white">My Tech Stack</h1>
      </div>
      <div className="flex items-center justify-center mt-20 ">
        <img className='w-8 mx-4'src={Figma} alt="Figma" />
        <img className='w-8 mx-4'src={Firebase} alt="Firebase" />
        <img className='w-8 mx-4'src={Html} alt="HTML" />
        <img className='w-8 mx-4'src={Java} alt="Java" />
        <img className='w-8 mx-4'src={Js} alt="JavaScript" />
        <img className='w-8 mx-4'src={Jsx} alt="JSX" />
        <img className='w-8 mx-4'src={Node} alt="Node.js" />
        <img className='w-8 mx-4'src={Spring} alt="Spring" />
      </div>
    </>
  );
}
