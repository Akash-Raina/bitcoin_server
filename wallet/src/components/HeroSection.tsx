import Button from "../ui/Button"
import logo from "../assets/bitcoin_logo.png"
import { useState } from "react"
import CreateWalletModal from "./CreateWalletModal"
import ImportWalletModal from "./ImportWalletModal"

const HeroSection = () => {

  const [openNewWallet, setOpenNewWallet] = useState(false);
  const [openImportWallet, setOpenImportWallet] = useState(false);

  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center font-manrope">
      <img
        src={logo}
        alt="CipherRoot Logo"
        className="h-10 w-10 object-contain cursor-pointer"
      />
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[#DAF1DE] sm:text-5xl">
        Your Keys. Your Crypto. Fully Deterministic.
      </h1>

      <p className="mt-5 max-w-2xl text-lg text-[#8EB69B]">
        CipherRoot is a secure, non-custodial wallet built to understand how
        cryptographic ownership works — from recovery phrases to signed transactions.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button 
          text="Create a new Wallet" 
          variant="primary" 
          onClick={()=>{ setOpenNewWallet(true)}}
        />

        <Button 
          text="Already have a Wallet" 
          variant="secondary" 
          onClick={()=>setOpenImportWallet(true)} 
        />

      </div>

      <CreateWalletModal 
        isOpen = {openNewWallet} 
        onClose={()=> setOpenNewWallet(false)}
      />
      <ImportWalletModal 
        isOpen = {openImportWallet} 
        onClose={()=> setOpenImportWallet(false)}
      />

    </section>
  )
}



export default HeroSection
