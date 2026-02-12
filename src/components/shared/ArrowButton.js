import { useNavigate } from "react-router-dom";

function ArrowButton({ to, size = "md" }) {
  const navigate = useNavigate();

  const sizes = {
    sm: "w-14 h-10",
    md: "w-16 h-11",
  };

  return (
    <button
      onClick={() => navigate(to)}
      className={`
        group
        ${sizes[size]}
        rounded-full
        bg-[#1EEBD9]
        flex items-center justify-center
        transition-colors duration-300
        hover:bg-[#D5FB93]
      `}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="
          w-5 h-5
          transition-transform duration-300
          group-hover:rotate-45
        "
      >
        <path
          d="M7 17L17 7M17 7H9M17 7V15"
          stroke="#001917"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default ArrowButton;
