import React from "react";
import Logo from "../assets/Logo.png";

const Form = () => {
  return (
    <div className="w-360 h-screen m-auto">
      <div className="flex justify-center ">
        <img src={Logo} alt="logo" width="189" />
      </div>

      <form className="h-FH flex flex-col justify-center align-center text-left">
        <label htmlFor="name" className="text-18 text-FormBlue">
          Name
        </label>
        <input type="text" id="name" name="name" className="text-18 text-FormBlue" />

        <label htmlFor="designation" className="text-18 text-FormBlue">
          Designation
        </label>
        <input type="text" id="designation" name="designation" />

        <label htmlFor="language" className="text-18 text-FormBlue">
          Language
        </label>
        {/* <select id="cars" name="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select> */}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Form;
