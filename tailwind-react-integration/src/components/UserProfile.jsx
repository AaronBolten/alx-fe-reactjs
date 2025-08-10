
export default function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm mx-auto my-12 md:my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto transform-gpu transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
      />
      <h1 className="sm:text-lg md:text-xl text-blue-800 hover:text-blue-500 transition-colors duration-200 my-3 md:my-4 cursor-pointer">
        John Doe
      </h1>
      <p className="text-gray-600 sm:text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}
