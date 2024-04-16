import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider";
const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {signUpWithGmail , login} = useContext(AuthContext);
  const [errorMessage , setErrorMessage] = useState("")


  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    login(email,password)
  };

  const handlogin = ()=>{
    signUpWithGmail().then((result)=>{
      const user = result.user;
      alert ("login successful")
    }).catch((error)=> console.log(error));
  }
  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box">
        <div className="modal-action flex flex-col justify-center mt-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body"
            method="dialog"
          >
            <h1 className="font-bold">Please LogIn!! </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                {...register("email")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                {...register("password")}
              />
              <label className="label mt-1">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {/* error message */}
            {
              errorMessage ? <p className = "text-red text-xs italic">{setErrorMessage}</p> : ""
            }
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Login"
                className="btn bg-green hover:text-white text-white"
              />
            </div>
            <p className="text-center my-2 ">
              Don't have an account?{" "}
              <Link to="/signup" className="underline text-red ml-1">
                SignUp Now
              </Link>{" "}
            </p>

            <button
              htmlFor="my_modal_5"
              onClick={() => document.getElementById("my_modal_5").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <div className="text-center space-x-3 mb-5 ">
            <button className="btn btn-circle hover:bg-green hover:text-white " onClick={handlogin}>
              <FaGoogle />
            </button>
            <button className="btn btn-circle hover:bg-green hover:text-white">
              <FaFacebookF />
            </button>
            <button className="btn btn-circle hover:bg-green hover:text-white">
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
