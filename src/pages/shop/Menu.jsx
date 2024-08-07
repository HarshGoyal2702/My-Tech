import React, { useState, useEffect } from "react";
import Cards from "../../components/Cards";
import { FaFilter } from "react-icons/fa"
import LoadingSkeleton from "../../components/LoadingSkeleton";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [loading,setLoading] = useState(true)

  //loading
  useEffect(() => {
    // fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch("https://tech-fusion-server.onrender.com/menu");
        const data = await response.json();
        console.log(data);

        setLoading(false);
        setMenu(data);
        setFilteredItems(data.filter((item) => item.category !== "Impact"));
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    // calling the function
    fetchData();
  }, []);

  //filtering data based on category
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu.filter((item)=> item.category !== "Impact")
        : menu.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1)
  };

  //show all data
  const showAll = () => {
    setFilteredItems(menu.filter((item) => item.category !== "Impact"));
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  //sorting based on A-Z, a-z, Z-A
  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedItems = [...filteredItems];
    //logic
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  // pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
   <div>
    <div>
      {/* menu banner  */}
      <div className="section-container bg-gradient-to-r from -[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
        <div className="py-48 flex flex-col justify-center items-center gap-8">
          {/* texts div */}
          <div className="text-center space-y-7 px-4">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              <span className="text-green">Tech Fusion</span> is a community of
              developers, designers and Sporty enthusiasts.
            </h2>
            <p className="text-xl text-[#4A4A4A]">
              Where you can show your skills and win exciting prizes and Enjoy
              the experince of a lifetime.
            </p>
            <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">
              Check This OUT!!
            </button>
          </div>
        </div>
      </div>
      {/* menu shop section */}
      <div className="section-container">
        {/* filtering and sorting */}
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-8 mb-8">
          {/* all categories button  */}
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4  flex-wrap">
            <button
              onClick={showAll}
              className={selectedCategory === "all" ? "active" : ""}
            >
              All
            </button>
            <button
              onClick={() => filterItems("technical")}
              className={selectedCategory === "technical" ? "active" : ""}
            >
              Technical Events
            </button>
            <button
              onClick={() => filterItems("cultural")}
              className={selectedCategory === "cultural" ? "active" : ""}
            >
              Cultural Events
            </button>
            <button
              onClick={() => filterItems("sports")}
              className={selectedCategory === "sports" ? "active" : ""}
            >
              Sports Events
            </button>
            <button
              onClick={() => filterItems("DJ Night")}
              className={selectedCategory === "DJ Night" ? "active" : ""}
            >
              DJ Night
            </button>
          </div>
          {/* sorting base filtering  */}
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="h-4 w-4 text-white" />
            </div>
            <select name="sort" id="sort" onChange={(e) => handleSortChange(e.target.value)} value={sortOption} className="bg-black text-white px-2 py-1 rounded-sm">
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low-to-High</option>
              <option value="high-to-low">High-to-Low</option>
            </select>
          </div>
        </div>
        {/* products card */}
      {
        loading ? <LoadingSkeleton/> : <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {currentItems.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      }
      </div>

      {/* pagination section */}
      <div className="flex justify-center my-8">
        {Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${
              currentPage === index + 1 ? "bg-green text-white" : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

    </div>
    
   </div>
  );
};

export default Menu;
