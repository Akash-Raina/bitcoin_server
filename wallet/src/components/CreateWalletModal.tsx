import { useState } from "react"
import { IoArrowBack } from "react-icons/io5";
import ProgressDots from "./ProgressDots";
import CreatePasswordStep from "./CreatePasswordStep";
import RecoveryPhraseStep from "./RecoveryPhraseStep";
import WalletCreatedStep from "./WalletCreatedStep";
import * as bip39 from "bip39"
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js"


const TOTAL_STEPS = 3

const handleGenerateSeed = ()=>{
  const mnemonic =  bip39.generateMnemonic()
  return mnemonic

}

const CreateWalletModal = ({isOpen, onClose}: {isOpen: boolean, onClose: ()=>void})=>{
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1)
    const [walletState, setWalletState] = useState({
        password: "",
        seedPhrase: [] as string[],
    }) 
    const mnemonic = handleGenerateSeed()

    const encryptedVault = CryptoJS.AES.encrypt(
      walletState.seedPhrase.join(" "),
      walletState.password
    ).toString()


    const goNext = ()=>{
        if(currentStep < TOTAL_STEPS){
          setWalletState(prev => ({
            ...prev,
            seedPhrase: mnemonic.split(" ")
          })) 
            setCurrentStep(prev => prev + 1)
        }
    }

    const goBack = ()=>{
        if(currentStep == 1){
            onClose();
            resetState();
        }
        else if(currentStep === 2){
            setCurrentStep(1)
        }
    }

    const resetState = ()=>{
        setCurrentStep(1);
        setWalletState({
            password: "",
            seedPhrase : []
        })
    }

    if(!isOpen) return null;


    return (
  <>
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

      <div className="w-full max-w-md rounded-xl bg-[#0B2B26] shadow-2xl border border-[#163832]">

        <div className="flex items-center justify-between px-4 py-3 border-b border-[#163832]">

          {currentStep < 3 ? (
            <IoArrowBack
              className="cursor-pointer text-[#DAF1DE] hover:text-[#8EB69B]"
              onClick={goBack}
              size={20}
            />
          ) : (
            <div className="w-5" />
          )}

          <ProgressDots
            currentStep={currentStep}
            total={TOTAL_STEPS}
          />

          <div className="w-5" />

        </div>

        {/* Content Area */}
        <div className="px-6 py-5">

          {currentStep === 1 && (
            <CreatePasswordStep
              onNext = {(password: string) => {
                setWalletState(prev => ({ ...prev, password }))
                goNext()  
              }}
            />
          )}

          {currentStep === 2 && (
            <RecoveryPhraseStep
              seedPhrase={walletState.seedPhrase}
              onConfirm={(seedPhrase: string[]) => {
                setWalletState(prev => ({ ...prev, seedPhrase }))
                goNext()
              }}
            />
          )}

          {currentStep === 3 && (
            <WalletCreatedStep
              onFinish={() => {
                resetState()
                onClose()
                localStorage.setItem("cipherroot_wallet", encryptedVault)
                navigate("/wallet")
              }}
            />
          )}

        </div>
      </div>
    </div>
  </>
)

}

export default CreateWalletModal