const Button = ({ children, className = '', ...res }) => {
  return (
    <button
      {...res}
      className={`text-sm text-white py-1.75 px-5 border border-[#ddd] bg-deep-aqua rounded-md bg-Deep-aqua uppercase transition-all duration-300 tracking-normal hover:tracking-[2px] cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
