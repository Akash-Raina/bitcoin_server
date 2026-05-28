import logo from "../assets/bitcoin_logo.png";
import { useState } from "react";
import SeedPhraseImport from "./SeedPhraseImport";
import { useNavigate } from "react-router-dom";
import { PrivateKeyImport } from "./PrivateKeyImport";
import { ModalHeader } from "../ui/modal/ModalHeader";

const ImportWalletModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [openSeedImport, setOpenSeedImport] = useState(false);
  const [openPKImport, setOpenPKImport] = useState(false);
  const navigate = useNavigate()
  if (!isOpen) return null;

  const onImport = ()=>{
    navigate('/wallet')
  }

  return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div>
              {
                openSeedImport === true && 
                  <SeedPhraseImport 
                    onImport={onImport} 
                    isOpen={openSeedImport} 
                    onClose = {()=>{setOpenSeedImport(false)}}
                  />

              }
            </div>
            <div>
              {
                openPKImport === true &&
                  <PrivateKeyImport 
                    onImport={onImport}
                    isOpen = {openPKImport}
                    onClose={()=>{setOpenPKImport(false)}}
                  />
              }
            </div>
          {/* Modal Card */}
          <div className="w-full max-w-md rounded-xl bg-[#0B2B26] border border-[#163832] shadow-2xl">
            {/* Header */}
            <ModalHeader onClick={onClose}/>
            
            {/* Content */}
            <div className="px-6 py-6 flex flex-col items-center text-center">
              {/* Logo */}
              <div className="mb-4 flex items-center justify-center h-14 w-14 rounded-full bg-[#163832] border border-[#235347]">
                <img src={logo} alt="logo" className="w-7 h-7 object-contain" />
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-[#DAF1DE]">
                Import Your Wallet
              </h2>

              <p className="text-sm text-[#8EB69B] mt-1">
                Choose how you would like to restore your wallet
              </p>

              {/* Options */}
              <div className="w-full mt-6 flex flex-col gap-3">
                {/* Recovery Phrase */}
                <button
                  onClick={() => { setOpenSeedImport(true) }}
                  className="cursor-pointer rounded-lg border border-[#163832] bg-[#051F20] hover:border-[#235347] hover:bg-[#082825] transition p-4 text-left"
                >
                  <p className="text-[#DAF1DE] font-medium">Recovery Phrase</p>
                  <p className="text-xs text-[#8EB69B] mt-1">
                    Restore using your 12 word secret phrase
                  </p>
                </button>

                {/* Private Key */}
                <button 
                  onClick={()=>{ setOpenPKImport(true)}}
                  className="cursor-pointer rounded-lg border border-[#163832] bg-[#051F20] hover:border-[#235347] hover:bg-[#082825] transition p-4 text-left">
                  <p className="text-[#DAF1DE] font-medium">Private Key</p>
                  <p className="text-xs text-[#8EB69B] mt-1">
                    Import a single account using a private key
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      

  );
};

export default ImportWalletModal;
