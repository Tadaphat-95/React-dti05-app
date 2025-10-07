
import NavBar from "../components/NavBar";
import { FaGithub } from "react-icons/fa";

import Portfolio1 from "./../Assets/Portfolio1.png";
import Portfolio2 from "./../Assets/Portfolio2.png";
import Portfolio3 from "./../Assets/Portfolio3.png";
import Portfolio4 from "./../Assets/Portfolio4.png";

const Portfolio = () => {
  const pc = { color: "yellow" };

  return (
    <>
      <NavBar pc={pc} />

      <div className="min-h-screen py-10">
        <h1

          className="text-4xl mb-4 text-center text-white font-bold" 
          style={{ fontFamily: "Lora" }}
        >
          Portfolio
        </h1>
        
        {/* Project 1 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-20">

          <img src={Portfolio1} alt="Portfolio1" className="w-[400px] rounded-xl" />

          <div className="max-w-lg">

            <h1 className="text-3xl text-white mb-4 ml-0" style={{ fontFamily: "Lora" }}>
              Bikes and Beards
            </h1>
            <span className="text-sm text-gray-400 block mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              rem odit labore unde nemo omnis sequi hic sit laudantium repellendus
              recusandae vitae ea laborum. Blanditiis consequuntur velit nesciunt
              aperiam odit excepturi repellat libero in enim praesentium!
            </span>

            <div className="flex items-center gap-8">
              <h1 className="text-white border border-white px-6 py-2 rounded-3xl text-sm">
                View
              </h1>
              <div className="flex items-center gap-2">
                <FaGithub className="text-xl text-white" />
                <h2 className="text-white">Git code</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 mb-20">
          <img src={Portfolio2} alt="Portfolio2" className="w-[400px] rounded-xl" />
          <div className="max-w-lg text-gray-300">

            <h2 className="text-2xl text-white mb-3 ml-0" style={{ fontFamily: "Lora" }}>
              Learnify
            </h2>
            <span className="text-sm block mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              rem odit labore unde nemo omnis sequi hic sit laudantium repellendus
              recusandae vitae ea laborum. Blanditiis consequuntur velit nesciunt
              aperiam odit excepturi repellat libero in enim praesentium!
            </span>

            <div className="flex items-center gap-8">
              <h1 className="text-white border border-white px-6 py-2 rounded-3xl text-sm">
                View
              </h1>
              <div className="flex items-center gap-2">
                <FaGithub className="text-xl text-white" />
                <h2 className="text-white">Git code</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-20">
          <img src={Portfolio3} alt="Portfolio3" className="w-[400px] rounded-xl" />
          <div className="max-w-lg text-gray-300">

            <h2 className="text-2xl text-white mb-3 ml-0" style={{ fontFamily: "Lora" }}>
              Anime-X
            </h2>
            <span className="text-sm block mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              rem odit labore unde nemo omnis sequi hic sit laudantium repellendus
              recusandae vitae ea laborum. Blanditiis consequuntur velit nesciunt
              aperiam odit excepturi repellat libero in enim praesentium!
            </span>

            <div className="flex items-center gap-8">
              <h1 className="text-white border border-white px-6 py-2 rounded-3xl text-sm">
                View
              </h1>
              <div className="flex items-center gap-2">
                <FaGithub className="text-xl text-white" />
                <h2 className="text-white">Git code</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10">
          <img src={Portfolio4} alt="Portfolio4" className="w-[400px] rounded-xl" />
          <div className="max-w-lg text-gray-300">

            <h2 className="text-2xl text-white mb-3 ml-0" style={{ fontFamily: "Lora" }}>
              Tech-Z
            </h2>
            <span className="text-sm block mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              rem odit labore unde nemo omnis sequi hic sit laudantium repellendus
              recusandae vitae ea laborum. Blanditiis consequuntur velit nesciunt
              aperiam odit excepturi repellat libero in enim praesentium!
            </span>

            <div className="flex items-center gap-8">
              <h1 className="text-white border border-white px-6 py-2 rounded-3xl text-sm">
                View
              </h1>
              <div className="flex items-center gap-2">
                <FaGithub className="text-xl text-white" />
                <h2 className="text-white">Git code</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;