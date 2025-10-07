
import NavBar from "../components/NavBar";
import img1 from "./../assets/Profilecontact.png";
import img2 from "./../assets/Group1.png";
import img3 from "./../assets/Group2.png";


const Contact = () => {
  const cc = { color: "yellow" };

  return (
    <>
      <NavBar cc={cc} />
      <div className="bg-black text-white px-6 py-20 min-h-screen">
        {}
        <h1
          className="text-5xl mb-10 font-bold text-left ml-10"
          style={{ fontFamily: "Lora" }}
        >
          Contact
        </h1>
        {}
        <div className="flex flex-col items-center justify-center text-center">
          <h2
            className="text-3xl mb-4"
            style={{ fontFamily: "Lora" }}
          >
            Let’s Connect
          </h2>
          <h1 className="text-gray-400 mb-20 text-lg">
            Don't be a stranger! Say hello and let's collaborate
          </h1>
        </div>
        {}
        <div className="flex flex-col md:flex-row justify-center items-center gap-24 mt-10">
          <div className="flex flex-col items-center text-center">
            <img src={img1} alt="email" className="w-[100px] h-[100px] mb-4" />
            <h1 className="text-lg text-gray-300">ninnin***@gmail.com</h1>
          </div>
          {}
          <div className="flex flex-col items-center text-center">
            <img src={img2} alt="location" className="w-[100px] h-[100px] mb-4" />
            <h1 className="text-lg text-gray-300">Thailand, Bangkok</h1>
          </div>
          {}
          <div className="flex flex-col items-center text-center">
            <img src={img3} alt="linkedin" className="w-[100px] h-[100px] mb-4" />
            <h1 className="text-lg text-gray-300 ml-10">NinniN SAU</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;