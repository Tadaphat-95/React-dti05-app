import { Link } from "react-router-dom"

export default function NavBar({hc , ac , pc , cc}) {
  return (
    <>
    <div className="flex justify-around items-center bg-black text-white py-5">
      <h1 className="text-2xl font-bold">NiniN SAU</h1>
        <Link style={hc} to="/">Home</Link>
        <Link style={ac} to="/about">About</Link>
        <Link style={pc} to="/portfolio">Portfolio</Link>
        <Link style={cc} to="/contact" className="border-2 border-white py-1 px-4 rounded-3xl ">Let's talk</Link>
    </div>
    </>
  )
}
