import React from "react";

const TextArea = ({ formik, name }) => {
  return (
    <div>
      <div className="form-control w-full max-w-xs m-auto my-2">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          {...formik.getFieldProps(name)}
          name={name}
          rows={2}
          className="textarea textarea-bordered bg-white text-slate-600"
          placeholder="What Is It About?"
        ></textarea>
             {formik.errors[name] && formik.touched[name] && (
          <span className="text-capitalize text-red-700">
            {formik.errors[name]}
          </span>
        )}
      </div>
    </div>
  );
};

export default TextArea;
