import { useState } from "react";
import Button from "../ui/Button";
import * as bip39 from "bip39";
import { ModalHeader } from "../ui/modal/ModalHeader";

const WORD_COUNT = 12;

const SeedPhraseImport = ({
  onImport,
  isOpen,
  onClose,
}: {
  onImport: (mnemonic: string[]) => void;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [words, setWords] = useState<string[]>(Array(WORD_COUNT).fill(""));
  const [error, setError] = useState("");


  // Handle typing
  const handleChange = (index: number, value: string) => {
    const newWords = [...words];
    newWords[index] = value.trim().toLowerCase();
    setWords(newWords);
  };

  // Handle paste full phrase
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      const split = text.trim().toLowerCase().split(/\s+/);

      if (split.length !== WORD_COUNT) {
        setError("Seed phrase must be 12 words");
        return;
      }

      setWords(split);
      setError("");
    } catch {
      setError("Failed to read clipboard");
    }
  };

  // Handle import
  const handleImport = () => {
    const mnemonic = words.join(" ");

    if (!bip39.validateMnemonic(mnemonic)) {
      setError("Invalid recovery phrase");
      return;
    }

    setError("");
    onImport(words);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-xl bg-[#0B2B26] border border-[#163832] shadow-2xl">
        {/* Header */}
        <ModalHeader onClick={onClose}/>
        {/* Title */}
        <h2 className="mt-4 text-xl font-semibold text-[#DAF1DE]">
          Secret Recovery Phrase
        </h2>

        <p className="text-sm text-[#8EB69B] mt-1">
          Enter or paste your 12-word phrase in order
        </p>

        {/* Paste Button */}
        <button
          onClick={handlePaste}
          className="mt-3 self-start text-sm px-3 py-1 rounded-md bg-[#163832] hover:bg-[#235347] text-[#DAF1DE] transition"
        >
          Paste
        </button>

        {/* Word Grid */}
        <div className="grid grid-cols-3 gap-3 mt-4 mx-4">
          {words.map((word, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-[#051F20] border border-[#163832] rounded-md px-2 py-2"
            >
              <span className="text-xs text-[#8EB69B] w-4">{i + 1}</span>

              <input

                value={word}
                onChange={(e) => handleChange(i, e.target.value)}
                className="bg-transparent outline-none text-sm text-[#DAF1DE] w-full"
              />
            </div>
          ))}
        </div>

        {/* Error */}
        {error && <p className="text-red-400 text-sm mt-3">{error}</p>}

        {/* Import Button */}
        <Button text="Import" className="w-[90%] mb-4 mt-5" onClick={handleImport} />

      </div>
    </div>
  );
};

export default SeedPhraseImport;
