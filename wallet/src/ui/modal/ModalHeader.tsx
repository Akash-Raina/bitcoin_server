import { IoArrowBack } from "react-icons/io5";

export const ModalHeader = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="flex items-center px-4 py-3 border-b border-[#163832]">
      <IoArrowBack
        className="cursor-pointer text-[#DAF1DE] hover:text-[#8EB69B]"
        onClick={onClick}
        size={20}
      />
    </div>
  );
};
