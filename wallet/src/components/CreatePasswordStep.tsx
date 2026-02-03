import { useState } from "react";
import Button from "./Button";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";

const CreatePasswordStep = ({onNext}: {onNext: (password: string)=>void})=>{

    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [agreed, setAgreed] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleContinue = ()=>{
        
        if(password.length < 8){
            setError("Password must be at least 8 characters")
            return 
        }
        onNext(password);

        if(!agreed){
            setError("You must accept this before continuing")
            return
        }

    }
    return (
  <div className="flex flex-col items-center font-manrope text-center">

    {/* Title Section */}
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-[#DAF1DE]">
        Create a password
      </h2>
      <p className="mt-1 text-sm text-[#8EB69B]">
        You will use this password to unlock your wallet
      </p>
    </div>

    {/* Input Field */}
    <div className="relative w-full mb-4">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter a strong password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="
          w-full
          h-12
          px-4
          rounded-lg
          bg-[#0B2B26]
          border
          border-[#163832]
          text-[#DAF1DE]
          placeholder-[#8EB69B]
          focus:outline-none
          focus:ring-2
          focus:ring-[#235347]
        "
      />
      <button
        type="button"
        onClick={() => setShowPassword(prev => !prev)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8EB69B] text-sm hover:text-[#DAF1DE] cursor-pointer"
        >
        {showPassword ? <BiSolidShow /> : <BiSolidHide />
}
      </button>


      {error && (
        <p className="mt-2 text-sm text-red-400 text-left">
          {error}
        </p>
      )}
    </div>

    {/* Terms Checkbox */}
    <div className="flex items-start gap-3 w-full mb-6">

      <input
        type="checkbox"
        checked = {agreed}
        onChange={e => setAgreed(e.target.checked)}
        className="
          mt-1
          accent-[#235347]
          cursor-pointer
        "
        
      />

      <p className="text-sm text-[#9FC5AD] text-left leading-snug">
        I understand that CipherRoot cannot recover this password for me.
        <span className="text-[#DAF1DE] font-medium"> Learn more</span>
      </p>

    </div>

    {/* CTA Button */}
    <Button
      text="Continue"
      onClick={handleContinue}
      disabled = {!agreed}
      className="w-full"
    />

  </div>
)

}

export default CreatePasswordStep;