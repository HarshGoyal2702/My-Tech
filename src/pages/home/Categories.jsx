import React from "react";

const categoryItems = [
    {id:1,title : "Technical Events",des:"Amazing tech events will be happening!!",image:"/images/vaish.png"},
    {id:1,title : "Cultural Events",des:"Every Night will be blossom all around!!",image:"/images/vaish.png"},
    {id:1,title : "Sports Events",des:"Thrilling and Entertaining Games out there!!",image:"/images/vaish.png" },
]

const Categories = () => {
  return (
    <div className="section-container py-16">
      <div className="text-center">
        <p className="subtitle">
          College Initiative
        </p>
        <h2 className="title">Tech-Fusion</h2>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12">
        {
            categoryItems.map((item,i)=>(
                <div key={i} className="shadow-lg rounded-md bg-white py-6 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all">
                    <div className="flex w-full  mx-auto items-center justify-center">
                        <img src={item.image} alt="" className="bg-[#C1F1C6] p-5 rounded-full w-25 h-28" />
                    </div>
                    <div>
                        <h5>{item.title}</h5>
                        <p>{item.des}</p>
                    </div>
                </div>
            ))
        }
      </div>

    </div>
  );
};

export default Categories;
