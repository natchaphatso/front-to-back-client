import { Loader } from "lucide-react";

function Buttons({ isSubmitting, label }) {
  return (
    <button
      disabled={isSubmitting}
      type="submit"
      className="bg-black text-white py-2 px-4 rounded-md cursor-pointer duration-300 hover:bg-gray-900 hover:scale-105"
    >
      {isSubmitting ? (
        <div className="flex gap-2">
          <Loader className="animate-spin" />
          <p>Loading</p>
        </div>
      ) : (
        label
      )}
    </button>
  );
}

export default Buttons;
