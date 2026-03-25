import { FiAlertCircle } from "react-icons/fi";

const ErrorState = ({ message }: { message: string }) => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white border border-red-200 rounded-xl p-6 text-center shadow-sm">
      <div className="flex jusstify-center mb-3 text-red-500 text-3xl">
        <FiAlertCircle />
      </div>

      <h3 className="text-lg font-semibold text-gray-800">
        Something went wrong
      </h3>

      <p className="text-sm text-gray-500 mt-2">{message}</p>
    </div>
  );
};

export default ErrorState;
