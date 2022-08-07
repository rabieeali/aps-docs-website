const Input = ({formik,name}) => {
  return (
    <div className="form-control w-full max-w-xs m-auto">
      <label className="label">
        <span className="label-text text-white font-bold">Title</span>
      </label>
      <input
       {...formik.getFieldProps(name)}
       name={name}
        type="text"
        placeholder="Type here"
        className="input input-bordered bg-white text-slate-600 w-full max-w-xs"
      />
           {formik.errors[name] && formik.touched[name] && (
          <span className="text-capitalize text-red-700">
            {formik.errors[name]}
          </span>
        )}
    </div>
  );
};

export default Input;
