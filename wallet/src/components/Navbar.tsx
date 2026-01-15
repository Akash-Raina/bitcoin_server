import logo from "../assets/bitcoin_logo.png"

const Navbar = () => {
  return (
    <nav className="flex items-center gap-2 px-6 py-4">
      <img
        src={logo}
        alt="CipherRoot Logo"
        className="h-10 w-10 object-contain cursor-pointer"
      />

      <div className="flex items-baseline cursor-pointer">
        <div>
            <span className="text-2xl font-semibold tracking-tight text-white">Cipher</span>
            <span className="text-2xl font-semibold tracking-tight text-[#DAF1DE]">Root</span>
        </div>
      </div>
    </nav>
  )
}


export default Navbar