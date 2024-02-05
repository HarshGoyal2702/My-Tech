import React from "react";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from -[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
      {/* images div */}
      <div className="md:w-1/2 relative">
          <img className="rounded-full " src="/images/model.jpeg" alt="" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-28 gap-4 ">
            <div className="flex absolute top-10 -left-4 bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
              <img className="rounded-2xl w-28 " src="/images/cricket.webp" alt="" />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Cricket</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                </div>
                <p className="text-red">couple cricket</p>
              </div>
            </div>
            <div className="flex absolute -bottom-24 right-0 bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
              <img className="rounded-2xl w-28 " src="/images/cricket.webp" alt="" />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Dance</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                </div>
                <p className="text-red">Micheal Jackson</p>
              </div>
            </div>
          </div>
        </div>
        {/* texts div */}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            <span className="text-green">Tech Fusion</span> is a community of
            developers, designers and Sporty enthusiasts.
          </h2>
          <p className="text-xl text-[#4A4A4A]">
            Where you can show your skills and win exciting prizes and Enjoy the
            experince of a lifetime.
          </p>
          <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">
            Check This OUT!!
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default Banner;
