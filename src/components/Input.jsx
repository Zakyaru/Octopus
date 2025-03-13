const Input = ({placeholder = "", value, onChange, className = ""}) => {
    return(
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`bg-gray-100 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        />
    );
};

export default Input