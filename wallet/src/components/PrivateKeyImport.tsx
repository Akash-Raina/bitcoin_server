import { useState } from "react";
import Button from "../ui/Button";
import { ModalHeader } from "../ui/modal/ModalHeader";
import logo from "../assets/bitcoin_logo.png";

export const PrivateKeyImport = ({
  onImport,
  isOpen,
  onClose,
}: {
  onImport: (privatekey: string)=> void
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [privateKey, setPrivateKey] = useState("");
  const [error, setError] = useState("");

  const handleImport = () => {
    if (!privateKey.trim()) {
      setError("Private key is required");
      return;
    }

    setError("");

    console.log(privateKey);
    onImport(privateKey)
    // TODO:
    // validate private key
    // import wallet
    // close modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-xl border border-[#163832] bg-[#0B2B26] shadow-2xl">
        {/* Header */}
        <ModalHeader onClick={onClose} />

        <div className="flex flex-col items-center px-6 py-6 text-center">
          {/* Logo */}
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#235347] bg-[#163832]">
            <img
              src={logo}
              alt="Bitcoin Logo"
              className="h-7 w-7 object-contain"
            />
          </div>

          {/* Title */}
          <h2 className="text-xl font-semibold text-[#DAF1DE]">
            Enter Private Key
          </h2>

          {/* Subtitle */}
          <p className="mt-1 text-sm text-[#8EB69B]">
            Import your wallet by entering your private key
          </p>

          {/* Input */}
          <div className="mt-5 w-full">
            <input
              type="text"
              value={privateKey}
              onChange={(e) => setPrivateKey(e.target.value)}
              placeholder="Enter private key"
              className="w-full rounded-lg border border-[#163832] bg-[#051F20] px-4 py-3 text-sm text-[#DAF1DE] outline-none placeholder:text-[#5E7A73] focus:border-[#235347]"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="mt-3 self-start text-sm text-red-400">
              {error}
            </p>
          )}

          {/* Import Button */}
          <Button
            text="Import"
            className="mt-5 w-full"
            onClick={handleImport}
          />
        </div>
      </div>
    </div>
  );
};