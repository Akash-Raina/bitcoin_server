import { useState } from "react"
import Button from "./Button"

type Props = {
  seedPhrase: string[]
  onConfirm: (seedPhrase: string[]) => void
}

const RecoveryPhraseStep = ({ seedPhrase, onConfirm }: Props) => {

  const [agreed, setAgreed] = useState(false)

  const handleContinue = () => {
    onConfirm(seedPhrase)
  }

  return (
    <div className="flex flex-col">

      {/* Title */}
      <div className="mb-5">
        <h2 className="text-[#DAF1DE] text-2xl font-semibold">
          Secret Recovery Phrase
        </h2>

        <p className="mt-1 text-sm text-[#8EB69B]">
          Write down these 12 words in order and store them securely.
          This is the only way to recover your wallet.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 bg-[#0B2B26] border border-[#163832] rounded-lg p-4 mb-5">

        {seedPhrase.map((word, index) => (
          <div
            key={index}
            className="flex gap-2 items-center text-sm bg-[#051F20] px-3 py-2 rounded-md"
          >
            <span className="text-[#8EB69B]">
              {index + 1}.
            </span>

            <span className="text-[#DAF1DE] font-medium">
              {word}
            </span>
          </div>
        ))}

      </div>

      {/* Confirmation Checkbox */}
      <div className="flex items-start gap-3 mb-6">

        <input
          type="checkbox"
          checked={agreed}
          onChange={e => setAgreed(e.target.checked)}
          className="mt-1 accent-[#235347] cursor-pointer"
        />

        <p className="text-sm text-[#9FC5AD] leading-snug">
          I have securely saved my recovery phrase and understand
          CipherRoot cannot recover it for me.
        </p>

      </div>

      {/* Continue Button */}
      <Button
        text="Continue"
        disabled={!agreed}
        onClick={handleContinue}
        className="w-full"
      />

    </div>
  )
}

export default RecoveryPhraseStep
