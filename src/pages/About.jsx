import NavBar from "../components/NavBar";
import loader from "../Assets/Loader.png";

const About = () => {
  const ac = { color: "yellow" };

  return (
    <>
      <NavBar ac={ac} />

      <div className="flex items-center justify-center mt-32">
        <div className="flex flex-col md:flex-row items-center justify-center gap-24">

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1
              className="text-4xl text-white mb-8"
              style={{ fontFamily: "Lora" }}
            >
              About Me
            </h1>
            <img
              src={loader}
              alt="loader"
              className="w-48 h-48 object-contain"
            />
          </div>

          <div className="max-w-lg text-gray-300 leading-relaxed">
            <h1 className="text-white font-semibold mb-3">
              Hi, I’m NinniN SAU. A passionate Front-end Web Developer based in
              Thailand.
            </h1>
            <h2 className="text-sm mb-10 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              rem odit labore unde nemo omnis sequi hic sit laudantium repellendus
              recusandae vitae ea laborum blanditiis consequuntur. Ex dicta est
              suscipit ipsam voluptate tempora voluptatum quam distinctio minus.
            </h2>

            <h1
              className="text-white border px-6 py-2 rounded-3xl text-center inline-block"
              style={{ fontFamily: "Lora" }}
            >
              Download CV
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;