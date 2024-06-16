import React, { useContext } from "react";
import {useForm} from "react-hook-form"
import { AuthContext } from "../../contexts/AuthProvider";
const UpdateProfile = () => {

    const {updateUserProfile} = useContext(AuthContext)
const {
    register,
    handleSumit,
    watch,
    formState:{errors},
} = useForm()

const onSubmit = (data)=> {
    const name = data.name;
    const photoURL = data.photoURL;
    updateUserProfile(name,photoURL).then(()=>{

    }).catch((error)=>{
        
    })
}

  return (
    <div className="flex items-center justify-center h-screen">
    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
      <h3 className="font-bold">Update Your Profile</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name")} placeholder="Enter Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">upload Photo</span>
          </label>
          <input type="text" {...register("photoURL")} placeholder="PhotoURL" className="input input-bordered" required />
          {/* <input type="file" className="file-input file-input-bordered w-full max-w-xs" /> */}
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-green text-white">Update</button>
        </div>
      </form>
    </div>


    </div>
  );
};

export default UpdateProfile;
