import Button from "../ui/Button"
import logo from "../assets/bitcoin_logo.png"

const WalletCreatedStep = ({ onFinish }: { onFinish: () => void }) => {

  return (
    <div className="flex flex-col items-center text-center">

      {/* Icon */}
      <div className="mb-5 flex items-center justify-center h-14 w-14 rounded-full bg-[#163832] border border-[#235347]">
        <img
          src={logo}
          alt="Wallet Created"
          className="h-7 w-7 object-contain"
        />
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-semibold text-[#DAF1DE]">
        Wallet Created Successfully
      </h2>

      {/* Description */}
      <p className="mt-2 text-sm text-[#8EB69B] max-w-sm">
        Your CipherRoot wallet is ready. You can now securely store,
        send, and receive crypto assets.
      </p>

      {/* CTA */}
      <div className="mt-7 w-full">
        <Button
          text="Open Wallet"
          onClick={onFinish}
          className="w-full"
        />
      </div>

    </div>
  )
}

export default WalletCreatedStep
