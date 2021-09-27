import React from "react";
import { useFormik } from "formik";
import Logo from "../assets/Logo.png";
import Select from "react-select";
import asterisk from "../assets/asterisk-icon.svg";
import error from "../assets/error-icon.svg";
import rightArrow from "../assets/right-arrow.svg";
import logoSmall from "../assets/logo-small.svg";
import * as Yup from "yup";

import { useHistory } from "react-router";

const options = [
  { value: "English", label: "English" },
  { value: "Hindi", label: "Hindi" },
  { value: "Marathi", label: "Marathi" },
  { value: "Bengali", label: "Bengali" },
];

const Schema = Yup.object({
  name: Yup.string().required("Enter name"),
  designation: Yup.string().required("Enter valid number"),
  language: Yup.string().required("Language Required"),
});

const Form = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: "",
      designation: "",
      language: "",
    },

    validationSchema: Schema,

    onSubmit: (values) => {
      history.push({
        pathname: "/results",
        state: values,
      });
    },

    // validate: (values) => {
    //   let errors = {};

    //   if (!values.name) {
    //     errors.name = "Enter name";
    //   }

    //   if (!values.designation) {
    //     errors.designation = "Enter valid number";
    //   }

    //   if (!values.language) {
    //     errors.language = "Language Required";
    //   }

    //   return errors;
    // },
  });

  // react-select styling

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

    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: formik.errors.language ? "#FFBDBD" : "#A1A1A1",
      };
    },
    dropdownIndicator: (base, state) => ({
      ...base,
      transition: "all .2s ease",
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    }),

    indicatorSeparator: () => null,

    control: (provided, state) => ({
      ...provided,

      borderRadius: "99px",
      padding: "5px 10px",
      border: formik.touched.language || formik.errors.language ? "1px solid #FFBDBD" : "1px solid #63B4FC",
      fontWeight: "400",
      fontSize: "14px",

      placeholder: (defaultStyles) => {
        return {
          ...defaultStyles,
          color: "#ffffff",
        };
      },
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      const color = "#63B4FC";
      return { ...provided, opacity, transition, color };
    },
  };

  // console.log(formik.validationSchema);

  return (
    <div className="w-360 h-screen m-auto flex flex-col justify-center">
      <div className=" flex flex-col  ">
        <div className="flex justify-center mb-14">
          <img src={Logo} alt="logo" />
        </div>

        <form className="flex flex-col justify-center align-center text-left " onSubmit={formik.handleSubmit}>
          <label htmlFor="name" className="text-18 text-FormBlue font-bold  mb-2 ml-3      ">
            Name
            <span className="inline-block align-text-top pt-1 pl-0">
              <img src={asterisk} alt="asterisk" />
            </span>
          </label>
          {/* error state */}
          {formik.touched.name && formik.errors.name ? (
            <div className="text-right pr-3 flex justify-end items-center mb-1 ">
              <img src={error} alt="error" className="self-center" />

              <p className="ml-1 text-12 text-FormRed">{formik.errors.name}</p>
            </div>
          ) : null}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter full name"
            className={`
            
            text-14 font-normal ${formik.touched.name && formik.errors.name ? "text-FormRed border-FormRed placeholder-FormRed" : "text-FormBlue border-FormBlue "} border  rounded-full  py-3 px-5
            
            `}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />

          <label htmlFor="designation" className="text-18 text-FormBlue font-bold mt-6 mb-2  ml-3">
            Designation
            <span className="inline-block align-text-top pt-1 pl-0">
              <img src={asterisk} alt="asterisk" />
            </span>
          </label>
          {/* error state */}
          {formik.touched.designation && formik.errors.designation ? (
            <div className="text-right pr-3 flex justify-end items-center  mb-1">
              <img src={error} alt="error" className="self-center" />

              <p className="ml-1 text-12 text-FormRed">{formik.errors.designation}</p>
            </div>
          ) : null}
          <input
            type="text"
            id="designation"
            name="designation"
            placeholder="Enter Position"
            className={`text-14 font-normal ${formik.touched.designation && formik.errors.designation ? "text-FormRed border-FormRed placeholder-FormRed" : "text-FormBlue border-FormBlue "}   border   rounded-full text-grey py-3 px-5`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.designation}
          />

          <label htmlFor="language" className="text-18 text-FormBlue font-bold mt-6 mb-2 ml-3">
            Language
          </label>

          <Select options={options} styles={customStyles} placeholder="Choose a language" isSearchable={false} onChange={(e) => formik.setFieldValue("language", e.value)} value={formik.values.language.value} onBlur={formik.handleBlur} />

          <button type="submit" className="text-18 text-white font-bold bg-FormBlue w-152 m-auto mt-8 p-2 rounded-full  shadow-md">
            <span className="flex justify-center items-center">
              Login
              <img src={rightArrow} alt="rightArrow" className="ml-2" />
            </span>
          </button>
        </form>

        <div className="flex justify-center mb-14 mt-14">
          <p className="text-FormGrey text-14 mr-2">Powered by</p>
          <img src={logoSmall} alt="logo" width="72.2px" />
        </div>
      </div>
    </div>
  );
};

export default Form;
