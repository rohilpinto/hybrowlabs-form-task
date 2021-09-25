import React from "react";
import Logo from "../assets/Logo.png";
import Select from "react-select";

const options = [
  { value: "English", label: "English" },
  { value: "Hindi", label: "Hindi" },
  { value: "Marathi", label: "Marathi" },
  { value: "Bengali", label: "Bengali" },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "0.5px solid #A1A1A1;",
    color: state.isSelected ? "#63B4FC" : "#A1A1A1",
    // padding: 12,
    // borderRadius: "99px",
    // padding: "5px 25px",
  }),

  menu: (provided, state) => ({
    ...provided,

    borderRadius: "22px",

    padding: "5px 25px",
  }),

  DropdownIndicator: () => null,
  indicatorSeparator: () => null,

  control: (provided, state) => ({
    ...provided,

    borderRadius: "99px",
    padding: "5px 10px",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

const Form = () => {
  return (
    <div className="w-360 h-screen m-auto flex flex-col justify-center">
      <div className=" flex flex-col ">
        <div className="flex justify-center mb-10">
          <img src={Logo} alt="logo" width="189" />
        </div>

        <form className="flex flex-col justify-center align-center text-left ">
          <label htmlFor="name" className="text-18 text-FormBlue font-bold mb-3 ml-3">
            Name
          </label>
          <input type="text" id="name" name="name" placeholder="Enter full name" className="text-14 font-semibold text-FormBlue border border-FormRed rounded-full text-FormRed py-3 px-5" />

          <label htmlFor="designation" className="text-18 text-FormBlue font-bold mt-6 mb-3 ml-3">
            Designation
          </label>
          <input type="text" id="language" name="language" placeholder="Enter Position" className="text-14 font-semibold text-FormBlue border border-FormRed rounded-full text-FormRed py-3 px-5" />

          <label htmlFor="language" className="text-18 text-FormBlue font-bold mt-6 mb-3 ml-3">
            Language
          </label>

          <Select options={options} styles={customStyles} />

          {/* <input type="text" id="Designation" name="Designation" placeholder="Enter Position" className="text-14 font-semibold text-FormBlue border border-FormRed rounded-full text-FormRed p-3" /> */}

          <button type="submit" className="text-18 text-FormBlue font-bold bg-FormBlue w-152 m-auto mt-6">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
