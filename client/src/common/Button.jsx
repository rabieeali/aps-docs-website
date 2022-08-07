import React from "react";

const Button = ({ formik }) => {
  return (
    <button
      type="submit"
      className="btn btn-info my-4"
      disabled={!formik.isValid}
    >
      Submit
    </button>
  );
};

export default Button;
